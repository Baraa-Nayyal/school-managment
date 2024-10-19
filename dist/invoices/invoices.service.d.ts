import { Model } from 'mongoose';
import { AddPaymentDto, CreateInvoiceDto } from './invoices';
import { Invoice } from './Invoice.schema';
import { Payment } from './Payment.schema';
import { Student } from '../students/Student.schema';
export declare class InvoiceService {
    private invoiceModel;
    private paymentModel;
    private studentModel;
    constructor(invoiceModel: Model<Invoice>, paymentModel: Model<Payment>, studentModel: Model<Student>);
    createInvoice(createInvoiceDto: CreateInvoiceDto): Promise<import("mongoose").Document<unknown, {}, Invoice> & Invoice & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }>;
    getInvoices(): Promise<{
        remainingAmount: number;
        totalPaid: number;
        name: string;
        studentId: Student;
        familyId?: import("../students/Family.schema").Family;
        totalAmount: number;
        schoolPrice: number;
        busPrice: number;
        date: string;
        payments: Payment[];
        _id: import("mongoose").Types.ObjectId;
    }[]>;
    getInvoiceById(invoiceId: string): Promise<{
        remainingAmount: number;
        totalPaid: number;
        studentId: Student;
        familyId?: import("../students/Family.schema").Family;
        totalAmount: number;
        schoolPrice: number;
        busPrice: number;
        date: string;
        payments: Payment[];
        _id: import("mongoose").Types.ObjectId;
    }>;
    deleteInvoice(id: string): Promise<import("mongoose").Document<unknown, {}, Invoice> & Invoice & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }>;
    addPayment(addPaymentDto: AddPaymentDto): Promise<import("mongoose").Document<unknown, {}, Payment> & Payment & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }>;
    getRemainingBalance(invoiceId: string): Promise<{
        remainingSchoolAmount: number;
        remainingBusAmount: number;
    }>;
}
