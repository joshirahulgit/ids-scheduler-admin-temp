import { EntityTypeDto, IEntityTypeDto } from "app/dtos/EntityType.dto";

export class CommentTypeDto extends EntityTypeDto implements ICommentTypeDto {
    isDeleted: boolean;
    cannedCommentEnumType?: string;

    constructor(data?: ICommentTypeDto) {
        super(data);
    }

    init(data?: any) {
        super.init(data);
        if (data) {
            this.isDeleted = data["IsDeleted"];
            this.cannedCommentEnumType = data["CannedCommentEnumType"];
        }
    }

    static fromJS(data: any): CommentTypeDto {
        let result = new CommentTypeDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["IsDeleted"] = this.isDeleted;
        data["CannedCommentEnumType"] = this.cannedCommentEnumType;
        super.toJSON(data);
        return data; 
    }
}

export interface ICommentTypeDto extends IEntityTypeDto {
    isDeleted: boolean;
    cannedCommentEnumType?: string;
}
