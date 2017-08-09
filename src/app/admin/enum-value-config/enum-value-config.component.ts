import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ISubscription } from "rxjs/Subscription";
import { AdminService } from "../../services/admin.service";
import { DataSource } from "@angular/cdk";
import { EnumValueConfigAddComponent } from "./enum-value-config-add.component";
import { MdDialog } from "@angular/material";
import { AccountEnumDto } from "app/dtos/AccountEnum.dto";
import { Command, CommandType } from "app/core/Command";

@Component({
    selector: 'enum-value-component',
    templateUrl: 'enum-value-config.component.html'
})
export class EnumValueConfigComponent implements OnInit, OnDestroy {

    group: string = '';

    commands: Array<Command> = [];

    private addCommand: Command;

    items: Array<AccountEnumDto> = null;//: DataSource<any> = null;

    private _routeSubscription: ISubscription;

    selectedOption: string;

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
        this.openDialog();
    };

    openDialog(): void {
        let dialogRef = this.dialog.open(EnumValueConfigAddComponent);
        // dialogRef.disableClose = true;
        dialogRef.afterClosed().subscribe(result => {

            console.log(result);
            // if (result == 'true') {
            // }
        });
    }

    onEditClick(accountEnum: AccountEnumDto) {
        let dialogRef = this.dialog.open(EnumValueConfigAddComponent);
        dialogRef.componentInstance.setAccountEnum(accountEnum);

        // dialogRef.disableClose = true;
        dialogRef.afterClosed().subscribe(result => {

            console.log(result);
        });
    }

    ngOnInit(): void {
        this._routeSubscription = this._route.params.subscribe(params => {
            this.group = params['group'];
            let request = this._service.getEnumTypeValues(this.group).subscribe(res => {
                request.unsubscribe();
                let accountEnums: Array<AccountEnumDto> = new Array();

                res.json().AccountEnums.forEach(element => {
                    accountEnums.push(AccountEnumDto.fromJS(element));
                });

                this.items = accountEnums;
            });
        });
    }

    ngOnDestroy(): void {
        this._routeSubscription.unsubscribe();
    }
}