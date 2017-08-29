import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
import { environment } from "environments/environment";
import { UserDto } from "app/dtos/User.dto";
import { AccountDto } from "app/dtos/Account.dto";
import { IdsHttpReqOpt } from "app/services/ids-http-request-options.helper";

@Injectable()
export class AuthenticationService {
    // public token: string;

    constructor(private _http: Http, private _reqOpt: IdsHttpReqOpt) {
        // set token if saved in local storage
        // var currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
        // this.token = currentUser && currentUser.token;
    }

    setAccount(account: AccountDto): Observable<boolean> {

        let url = this._reqOpt.baseUrl + "Account";

        return this._http.post(url, account, this._reqOpt.post()).map((res: Response) => {
            if (res.status == 200) {
                // login successful if there's a jwt token in the response
                let token = res.json().token;

                if (token) {
                    // set token property
                    // this.token = token;

                    // store username and jwt token in local storage to keep user logged in between page refreshes
                    sessionStorage.setItem('currentUser', JSON.stringify({ token: token }));

                    // return true to indicate successful login
                    return true;
                } else {
                    // return false to indicate failed login
                    return false;
                }
            }
            else {
                return false;
            }
        });
    }

    login(user: UserDto): Observable<UserDto> {
        let url = this._reqOpt.baseUrl + "Auth";

        return this._http.post(url, user.toJSON())
            .map((response: Response) => {

                let user = UserDto.fromJS(response.json());

                // login successful if there's a jwt token in the response
                let token = user.token;

                if (token) {
                    // set token property
                    // this.token = token;

                    // store username and jwt token in local storage to keep user logged in between page refreshes
                    sessionStorage.setItem('currentUser', JSON.stringify({ token: token }));

                    // return true to indicate successful login
                    return user;
                } else {
                    // return false to indicate failed login
                    return null;
                }
            });

    }

    logout(): void {
        // clear token remove user from local storage to log user out
        // this._reqOpt.token = null;
        sessionStorage.removeItem('currentUser');
    }
}