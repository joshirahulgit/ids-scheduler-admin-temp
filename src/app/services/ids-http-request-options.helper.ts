import { Injectable } from "@angular/core";
import { environment } from "environments/environment";
import { Headers, RequestOptions, Response, RequestMethod } from "@angular/http";

@Injectable()
export class IdsHttpReqOpt {
    // public token: string;
    public baseUrl: string;

    constructor() {

        // this.token = currentUser && currentUser.token;
        this.baseUrl = environment.apiUrlBase;
    }

    public getToken(): string {
        let currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
        return currentUser && currentUser.token;
    }

    public getHeaders(): Headers {
        let head = new Headers({
            'Content-Type': 'application/json; charset=utf-8', /*or whatever type is relevant */
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + this.getToken()
        });
        return head;
    }

    public get(): RequestOptions {
        new RequestOptions()
        let options = new RequestOptions();
        options.headers = this.getHeaders();
        options.method = RequestMethod.Get;
        return options;
    }

    public post(): RequestOptions {
        new RequestOptions()
        let options = new RequestOptions();
        options.headers = this.getHeaders();
        options.method = RequestMethod.Post;
        return options;
    }
}