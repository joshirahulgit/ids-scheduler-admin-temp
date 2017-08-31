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
import { VolumeUnitDto } from "app/dtos/VolumeUnit.dto";
import { CommentTypeDto } from "app/dtos/CommentType.dto";
import { PhysicianTypeDto } from "app/dtos/PhysicianType.dto";
import { DiagnosisDto } from "app/dtos/Diagnosis.dto";
import { ProcedureDto } from "app/dtos/Procedure.dto";

@Injectable()
export class AdminService {

    // private baseUrl = environment.apiUrlBase;
    // private url = 'http://localhost:1337/api/Account?enumType=';

    constructor(private _http: Http, private _reqOpt: IdsHttpReqOpt) {

    }

    public getTechCompleteSuggestions(): Observable<Array<TechCompleteSuggestionListDto>> {
        let url = this._reqOpt.baseUrl + "TechCompleteSuggestion";

        let req = this._http.get(url, this._reqOpt.get());

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
        let url = this._reqOpt.baseUrl + "AccountEnum?enumType=";
        return this._http.get(url + type, this._reqOpt.get());
    }

    public saveEnumTypeValue(accountEnumDto: AccountEnumDto): Observable<Response> {

        let url = this._reqOpt.baseUrl + "AccountEnum";
        return this._http.post(url, JSON.stringify(accountEnumDto.toJSON()),
            this._reqOpt.post());
    }

    public getVolumeUnits(): Observable<Array<VolumeUnitDto>> {
        let url = this._reqOpt.baseUrl + "VolumeUnit";

        return this._http.get(url, this._reqOpt.get()).map((res: Response) => {
            let items = new Array<VolumeUnitDto>();
            res.json().forEach(element => {
                items.push(VolumeUnitDto.fromJS(element));
            });
            return items;
        });
    }

    public getCommentTypes(): Observable<Array<CommentTypeDto>> {
        let url = this._reqOpt.baseUrl + "CommentType";

        return this._http.get(url, this._reqOpt.get()).map((res: Response) => {
            let items = new Array<CommentTypeDto>();
            res.json().forEach(element => {
                items.push(CommentTypeDto.fromJS(element));
            });
            return items;
        });
    }

    public getProviderRoles(): Observable<Array<PhysicianTypeDto>> {
        let url = this._reqOpt.baseUrl + "PhysicianType";
        return this._http.get(url, this._reqOpt.get()).map((req: Response) => {
            let items = new Array<PhysicianTypeDto>();
            req.json().forEach(element => {
                items.push(PhysicianTypeDto.fromJS(element));
            });
            return items;
        });
    }

    public getLocalDiagnoses(): Observable<Array<DiagnosisDto>> {
        let url = this._reqOpt.baseUrl + "LocalDiagnosis";
        return this._http.get(url, this._reqOpt.get()).map((req: Response) => {
            let items = new Array<DiagnosisDto>();
            req.json().forEach(element => {
                items.push(DiagnosisDto.fromJS(element));
            });
            return items;
        });
    }

    public getLocalProcedures(): Observable<Array<ProcedureDto>> {
        let url = this._reqOpt.baseUrl + "LocalProcedures";
        return this._http.get(url, this._reqOpt.get()).map((req: Response) => {
            let items = new Array<ProcedureDto>();
            req.json().forEach(element => {
                items.push(ProcedureDto.fromJS(element));
            });
            return items;
        });
    }
}