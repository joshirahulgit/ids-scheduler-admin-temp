export class EntityTypeDto implements IEntityTypeDto {
    typeId: number;
    typeName?: string;
    isVisible: boolean;
    isSystem: boolean;
    text?: string;

    constructor(data?: IEntityTypeDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.typeId = data["TypeId"];
            this.typeName = data["TypeName"];
            this.isVisible = data["IsVisible"];
            this.isSystem = data["IsSystem"];
            this.text = data["Text"];
        }
    }

    static fromJS(data: any): EntityTypeDto {
        let result = new EntityTypeDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["TypeId"] = this.typeId;
        data["TypeName"] = this.typeName;
        data["IsVisible"] = this.isVisible;
        data["IsSystem"] = this.isSystem;
        data["Text"] = this.text;
        return data; 
    }
}

export interface IEntityTypeDto {
    typeId: number;
    typeName?: string;
    isVisible: boolean;
    isSystem: boolean;
    text?: string;
}
