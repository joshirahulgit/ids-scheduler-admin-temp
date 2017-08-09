
export class Command {
    constructor(public name: string,
        public command: () => void,
        public commandType?: CommandType | CommandType.None,
        public isVisible?: boolean | true,
        public isDisabled?: boolean | false
    ) {

    }

    onClick() {
        this.command();
    }
}

export enum CommandType {
    None,
    Add,
    Edit,
    Delete,
    SelectAll,
    UnselectAll
}