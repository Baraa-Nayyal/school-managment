import { Model } from 'mongoose';
import { Division } from './Division.schema';
import { AddDivisionDto } from './devisions';
export declare class DivisionsService {
    private divisionModel;
    constructor(divisionModel: Model<Division>);
    AddDivision(addDivisionDto: AddDivisionDto): Promise<import("mongoose").Document<unknown, {}, Division> & Division & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }>;
    UpdateDivision(id: string, updateDivisionDto: AddDivisionDto): Promise<import("mongoose").Document<unknown, {}, Division> & Division & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }>;
    GetDivisions(): import("mongoose").Query<(import("mongoose").Document<unknown, {}, Division> & Division & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    })[], import("mongoose").Document<unknown, {}, Division> & Division & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }, {}, Division, "find", {}>;
    DeleteDivision(id: string): import("mongoose").Query<import("mongoose").Document<unknown, {}, Division> & Division & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }, import("mongoose").Document<unknown, {}, Division> & Division & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }, {}, Division, "findOneAndDelete", {}>;
}
