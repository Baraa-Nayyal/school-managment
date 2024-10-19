import mongoose from 'mongoose';
import { Class } from './Classe.schema';
import { Division } from '../divisions/Division.schema';
import { Invoice } from './Invoice.schema';
import { Driver } from '../drivers/Driver.schema';
import { Family } from './Family.schema';
export declare class Student {
    name: string;
    dadName: string;
    momName: string;
    area: string;
    birthDate: string;
    dadNumber: string;
    momNumber: string;
    class: Class;
    division: Division;
    driver: Driver;
    invoices: Invoice[];
    family: Family | null;
}
export declare const StudentSchema: mongoose.Schema<Student, mongoose.Model<Student, any, any, any, mongoose.Document<unknown, any, Student> & Student & {
    _id: mongoose.Types.ObjectId;
} & {
    __v?: number;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Student, mongoose.Document<unknown, {}, mongoose.FlatRecord<Student>> & mongoose.FlatRecord<Student> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v?: number;
}>;
