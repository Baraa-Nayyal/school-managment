import { Model } from 'mongoose';
import { AddClassDto } from 'src/dto/classes';
import { Class } from './Classe.schema';
export declare class ClassesService {
    private classesModel;
    constructor(classesModel: Model<Class>);
    GetClasses(): import("mongoose").Query<(import("mongoose").Document<unknown, {}, Class> & Class & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    })[], import("mongoose").Document<unknown, {}, Class> & Class & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }, {}, Class, "find", {}>;
    AddClass(addClassDto: AddClassDto): Promise<import("mongoose").Document<unknown, {}, Class> & Class & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }>;
    UpdateClass(id: string, updateClassDto: AddClassDto): import("mongoose").Query<import("mongoose").Document<unknown, {}, Class> & Class & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }, import("mongoose").Document<unknown, {}, Class> & Class & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }, {}, Class, "findOneAndUpdate", {}>;
    DeleteClass(id: string): import("mongoose").Query<import("mongoose").Document<unknown, {}, Class> & Class & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }, import("mongoose").Document<unknown, {}, Class> & Class & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }, {}, Class, "findOneAndDelete", {}>;
}
