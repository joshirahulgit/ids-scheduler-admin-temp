export class CptBaseDto implements ICptBaseDto {
    flag?: string;
    id: number;
    alertText?: string;
    amount?: string;
    volume?: string;
    code?: string;
    onsetDate?: Date;
    shortDescription?: string;
    mediumDescription?: string;
    longDescription?: string;
    globalId?: string;
    isGlobal: boolean;
    category?: string;
    linkedRoomId?: number;
    linkedApptId?: number;
    displayText?: string;

    constructor(data?: ICptBaseDto) {
        // super(data);
    }

    init(data?: any) {
        // super.init(data);
        if (data) {
            this.flag = data["Flag"];
            this.id = data["Id"];
            this.alertText = data["AlertText"];
            this.amount = data["Amount"];
            this.volume = data["Volume"];
            this.code = data["Code"];
            this.onsetDate = data["OnsetDate"] ? new Date(data["OnsetDate"].toString()) : <any>undefined;
            this.shortDescription = data["ShortDescription"];
            this.mediumDescription = data["MediumDescription"];
            this.longDescription = data["LongDescription"];
            this.globalId = data["GlobalId"];
            this.isGlobal = data["IsGlobal"];
            this.category = data["Category"];
            this.linkedRoomId = data["LinkedRoomId"];
            this.linkedApptId = data["LinkedApptId"];
            this.displayText = data["DisplayText"];
        }
    }

    static fromJS(data: any): CptBaseDto {
        let result = new CptBaseDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["Flag"] = this.flag;
        data["Id"] = this.id;
        data["AlertText"] = this.alertText;
        data["Amount"] = this.amount;
        data["Volume"] = this.volume;
        data["Code"] = this.code;
        data["OnsetDate"] = this.onsetDate ? this.onsetDate.toISOString() : <any>undefined;
        data["ShortDescription"] = this.shortDescription;
        data["MediumDescription"] = this.mediumDescription;
        data["LongDescription"] = this.longDescription;
        data["GlobalId"] = this.globalId;
        data["IsGlobal"] = this.isGlobal;
        data["Category"] = this.category;
        data["LinkedRoomId"] = this.linkedRoomId;
        data["LinkedApptId"] = this.linkedApptId;
        data["DisplayText"] = this.displayText;
        // super.toJSON(data);
        return data; 
    }
}

export interface ICptBaseDto {
    flag?: string;
    id: number;
    alertText?: string;
    amount?: string;
    volume?: string;
    code?: string;
    onsetDate?: Date;
    shortDescription?: string;
    mediumDescription?: string;
    longDescription?: string;
    globalId?: string;
    isGlobal: boolean;
    category?: string;
    linkedRoomId?: number;
    linkedApptId?: number;
    displayText?: string;
}
