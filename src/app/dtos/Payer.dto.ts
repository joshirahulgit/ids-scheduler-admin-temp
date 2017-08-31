import { EntityStatus } from "app/dtos/EntityStatus.enum";
import { PayerStatusDto } from "app/dtos/PayerStatus.dto";

export class PayerDto implements IPayerDto {
    payerId: number;
    address?: string;
    phone?: string;
    policyNumber?: string;
    productName?: string;
    provider?: string;
    insuredFirstName?: string;
    insuredDOB: Date;
    expirationDate?: Date;
    comment?: string;
    relationShip?: string;
    fax?: string;
    groupNumber?: string;
    nPINumber?: string;
    lastName?: string;
    gender?: string;
    patientId: number;
    payerName?: string;
    levelIndex: number;
    status: EntityStatus;
    verificationStatus?: PayerStatusDto;
    isGlobal: boolean;
    webSite?: string;
    state?: string;
    insuranceId: number;
    address2?: string;
    zipCode?: string;
    city?: string;
    isEligible?: boolean;
    vendorPayerId?: string;
    piId: number;
    insuredCity?: string;
    insuredState?: string;
    insuredZip?: string;
    insuredAddress?: string;
    payerAddressId: number;
    insuredPhone?: string;
    insuredEmploymentName?: string;
    isDeleted: boolean;
    insuredEmploymentAddress?: string;
    insuranceInfo?: string;

    constructor(data?: IPayerDto) {
        // super(data);
    }

    init(data?: any) {
        // super.init(data);
        if (data) {
            this.payerId = data["PayerId"];
            this.address = data["Address"];
            this.phone = data["Phone"];
            this.policyNumber = data["PolicyNumber"];
            this.productName = data["ProductName"];
            this.provider = data["Provider"];
            this.insuredFirstName = data["InsuredFirstName"];
            this.insuredDOB = data["InsuredDOB"] ? new Date(data["InsuredDOB"].toString()) : <any>undefined;
            this.expirationDate = data["ExpirationDate"] ? new Date(data["ExpirationDate"].toString()) : <any>undefined;
            this.comment = data["Comment"];
            this.relationShip = data["RelationShip"];
            this.fax = data["Fax"];
            this.groupNumber = data["GroupNumber"];
            this.nPINumber = data["NPINumber"];
            this.lastName = data["LastName"];
            this.gender = data["Gender"];
            this.patientId = data["PatientId"];
            this.payerName = data["PayerName"];
            this.levelIndex = data["LevelIndex"];
            this.status = data["Status"];
            this.verificationStatus = data["VerificationStatus"] ? PayerStatusDto.fromJS(data["VerificationStatus"]) : <any>undefined;
            this.isGlobal = data["IsGlobal"];
            this.webSite = data["WebSite"];
            this.state = data["State"];
            this.insuranceId = data["InsuranceId"];
            this.address2 = data["Address2"];
            this.zipCode = data["ZipCode"];
            this.city = data["City"];
            this.isEligible = data["IsEligible"];
            this.vendorPayerId = data["VendorPayerId"];
            this.piId = data["PiId"];
            this.insuredCity = data["InsuredCity"];
            this.insuredState = data["InsuredState"];
            this.insuredZip = data["InsuredZip"];
            this.insuredAddress = data["InsuredAddress"];
            this.payerAddressId = data["PayerAddressId"];
            this.insuredPhone = data["InsuredPhone"];
            this.insuredEmploymentName = data["InsuredEmploymentName"];
            this.isDeleted = data["IsDeleted"];
            this.insuredEmploymentAddress = data["InsuredEmploymentAddress"];
            this.insuranceInfo = data["InsuranceInfo"];
        }
    }

    static fromJS(data: any): PayerDto {
        let result = new PayerDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["PayerId"] = this.payerId;
        data["Address"] = this.address;
        data["Phone"] = this.phone;
        data["PolicyNumber"] = this.policyNumber;
        data["ProductName"] = this.productName;
        data["Provider"] = this.provider;
        data["InsuredFirstName"] = this.insuredFirstName;
        data["InsuredDOB"] = this.insuredDOB ? this.insuredDOB.toISOString() : <any>undefined;
        data["ExpirationDate"] = this.expirationDate ? this.expirationDate.toISOString() : <any>undefined;
        data["Comment"] = this.comment;
        data["RelationShip"] = this.relationShip;
        data["Fax"] = this.fax;
        data["GroupNumber"] = this.groupNumber;
        data["NPINumber"] = this.nPINumber;
        data["LastName"] = this.lastName;
        data["Gender"] = this.gender;
        data["PatientId"] = this.patientId;
        data["PayerName"] = this.payerName;
        data["LevelIndex"] = this.levelIndex;
        data["Status"] = this.status;
        data["VerificationStatus"] = this.verificationStatus ? this.verificationStatus.toJSON() : <any>undefined;
        data["IsGlobal"] = this.isGlobal;
        data["WebSite"] = this.webSite;
        data["State"] = this.state;
        data["InsuranceId"] = this.insuranceId;
        data["Address2"] = this.address2;
        data["ZipCode"] = this.zipCode;
        data["City"] = this.city;
        data["IsEligible"] = this.isEligible;
        data["VendorPayerId"] = this.vendorPayerId;
        data["PiId"] = this.piId;
        data["InsuredCity"] = this.insuredCity;
        data["InsuredState"] = this.insuredState;
        data["InsuredZip"] = this.insuredZip;
        data["InsuredAddress"] = this.insuredAddress;
        data["PayerAddressId"] = this.payerAddressId;
        data["InsuredPhone"] = this.insuredPhone;
        data["InsuredEmploymentName"] = this.insuredEmploymentName;
        data["IsDeleted"] = this.isDeleted;
        data["InsuredEmploymentAddress"] = this.insuredEmploymentAddress;
        data["InsuranceInfo"] = this.insuranceInfo;
        // super.toJSON(data);
        return data; 
    }
}

export interface IPayerDto {
    payerId: number;
    address?: string;
    phone?: string;
    policyNumber?: string;
    productName?: string;
    provider?: string;
    insuredFirstName?: string;
    insuredDOB: Date;
    expirationDate?: Date;
    comment?: string;
    relationShip?: string;
    fax?: string;
    groupNumber?: string;
    nPINumber?: string;
    lastName?: string;
    gender?: string;
    patientId: number;
    payerName?: string;
    levelIndex: number;
    status: EntityStatus;
    verificationStatus?: PayerStatusDto;
    isGlobal: boolean;
    webSite?: string;
    state?: string;
    insuranceId: number;
    address2?: string;
    zipCode?: string;
    city?: string;
    isEligible?: boolean;
    vendorPayerId?: string;
    piId: number;
    insuredCity?: string;
    insuredState?: string;
    insuredZip?: string;
    insuredAddress?: string;
    payerAddressId: number;
    insuredPhone?: string;
    insuredEmploymentName?: string;
    isDeleted: boolean;
    insuredEmploymentAddress?: string;
    insuranceInfo?: string;
}
