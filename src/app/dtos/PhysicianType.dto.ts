import { EntityTypeDto, IEntityTypeDto } from "app/dtos/EntityType.dto";

export class PhysicianTypeDto extends EntityTypeDto implements IPhysicianTypeDto {
    color?: string;

    constructor(data?: IPhysicianTypeDto) {
        super(data);
    }

    init(data?: any) {
        super.init(data);
        if (data) {
            this.color = data["Color"];
        }
    }

    static fromJS(data: any): PhysicianTypeDto {
        let result = new PhysicianTypeDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["Color"] = this.color;
        super.toJSON(data);
        return data; 
    }
}

export interface IPhysicianTypeDto extends IEntityTypeDto {
    color?: string;
}
