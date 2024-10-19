import mongoose from 'mongoose';
import { Student } from '../students/Student.schema';
import { Payment } from './Payment.schema';
import { Family } from '../students/Family.schema';
export declare class Invoice {
    studentId: Student;
    familyId?: Family;
    totalAmount: number;
    schoolPrice: number;
    busPrice: number;
    date: string;
    payments: Payment[];
}
export declare const InvoiceSchema: mongoose.Schema<Invoice, mongoose.Model<Invoice, any, any, any, mongoose.Document<unknown, any, Invoice> & Invoice & {
    _id: mongoose.Types.ObjectId;
} & {
    __v?: number;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Invoice, mongoose.Document<unknown, {}, mongoose.FlatRecord<Invoice>> & mongoose.FlatRecord<Invoice> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v?: number;
}>;
