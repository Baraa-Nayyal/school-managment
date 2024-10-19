import { DivisionsService } from './divisions.service';
import { AddDivisionDto } from './devisions';
import mongoose from 'mongoose';
export declare class DivisionsController {
    private divisionsService;
    constructor(divisionsService: DivisionsService);
    AddDivision(addDivisionDto: AddDivisionDto): Promise<mongoose.Document<unknown, {}, import("./Division.schema").Division> & import("./Division.schema").Division & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v?: number;
    }>;
    GetDivisions(): mongoose.Query<(mongoose.Document<unknown, {}, import("./Division.schema").Division> & import("./Division.schema").Division & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v?: number;
    })[], mongoose.Document<unknown, {}, import("./Division.schema").Division> & import("./Division.schema").Division & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v?: number;
    }, {}, import("./Division.schema").Division, "find", {}>;
    UpdateDivision(id: string, updateDivisionDto: AddDivisionDto): Promise<mongoose.Document<unknown, {}, import("./Division.schema").Division> & import("./Division.schema").Division & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v?: number;
    }>;
    DeleteDivision(id: string): Promise<void>;
}
