import { Injectable } from "@angular/core";
import { Http, Response, RequestOptions, RequestMethod, Headers } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { AccountEnumDto } from "app/dtos/AccountEnum.dto";

@Injectable()
export class AdminService {

    private baseUrl = "http://localhost:1337/api/";
    // private url = 'http://localhost:1337/api/Account?enumType=';

    constructor(private _http: Http) {

    }

    public getEnumTypeValues(type: string): Observable<Response> {
        let url = this.baseUrl + "Account?enumType=";
        return this._http.get(url + type);
    }

    public saveEnumTypeValue(accountEnumDto: AccountEnumDto): Observable<Response> {

        let url = this.baseUrl + "Account";

        let head = new Headers({
            'Content-Type': 'application/json; charset=utf-8', /*or whatever type is relevant */
            'Accept': 'application/json'
        });

        const options = new RequestOptions({
            method: RequestMethod.Post,
            // url: url,
            headers: head
        });
        return this._http.post(url, JSON.stringify(accountEnumDto.toJSON()), options);
    }
}