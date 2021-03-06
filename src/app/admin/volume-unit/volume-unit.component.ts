import { Component, OnInit, OnDestroy } from "@angular/core";
import { Command, CommandType } from "app/core/Command";
import { ActivatedRoute } from "@angular/router";
import { AdminService } from "app/services/admin.service";
import { MdDialog } from "@angular/material";
import { VolumeUnitDto } from "app/dtos/VolumeUnit.dto";

@Component({
    selector: 'volume-unit',
    templateUrl: 'volume-unit.component.html'
})
export class VolumeUnitComponent implements OnInit, OnDestroy {

    volumeUnits: Array<VolumeUnitDto> = [];

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
        let subscription = this._service.getVolumeUnits().subscribe(result => {
            subscription.unsubscribe();
            this.volumeUnits = result;
        },err=>{
            subscription.unsubscribe();
            console.log(err);
        });
    }
}