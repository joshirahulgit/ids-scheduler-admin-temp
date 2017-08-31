import { CptBaseDto, ICptBaseDto } from "app/dtos/CptBase.dto";
import { CPTModifierDto } from "app/dtos/CPTModifier.dto";
import { PayerDto } from "app/dtos/Payer.dto";
import { ResourceDurationDto } from "app/dtos/ResourceDuration.dto";

export class ProcedureDto extends CptBaseDto implements IProcedureDto {
    stringCategory?: string;
    comment?: string;
    timeOverheadMinutes?: number;
    linkedRoomTypeId: number;
    overrideCreationMode?: number;
    modifiers?: CPTModifierDto[];
    hCPCScodeName?: string;
    mammogramType?: string;
    isOrderRequired: boolean;
    displayOrder: number;
    createOrder: boolean;
    patientInsuranceId?: number;
    patientGuarantorId?: number;
    insurances?: PayerDto[];
    resourceDurationOverride?: ResourceDurationDto;
    isSelfPay: boolean;
    procNote?: string;

    constructor(data?: IProcedureDto) {
        super(data);
    }

    init(data?: any) {
        super.init(data);
        if (data) {
            this.stringCategory = data["StringCategory"];
            this.comment = data["Comment"];
            this.timeOverheadMinutes = data["TimeOverheadMinutes"];
            this.linkedRoomTypeId = data["LinkedRoomTypeId"];
            this.overrideCreationMode = data["OverrideCreationMode"];
            if (data["Modifiers"] && data["Modifiers"].constructor === Array) {
                this.modifiers = [];
                for (let item of data["Modifiers"])
                    this.modifiers.push(CPTModifierDto.fromJS(item));
            }
            this.hCPCScodeName = data["HCPCScodeName"];
            this.mammogramType = data["MammogramType"];
            this.isOrderRequired = data["IsOrderRequired"];
            this.displayOrder = data["DisplayOrder"];
            this.createOrder = data["CreateOrder"];
            this.patientInsuranceId = data["PatientInsuranceId"];
            this.patientGuarantorId = data["PatientGuarantorId"];
            if (data["Insurances"] && data["Insurances"].constructor === Array) {
                this.insurances = [];
                for (let item of data["Insurances"])
                    this.insurances.push(PayerDto.fromJS(item));
            }
            this.resourceDurationOverride = data["ResourceDurationOverride"] ? ResourceDurationDto.fromJS(data["ResourceDurationOverride"]) : <any>undefined;
            this.isSelfPay = data["IsSelfPay"];
            this.procNote = data["ProcNote"];
        }
    }

    static fromJS(data: any): ProcedureDto {
        let result = new ProcedureDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["StringCategory"] = this.stringCategory;
        data["Comment"] = this.comment;
        data["TimeOverheadMinutes"] = this.timeOverheadMinutes;
        data["LinkedRoomTypeId"] = this.linkedRoomTypeId;
        data["OverrideCreationMode"] = this.overrideCreationMode;
        if (this.modifiers && this.modifiers.constructor === Array) {
            data["Modifiers"] = [];
            for (let item of this.modifiers)
                data["Modifiers"].push(item.toJSON());
        }
        data["HCPCScodeName"] = this.hCPCScodeName;
        data["MammogramType"] = this.mammogramType;
        data["IsOrderRequired"] = this.isOrderRequired;
        data["DisplayOrder"] = this.displayOrder;
        data["CreateOrder"] = this.createOrder;
        data["PatientInsuranceId"] = this.patientInsuranceId;
        data["PatientGuarantorId"] = this.patientGuarantorId;
        if (this.insurances && this.insurances.constructor === Array) {
            data["Insurances"] = [];
            for (let item of this.insurances)
                data["Insurances"].push(item.toJSON());
        }
        data["ResourceDurationOverride"] = this.resourceDurationOverride ? this.resourceDurationOverride.toJSON() : <any>undefined;
        data["IsSelfPay"] = this.isSelfPay;
        data["ProcNote"] = this.procNote;
        super.toJSON(data);
        return data; 
    }
}

export interface IProcedureDto extends ICptBaseDto {
    stringCategory?: string;
    comment?: string;
    timeOverheadMinutes?: number;
    linkedRoomTypeId: number;
    overrideCreationMode?: number;
    modifiers?: CPTModifierDto[];
    hCPCScodeName?: string;
    mammogramType?: string;
    isOrderRequired: boolean;
    displayOrder: number;
    createOrder: boolean;
    patientInsuranceId?: number;
    patientGuarantorId?: number;
    insurances?: PayerDto[];
    resourceDurationOverride?: ResourceDurationDto;
    isSelfPay: boolean;
    procNote?: string;
}
