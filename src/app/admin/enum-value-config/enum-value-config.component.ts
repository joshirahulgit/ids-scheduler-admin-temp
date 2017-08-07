import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ISubscription } from "rxjs/Subscription";

@Component({
    selector: 'enum-value-component',
    templateUrl: 'enum-value-config.html'
})
export class EnumValueConfigComponent implements OnInit, OnDestroy {

    group: string = '';

    private _routeSubscription: ISubscription;

    constructor(private _route: ActivatedRoute) {

    }

    ngOnInit(): void {
        this._routeSubscription = this._route.params.subscribe(params => {
            this.group = params['group'];
        });
    }

    ngOnDestroy(): void {
        this._routeSubscription.unsubscribe();
    }
}