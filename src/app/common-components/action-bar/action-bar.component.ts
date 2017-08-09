import { Component, Input } from "@angular/core";
import { Command } from "app/core/Command";

@Component({
    selector: 'action-bar',
    templateUrl: 'action-bar.component.html',
    styleUrls: ['action-bar.component.scss']
})
export class ActionBarComponent {

    @Input('commands')
    commands: Array<Command> = [];

    constructor() {

    }
}