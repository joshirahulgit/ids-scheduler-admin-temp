import { Component, OnInit, OnDestroy } from "@angular/core";
import { Command, CommandType } from "app/core/Command";
import { MdDialog } from "@angular/material";
import { AdminService } from "app/services/admin.service";
import { ActivatedRoute } from "@angular/router";
import { TechCompleteSuggestionListDto } from "app/dtos/TechCompleteSuggestionList.dto";

@Component({
    selector: 'tech-component-suggestion',
    templateUrl: 'tech-complete-suggestion.component.html'
})
export class TechCompleteSuggestionComponent implements OnInit, OnDestroy {

    techCompleteSuggestions: Array<TechCompleteSuggestionListDto> = [];

    commands: Array<Command> = [];

    private addCommand: Command;

    constructor(private _route: ActivatedRoute,
        private _service: AdminService,
        public dialog: MdDialog) {
        // this.items=new DataSource();
        this.initializeCommands();
    }

    initializeCommands(): void {
        this.addCommand = new Command("Add New", this.OnAddCommandCall.bind(this), CommandType.Add);
        this.commands.push(this.addCommand);
    }

    OnAddCommandCall(): void {
        // this.openDialog();
    };

    ngOnDestroy(): void {
        // throw new Error("Method not implemented.");
    }

    ngOnInit(): void {
        let request = this._service.getTechCompleteSuggestions().subscribe(res => {
            request.unsubscribe();
            this.techCompleteSuggestions = res;
        },err=>{
            request.unsubscribe();
            console.log(err);
        });
    }

}