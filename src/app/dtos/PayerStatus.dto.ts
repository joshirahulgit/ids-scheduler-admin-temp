export class PayerStatusDto implements IPayerStatusDto {
    additionalInfo?: string;
    isComplete: boolean;
    isSuccessful: boolean;
    userText?: string;
    verificationDateTime?: Date;
    lastRequestedDictatorKey?: string;
    lastRequestedDictatorValue?: string;
    validationRequestID?: string;

    constructor(data?: IPayerStatusDto) {
        // super(data);
    }

    init(data?: any) {
        // super.init(data);
        if (data) {
            this.additionalInfo = data["AdditionalInfo"];
            this.isComplete = data["IsComplete"];
            this.isSuccessful = data["IsSuccessful"];
            this.userText = data["UserText"];
            this.verificationDateTime = data["VerificationDateTime"] ? new Date(data["VerificationDateTime"].toString()) : <any>undefined;
            this.lastRequestedDictatorKey = data["LastRequestedDictatorKey"];
            this.lastRequestedDictatorValue = data["LastRequestedDictatorValue"];
            this.validationRequestID = data["ValidationRequestID"];
        }
    }

    static fromJS(data: any): PayerStatusDto {
        let result = new PayerStatusDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["AdditionalInfo"] = this.additionalInfo;
        data["IsComplete"] = this.isComplete;
        data["IsSuccessful"] = this.isSuccessful;
        data["UserText"] = this.userText;
        data["VerificationDateTime"] = this.verificationDateTime ? this.verificationDateTime.toISOString() : <any>undefined;
        data["LastRequestedDictatorKey"] = this.lastRequestedDictatorKey;
        data["LastRequestedDictatorValue"] = this.lastRequestedDictatorValue;
        data["ValidationRequestID"] = this.validationRequestID;
        // super.toJSON(data);
        return data; 
    }
}

export interface IPayerStatusDto {
    additionalInfo?: string;
    isComplete: boolean;
    isSuccessful: boolean;
    userText?: string;
    verificationDateTime?: Date;
    lastRequestedDictatorKey?: string;
    lastRequestedDictatorValue?: string;
    validationRequestID?: string;
}
