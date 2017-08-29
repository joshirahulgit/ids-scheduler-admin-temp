import { Permission } from "app/dtos/Permission.enum";
import { SchedulerSecuredEntities } from "app/dtos/SchedulerSecuredEntities.enum";

export class AccessControlEntryDto implements IAccessControlEntryDto {
    name?: string;
    create: Permission;
    update: Permission;
    read: Permission;
    delete: Permission;
    id: SchedulerSecuredEntities;
    longId: number;
    isInherit: boolean;

    constructor(data?: IAccessControlEntryDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.name = data["Name"];
            this.create = data["Create"];
            this.update = data["Update"];
            this.read = data["Read"];
            this.delete = data["Delete"];
            this.id = data["Id"];
            this.longId = data["LongId"];
            this.isInherit = data["IsInherit"];
        }
    }

    static fromJS(data: any): AccessControlEntryDto {
        let result = new AccessControlEntryDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["Name"] = this.name;
        data["Create"] = this.create;
        data["Update"] = this.update;
        data["Read"] = this.read;
        data["Delete"] = this.delete;
        data["Id"] = this.id;
        data["LongId"] = this.longId;
        data["IsInherit"] = this.isInherit;
        return data; 
    }
}

export interface IAccessControlEntryDto {
    name?: string;
    create: Permission;
    update: Permission;
    read: Permission;
    delete: Permission;
    id: SchedulerSecuredEntities;
    longId: number;
    isInherit: boolean;
}
