import { Component, OnInit, OnDestroy } from "@angular/core";
import { PhysicianTypeDto } from "app/dtos/PhysicianType.dto";
import { Command, CommandType } from "app/core/Command";
import { ActivatedRoute } from "@angular/router";
import { AdminService } from "app/services/admin.service";
import { MdDialog } from "@angular/material";

@Component({
    selector: 'provider-role',
    templateUrl: 'provider-role.component.html'
})
export class ProviderRoleComponent implements OnInit, OnDestroy {

    physicianTypes: Array<PhysicianTypeDto> = [];

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
        let subscription = this._service.getProviderRoles().subscribe(result => {
            subscription.unsubscribe();
            this.physicianTypes = result;
        }, err => {
            subscription.unsubscribe();
            console.log(err);
        });
    }
}