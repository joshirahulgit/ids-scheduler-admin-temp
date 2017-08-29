export class TaskDto implements ITaskDto {
    iD: number;
    name?: string;
    // status: EhrTaskStatus;
    description?: string;
    startDate?: Date;
    endDate?: Date;
    complete: number;
    isDeleted: boolean;
    createdDate?: Date;

    constructor(data?: ITaskDto) {
        // super(data);
    }

    init(data?: any) {
        // super.init(data);
        if (data) {
            this.iD = data["ID"];
            this.name = data["Name"];
            // this.status = data["Status"];
            this.description = data["Description"];
            this.startDate = data["StartDate"] ? new Date(data["StartDate"].toString()) : <any>undefined;
            this.endDate = data["EndDate"] ? new Date(data["EndDate"].toString()) : <any>undefined;
            this.complete = data["Complete"];
            this.isDeleted = data["IsDeleted"];
            this.createdDate = data["CreatedDate"] ? new Date(data["CreatedDate"].toString()) : <any>undefined;
        }
    }

    static fromJS(data: any): TaskDto {
        let result = new TaskDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["ID"] = this.iD;
        data["Name"] = this.name;
        // data["Status"] = this.status;
        data["Description"] = this.description;
        data["StartDate"] = this.startDate ? this.startDate.toISOString() : <any>undefined;
        data["EndDate"] = this.endDate ? this.endDate.toISOString() : <any>undefined;
        data["Complete"] = this.complete;
        data["IsDeleted"] = this.isDeleted;
        data["CreatedDate"] = this.createdDate ? this.createdDate.toISOString() : <any>undefined;
        // super.toJSON(data);
        return data; 
    }
}

export interface ITaskDto  {
    iD: number;
    name?: string;
    // status: EhrTaskStatus;
    description?: string;
    startDate?: Date;
    endDate?: Date;
    complete: number;
    isDeleted: boolean;
    createdDate?: Date;
}
