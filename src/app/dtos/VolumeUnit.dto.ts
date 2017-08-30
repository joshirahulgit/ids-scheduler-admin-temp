// import { Observable } from 'rxjs/Observable';

export class VolumeUnitDto implements IVolumeUnitDto {
    id: number;
    displayName?: string;
    isVisible: boolean;
    isDeleted: boolean;

    constructor(data?: IVolumeUnitDto) {
        // super(data);
    }

    init(data?: any) {
        // super.init(data);
        if (data) {
            this.id = data["Id"];
            this.displayName = data["DisplayName"];
            this.isVisible = data["IsVisible"];
            this.isDeleted = data["IsDeleted"];
        }
    }

    static fromJS(data: any): VolumeUnitDto {
        let result = new VolumeUnitDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["Id"] = this.id;
        data["DisplayName"] = this.displayName;
        data["IsVisible"] = this.isVisible;
        data["IsDeleted"] = this.isDeleted;
        // super.toJSON(data);
        return data; 
    }
}

export interface IVolumeUnitDto {
    id: number;
    displayName?: string;
    isVisible: boolean;
    isDeleted: boolean;
}