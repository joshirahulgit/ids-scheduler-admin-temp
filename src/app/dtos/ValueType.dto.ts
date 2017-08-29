export class ValueType implements IValueType {

    constructor(data?: IValueType) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
        }
    }

    static fromJS(data: any): ValueType {
        let result = new ValueType();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        return data;
    }
}

export interface IValueType {
}

export class DayTime extends ValueType implements IDayTime {
    hours: number;
    minutes: number;

    constructor(data?: IDayTime) {
        super(data);
    }

    init(data?: any) {
        super.init(data);
        if (data) {
            this.hours = data["Hours"];
            this.minutes = data["Minutes"];
        }
    }

    static fromJS(data: any): DayTime {
        let result = new DayTime();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["Hours"] = this.hours;
        data["Minutes"] = this.minutes;
        super.toJSON(data);
        return data;
    }
}

export interface IDayTime extends IValueType {
    hours: number;
    minutes: number;
}
