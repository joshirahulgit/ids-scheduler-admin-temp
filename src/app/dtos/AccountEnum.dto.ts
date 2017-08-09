
export class AccountEnumDto {
    id: number;
    name?: string;
    value?: string;
    isVisible: boolean;
    enumType?: string;
    isDefault: boolean;
    userCanEdit: boolean;
    userCanDelete: boolean;
    text?: string;

    constructor(data?: IAccountEnumDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.id = data["Id"];
            this.name = data["Name"];
            this.value = data["Value"];
            this.isVisible = data["IsVisible"];
            this.enumType = data["EnumType"];
            this.isDefault = data["IsDefault"];
            this.userCanEdit = data["UserCanEdit"];
            this.userCanDelete = data["UserCanDelete"];
            this.text = data["Text"];
        }
    }

    static fromJS(data: any): AccountEnumDto {
        let result = new AccountEnumDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["Id"] = this.id;
        data["Name"] = this.name;
        data["Value"] = this.value;
        data["IsVisible"] = this.isVisible;
        data["EnumType"] = this.enumType;
        data["IsDefault"] = this.isDefault;
        data["UserCanEdit"] = this.userCanEdit;
        data["UserCanDelete"] = this.userCanDelete;
        data["Text"] = this.text;
        return data;
    }
}

export interface IAccountEnumDto {
    id: number;
    name?: string;
    value?: string;
    isVisible: boolean;
    enumType?: string;
    isDefault: boolean;
    userCanEdit: boolean;
    userCanDelete: boolean;
    text?: string;
}

function throwException(message: string, status: number, response: string, result?: any): any {
    if (result !== null && result !== undefined)
        throw result;
}