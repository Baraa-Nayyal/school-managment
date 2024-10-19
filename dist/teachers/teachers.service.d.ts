import { Model } from 'mongoose';
import { CreateTeacherDto } from 'src/dto/teachers';
import { Teacher } from './Teacher.schema';
export declare class TeacherService {
    private teacherModel;
    constructor(teacherModel: Model<Teacher>);
    getTeachers(): Promise<{
        classes: {
            class: Class;
            division: import("../divisions/Division.schema").Division;
        }[];
        name: string;
        _id: import("mongoose").Types.ObjectId;
    }[]>;
    addTeacher(createTeacherDto: CreateTeacherDto): Promise<import("mongoose").Document<unknown, {}, Teacher> & Teacher & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }>;
    getTeacherById(teacherId: string): Promise<{
        classes: {
            class: Class;
            division: import("../divisions/Division.schema").Division;
        }[];
        name: string;
        _id: import("mongoose").Types.ObjectId;
    }>;
}
