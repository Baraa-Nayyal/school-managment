import { TeacherService } from './teachers.service';
import { CreateTeacherDto } from './teachers';
export declare class TeacherController {
    private readonly teacherService;
    constructor(teacherService: TeacherService);
    GetTeachers(): Promise<{
        classes: {
            class: import("../classes/Classe.schema").Class;
            division: import("../divisions/Division.schema").Division;
        }[];
        name: string;
        _id: import("mongoose").Types.ObjectId;
    }[]>;
    AddTeacher(createTeacherDto: CreateTeacherDto): Promise<import("mongoose").Document<unknown, {}, import("./Teacher.schema").Teacher> & import("./Teacher.schema").Teacher & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }>;
    GetTeacherById(id: string): Promise<{
        classes: {
            class: import("../classes/Classe.schema").Class;
            division: import("../divisions/Division.schema").Division;
        }[];
        name: string;
        _id: import("mongoose").Types.ObjectId;
    }>;
}
