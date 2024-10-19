import { Model } from 'mongoose';
import { AddPaymentDto, CreateInvoiceDto } from 'src/dto/invoices';
import { Invoice } from 'src/schemas/Invoice.schema';
import { Payment } from 'src/schemas/Payment.schema';
import { Student } from 'src/schemas/Student.schema';
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
        familyId?: import("../schemas/Family.schema").Family;
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
        familyId?: import("../schemas/Family.schema").Family;
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
