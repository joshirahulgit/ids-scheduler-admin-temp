import { AccessControlEntryDto } from "app/dtos/AccessControlEntry.dto";

export class AccessControlListDto implements IAccessControlListDto {
    entries?: AccessControlEntryDto[];

    constructor(data?: IAccessControlListDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            if (data["Entries"] && data["Entries"].constructor === Array) {
                this.entries = [];
                for (let item of data["Entries"])
                    this.entries.push(AccessControlEntryDto.fromJS(item));
            }
        }
    }

    static fromJS(data: any): AccessControlListDto {
        let result = new AccessControlListDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        if (this.entries && this.entries.constructor === Array) {
            data["Entries"] = [];
            for (let item of this.entries)
                data["Entries"].push(item.toJSON());
        }
        return data; 
    }
}

export interface IAccessControlListDto {
    entries?: AccessControlEntryDto[];
}
