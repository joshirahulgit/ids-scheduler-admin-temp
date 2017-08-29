import { Response, RequestOptions, RequestMethod, Headers } from "@angular/http";

export class ServiceResponse<T>{
    public hasError: boolean = false;

    public error: any = null;

    constructor(public result: T) {

    }

    // public digest(res: Response) {
    //     if (res.status === 200) {

    //         if (this.result != null && this.result instanceof Array) {
    //             let items = new Array<any>();
    //             res.json().forEach(element => {
    //                 items.push(TechCompleteSuggestionListDto.fromJS(element));
    //             });
    //             return techCompleteSuggestionList;
    //         }
    //         else {

    //         }
    //     }
    //     else {
    //         this.hasError = true;
    //     }
    // }
}