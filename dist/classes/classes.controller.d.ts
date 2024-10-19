import { ClassesService } from './classes.service';
import { AddClassDto } from 'src/dto/classes';
export declare class ClassesController {
    private classesService;
    constructor(classesService: ClassesService);
    GetClasses(): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("../schemas/Classe.schema").Class> & import("../schemas/Classe.schema").Class & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    })[], import("mongoose").Document<unknown, {}, import("../schemas/Classe.schema").Class> & import("../schemas/Classe.schema").Class & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }, {}, import("../schemas/Classe.schema").Class, "find", {}>;
    UpdateClass(id: string, updateClassDto: AddClassDto): import("mongoose").Query<import("mongoose").Document<unknown, {}, import("../schemas/Classe.schema").Class> & import("../schemas/Classe.schema").Class & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }, import("mongoose").Document<unknown, {}, import("../schemas/Classe.schema").Class> & import("../schemas/Classe.schema").Class & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }, {}, import("../schemas/Classe.schema").Class, "findOneAndUpdate", {}>;
    AddClass(addClassDto: AddClassDto): Promise<import("mongoose").Document<unknown, {}, import("../schemas/Classe.schema").Class> & import("../schemas/Classe.schema").Class & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }>;
    DeleteClass(id: string): import("mongoose").Query<import("mongoose").Document<unknown, {}, import("../schemas/Classe.schema").Class> & import("../schemas/Classe.schema").Class & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }, import("mongoose").Document<unknown, {}, import("../schemas/Classe.schema").Class> & import("../schemas/Classe.schema").Class & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }, {}, import("../schemas/Classe.schema").Class, "findOneAndDelete", {}>;
}
