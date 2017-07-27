import { } from "@angular/core";

export class Command{
    public constructor(public name:string, public command:()=>void){

    }    

    onClick(){
        this.command();
    }
}