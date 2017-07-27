import { Injectable } from "@angular/core";
import { Command } from "./footer";

@Injectable()
export class CommandService {
    private addCommandSubscriptions: Array<(command: Command) => void>;
    private removeCommandSubscriptions: Array<(command: Command) => void>;

    constructor() {
        this.addCommandSubscriptions = [];
        this.removeCommandSubscriptions = [];
    }

    addCommand(command: Command) {
        this.raiseOnAddCommands(command);
    }

    removeCommand(command: Command) {
        this.raiseOnRemoveCommands(command);
    }

    subscribeFooterCommand(addCommand: (command: Command) => void, removeCommand: (command: Command) => void) {
        this.addCommandSubscriptions.push(addCommand);
        this.removeCommandSubscriptions.push(removeCommand);
    }

    unsubscribeFooterCommand(addCommand: (command: Command) => void, removeCommand: (command: Command) => void) {
        let index = this.addCommandSubscriptions.indexOf(addCommand);
        if (index > -1) {
            this.addCommandSubscriptions.splice(index, 1);
        }
        index = this.removeCommandSubscriptions.indexOf(removeCommand);
        if (index > -1) {
            this.removeCommandSubscriptions.splice(index, 1);
        }
    }

    private raiseOnAddCommands(command: Command): void {
        if (this.addCommandSubscriptions != null) {
            this.addCommandSubscriptions.forEach(item => {
                item(command);
            });
        }
    }

    private raiseOnRemoveCommands(command: Command): void {
        if (this.removeCommandSubscriptions != null) {
            this.removeCommandSubscriptions.forEach(item => {
                item(command);
            });
        }
    }
}