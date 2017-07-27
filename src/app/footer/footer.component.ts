import { Component, OnInit, OnDestroy } from "@angular/core";
import { CommandService } from "./footer.service";
import { Command } from "./footer";

@Component({
    selector: "sd-footer",
    templateUrl: "./footer.component.html",
    styleUrls: ["./footer.component.css"]
})
export class FooterComponent implements OnInit, OnDestroy {

    public commands: Array<Command>;

    public constructor(private _footerService: CommandService) {
        this.commands = new Array<Command>();
    }

    ngOnInit(): void {
        //bind(this) is important to access this in call back function. 
        this._footerService.subscribeFooterCommand(
            this.onAddFooterCommand.bind(this),
            this.onRemoveFooterCommand.bind(this)
        );
    }

    ngOnDestroy(): void {
        this._footerService.unsubscribeFooterCommand(
            this.onAddFooterCommand.bind(this),
            this.onRemoveFooterCommand.bind(this)
        );
    }

    private onAddFooterCommand(command: Command) {
        this.commands.push(command);
    }

    private onRemoveFooterCommand(command: Command) {
        let index = this.commands.indexOf(command);
        if (index > -1) {
            this.commands.splice(index, 1);
        }
    }
}

