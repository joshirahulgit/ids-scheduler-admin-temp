export class CPTModifierDto implements ICPTModifierDto {
    iD: number;
    externalCode?: string;
    code?: string;
    description?: string;
    isGlobal: boolean;
    displayText?: string;

    constructor(data?: ICPTModifierDto) {
        // super(data);
    }

    init(data?: any) {
        // super.init(data);
        if (data) {
            this.iD = data["ID"];
            this.externalCode = data["ExternalCode"];
            this.code = data["Code"];
            this.description = data["Description"];
            this.isGlobal = data["IsGlobal"];
            this.displayText = data["DisplayText"];
        }
    }

    static fromJS(data: any): CPTModifierDto {
        let result = new CPTModifierDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["ID"] = this.iD;
        data["ExternalCode"] = this.externalCode;
        data["Code"] = this.code;
        data["Description"] = this.description;
        data["IsGlobal"] = this.isGlobal;
        data["DisplayText"] = this.displayText;
        // super.toJSON(data);
        return data;
    }
}

export interface ICPTModifierDto {
    iD: number;
    externalCode?: string;
    code?: string;
    description?: string;
    isGlobal: boolean;
    displayText?: string;
}

