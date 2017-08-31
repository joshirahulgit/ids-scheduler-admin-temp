import { Component, OnInit, OnDestroy } from "@angular/core";
import { Command, CommandType } from "app/core/Command";
import { ActivatedRoute } from "@angular/router";
import { AdminService } from "app/services/admin.service";
import { MdDialog } from "@angular/material";
import { DiagnosisDto } from "app/dtos/Diagnosis.dto";
import { ProcedureDto } from "app/dtos/Procedure.dto";

@Component({
    selector: 'local-procedures',
    templateUrl: 'local-procedures.component.html'
})
export class LocalProceduresComponent implements OnInit, OnDestroy {

    loaclProcedures: Array<ProcedureDto> = [];

    commands: Array<Command> = [];

    private addCommand: Command;

    constructor(private _route: ActivatedRoute,
        private _service: AdminService,
        public dialog: MdDialog) {
        // this.items=new DataSource();
        this.initializeCommands();
    }

    initializeCommands(): void {
        this.addCommand = new Command("Add New", this.OnAddCommandCall.bind(this), CommandType.Add);
        this.commands.push(this.addCommand);
    }

    OnAddCommandCall(): void {
        // this.openDialog();
    };

    ngOnDestroy(): void {
        // throw new Error("Method not implemented.");
    }

    ngOnInit(): void {
        let subscription = this._service.getLocalProcedures().subscribe(result => {
            subscription.unsubscribe();
            this.loaclProcedures = result.sort((one,two)=>{
                if ( one.code < two.code )
                    return -1;
                if ( one.code > two.code )
                    return 1;
                return 0;
            });
        }, err => {
            subscription.unsubscribe();
            console.log(err);
        });
    }
}