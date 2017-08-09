import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ISubscription } from "rxjs/Subscription";
import { AdminService } from "../../services/admin.service";
import { DataSource } from "@angular/cdk";
import { EnumValueConfigAddComponent } from "./enum-value-config-add.component";
import { MdDialog } from "@angular/material";
import { AccountEnumDto } from "app/dtos/AccountEnum.dto";

@Component({
    selector: 'enum-value-component',
    templateUrl: 'enum-value-config.html'
})
export class EnumValueConfigComponent implements OnInit, OnDestroy {

    group: string = '';

    items: Array<AccountEnumDto> = null;//: DataSource<any> = null;

    private _routeSubscription: ISubscription;

    selectedOption: string;

    constructor(private _route: ActivatedRoute, private _service: AdminService, public dialog: MdDialog) {
        // this.items=new DataSource();
    }

    openDialog() {
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
            // if (result == 'true') {
            // }
        });
    }

    ngOnInit(): void {
        this._routeSubscription = this._route.params.subscribe(params => {
            this.group = params['group'];
            let request = this._service.getEnumTypeValues(this.group).subscribe(res => {
                // console.log(res.json().AccountEnums);
                request.unsubscribe();
                let accountEnums: Array<AccountEnumDto> = new Array();

                res.json().AccountEnums.forEach(element => {
                    accountEnums.push(AccountEnumDto.fromJS(element));
                });

                this.items = accountEnums;
                // res.json().forEach(element => {
                //     this.items.push(element);
                // });;

            });
        });
    }

    ngOnDestroy(): void {
        this._routeSubscription.unsubscribe();
    }
}