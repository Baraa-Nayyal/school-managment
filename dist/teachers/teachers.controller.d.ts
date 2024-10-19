import { TeacherService } from './teachers.service';
import { CreateTeacherDto } from 'src/dto/teachers';
export declare class TeacherController {
    private readonly teacherService;
    constructor(teacherService: TeacherService);
    GetTeachers(): Promise<{
        classes: {
            class: import("../schemas/Classe.schema").Class;
            division: import("../schemas/Division.schema").Division;
        }[];
        name: string;
        _id: import("mongoose").Types.ObjectId;
    }[]>;
    AddTeacher(createTeacherDto: CreateTeacherDto): Promise<import("mongoose").Document<unknown, {}, import("../schemas/Teacher.schema").Teacher> & import("../schemas/Teacher.schema").Teacher & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }>;
    GetTeacherById(id: string): Promise<{
        classes: {
            class: import("../schemas/Classe.schema").Class;
            division: import("../schemas/Division.schema").Division;
        }[];
        name: string;
        _id: import("mongoose").Types.ObjectId;
    }>;
}
