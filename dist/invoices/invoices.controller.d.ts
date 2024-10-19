import { InvoiceService } from './invoices.service';
import { AddPaymentDto, CreateInvoiceDto } from 'src/dto/invoices';
export declare class InvoiceController {
    private readonly invoiceService;
    constructor(invoiceService: InvoiceService);
    createInvoice(createInvoiceDto: CreateInvoiceDto): Promise<import("mongoose").Document<unknown, {}, import("./Invoice.schema").Invoice> & import("./Invoice.schema").Invoice & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }>;
    GetInvoices(): Promise<{
        remainingAmount: number;
        totalPaid: Payment;
        name: any;
        studentId: import("../students/Student.schema").Student;
        familyId?: Family;
        totalAmount: number;
        schoolPrice: number;
        busPrice: number;
        date: string;
        payments: Payment[];
        _id: import("mongoose").Types.ObjectId;
    }[]>;
    DeleteInvoiceById(id: string): Promise<import("mongoose").Document<unknown, {}, import("./Invoice.schema").Invoice> & import("./Invoice.schema").Invoice & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }>;
    GetInvoiceById(id: string): Promise<{
        remainingAmount: number;
        totalPaid: Payment;
        studentId: import("../students/Student.schema").Student;
        familyId?: Family;
        totalAmount: number;
        schoolPrice: number;
        busPrice: number;
        date: string;
        payments: Payment[];
        _id: import("mongoose").Types.ObjectId;
    }>;
    addPayment(addPaymentDto: AddPaymentDto): Promise<import("mongoose").Document<unknown, {}, import("./Payment.schema").Payment> & import("./Payment.schema").Payment & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }>;
    getRemainingBalance(invoiceId: string): Promise<{
        remainingSchoolAmount: number;
        remainingBusAmount: number;
    }>;
}
