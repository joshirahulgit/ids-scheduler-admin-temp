import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ISubscription } from "rxjs/Subscription";
import { AdminService } from "../../services/admin.service";
import { DataSource } from "@angular/cdk";

@Component({
    selector: 'enum-value-component',
    templateUrl: 'enum-value-config.html'
})
export class EnumValueConfigComponent implements OnInit, OnDestroy {

    group: string = '';

    items=[];//: DataSource<any> = null;

    private _routeSubscription: ISubscription;

    constructor(private _route: ActivatedRoute, private _service: AdminService) {
        // this.items=new DataSource();
    }

    ngOnInit(): void {
        this._routeSubscription = this._route.params.subscribe(params => {
            this.group = params['group'];
            let request = this._service.getEnumTypeValues(this.group).subscribe(res => {
                // console.log(res.json().AccountEnums);
                request.unsubscribe();
                this.items = res.json().AccountEnums;
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