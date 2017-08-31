export class ResourceDurationDto implements IResourceDurationDto {
    id: number;
    actualDuration: number;
    sedationTime: number;
    additionalLeadTime: number;
    incrementTime: number;
    decrementTime: number;

    constructor(data?: IResourceDurationDto) {
        // super(data);
    }

    init(data?: any) {
        // super.init(data);
        if (data) {
            this.id = data["Id"];
            this.actualDuration = data["ActualDuration"];
            this.sedationTime = data["SedationTime"];
            this.additionalLeadTime = data["AdditionalLeadTime"];
            this.incrementTime = data["IncrementTime"];
            this.decrementTime = data["DecrementTime"];
        }
    }

    static fromJS(data: any): ResourceDurationDto {
        let result = new ResourceDurationDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["Id"] = this.id;
        data["ActualDuration"] = this.actualDuration;
        data["SedationTime"] = this.sedationTime;
        data["AdditionalLeadTime"] = this.additionalLeadTime;
        data["IncrementTime"] = this.incrementTime;
        data["DecrementTime"] = this.decrementTime;
        // super.toJSON(data);
        return data; 
    }
}

export interface IResourceDurationDto {
    id: number;
    actualDuration: number;
    sedationTime: number;
    additionalLeadTime: number;
    incrementTime: number;
    decrementTime: number;
}
