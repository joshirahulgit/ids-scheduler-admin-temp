import { AccessControlListDto } from "app/dtos/AccessControlList.dto";

export class UserRoleDto implements IUserRoleDto {
    id: number;
    name?: string;
    toolTip?: string;
    acl?: AccessControlListDto;
    canBeDeleted: boolean;

    constructor(data?: IUserRoleDto) {
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
            this.toolTip = data["ToolTip"];
            this.acl = data["Acl"] ? AccessControlListDto.fromJS(data["Acl"]) : <any>undefined;
            this.canBeDeleted = data["CanBeDeleted"];
        }
    }

    static fromJS(data: any): UserRoleDto {
        let result = new UserRoleDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["Id"] = this.id;
        data["Name"] = this.name;
        data["ToolTip"] = this.toolTip;
        data["Acl"] = this.acl ? this.acl.toJSON() : <any>undefined;
        data["CanBeDeleted"] = this.canBeDeleted;
        return data; 
    }
}

export interface IUserRoleDto {
    id: number;
    name?: string;
    toolTip?: string;
    acl?: AccessControlListDto;
    canBeDeleted: boolean;
}
