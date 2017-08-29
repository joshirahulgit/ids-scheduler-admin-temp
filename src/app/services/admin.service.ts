import { Injectable } from "@angular/core";
import { Http, Response, RequestOptions, RequestMethod, Headers } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { AccountEnumDto } from "app/dtos/AccountEnum.dto";
import { environment } from "../../environments/environment";
import { TechCompleteSuggestionListDto } from "app/dtos/TechCompleteSuggestionList.dto";
import "rxjs/add/operator/catch";
import 'rxjs/Rx';
import { ServiceResponse } from "app/services/service-response";
import { IdsHttpReqOpt } from "app/services/ids-http-request-options.helper";

@Injectable()
export class AdminService {

    private baseUrl = environment.apiUrlBase;
    // private url = 'http://localhost:1337/api/Account?enumType=';

    constructor(private _http: Http, private _reqOpt: IdsHttpReqOpt) {

    }

    public getTechCompleteSuggestions(): Observable<Array<TechCompleteSuggestionListDto>> {
        let url = this.baseUrl + "TechCompleteSuggestion";

        let req = this._http.get(url,this._reqOpt.get());

        return req.map((res: Response) => {
            if (res.status != 200)
                return Observable.throw("Error calling api.");

            let techCompleteSuggestionList: Array<TechCompleteSuggestionListDto> = new Array<TechCompleteSuggestionListDto>();
            res.json().forEach(element => {
                techCompleteSuggestionList.push(TechCompleteSuggestionListDto.fromJS(element));
            });
            return techCompleteSuggestionList;
        }).catch((res: Response) => {
            return Observable.throw("Not Valid call.");
        });

        // let cb=new Observable<Array<TechCompleteSuggestionListDto>>();

        // let req = this._http.get(url).subscribe(res => {
        //     req.unsubscribe();
        //     let techCompleteSuggestionList: Array<TechCompleteSuggestionListDto> = new Array<TechCompleteSuggestionListDto>();
        //     res.json().forEach(element => {
        //         techCompleteSuggestionList.push(TechCompleteSuggestionListDto.fromJS(element));
        //     });
        //      cb.publish(techCompleteSuggestionList);// call(techCompleteSuggestionList);
        // });
        // return cb;
    }

    public getEnumTypeValues(type: string): Observable<Response> {
        let url = this.baseUrl + "AccountEnum?enumType=";
        return this._http.get(url + type, this._reqOpt.get());
    }

    public saveEnumTypeValue(accountEnumDto: AccountEnumDto): Observable<Response> {

        let url = this.baseUrl + "AccountEnum";
        return this._http.post(url, JSON.stringify(accountEnumDto.toJSON()),
         this._reqOpt.post());
    }
}