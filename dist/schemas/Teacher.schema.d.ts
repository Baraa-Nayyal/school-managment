import mongoose from 'mongoose';
import { Division } from '../divisions/Division.schema';
import { Class } from './Classe.schema';
declare class ClassDivision {
    classId: Class;
    divisionId: Division;
}
export declare class Teacher {
    name: string;
    classes: ClassDivision[];
}
export declare const TeacherSchema: mongoose.Schema<Teacher, mongoose.Model<Teacher, any, any, any, mongoose.Document<unknown, any, Teacher> & Teacher & {
    _id: mongoose.Types.ObjectId;
} & {
    __v?: number;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Teacher, mongoose.Document<unknown, {}, mongoose.FlatRecord<Teacher>> & mongoose.FlatRecord<Teacher> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v?: number;
}>;
export {};
