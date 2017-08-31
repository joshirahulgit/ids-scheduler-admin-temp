import { ICptBaseDto, CptBaseDto } from "app/dtos/CptBase.dto";

export class DiagnosisDto extends CptBaseDto implements IDiagnosisDto {
    chronic?: string;
    isChronic: boolean;
    stringCategory?: string;

    constructor(data?: IDiagnosisDto) {
        super(data);
    }

    init(data?: any) {
        super.init(data);
        if (data) {
            this.chronic = data["Chronic"];
            this.isChronic = data["IsChronic"];
            this.stringCategory = data["StringCategory"];
        }
    }

    static fromJS(data: any): DiagnosisDto {
        let result = new DiagnosisDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["Chronic"] = this.chronic;
        data["IsChronic"] = this.isChronic;
        data["StringCategory"] = this.stringCategory;
        super.toJSON(data);
        return data; 
    }
}

export interface IDiagnosisDto extends ICptBaseDto {
    chronic?: string;
    isChronic: boolean;
    stringCategory?: string;
}
