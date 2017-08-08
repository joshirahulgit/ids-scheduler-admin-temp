import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class AdminService {
    private url = 'http://localhost:1337/api/Account?enumType=';

    constructor(private _http: Http) {

    }

    public getEnumTypeValues(type: string): Observable<Response> {
        return this._http.get(this.url + type);
    }
}