import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { IdsHttpReqOpt } from "app/services/ids-http-request-options.helper";

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router,
        private _reqOpt: IdsHttpReqOpt) { }

    canActivate() {
        if (this._reqOpt.getToken()) {
            // logged in so return true
            return true;
        }

        // not logged in so redirect to login page
        this.router.navigate(['/login']);
        return false;
    }
}