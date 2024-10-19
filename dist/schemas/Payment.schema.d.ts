import mongoose from 'mongoose';
import { Invoice } from './Invoice.schema';
export declare class Payment {
    invoiceId: Invoice;
    paidSchoolAmount: number;
    paidBusAmount: number;
    receiptNumber: number;
    date: string;
}
export declare const PaymentSchema: mongoose.Schema<Payment, mongoose.Model<Payment, any, any, any, mongoose.Document<unknown, any, Payment> & Payment & {
    _id: mongoose.Types.ObjectId;
} & {
    __v?: number;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Payment, mongoose.Document<unknown, {}, mongoose.FlatRecord<Payment>> & mongoose.FlatRecord<Payment> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v?: number;
}>;
