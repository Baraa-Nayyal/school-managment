import { InvoiceService } from './invoices.service';
import { AddPaymentDto, CreateInvoiceDto } from 'src/dto/invoices';
export declare class InvoiceController {
    private readonly invoiceService;
    constructor(invoiceService: InvoiceService);
    createInvoice(createInvoiceDto: CreateInvoiceDto): Promise<import("mongoose").Document<unknown, {}, import("../schemas/Invoice.schema").Invoice> & import("../schemas/Invoice.schema").Invoice & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }>;
    GetInvoices(): Promise<{
        remainingAmount: number;
        totalPaid: number;
        name: string;
        studentId: import("../schemas/Student.schema").Student;
        familyId?: import("../schemas/Family.schema").Family;
        totalAmount: number;
        schoolPrice: number;
        busPrice: number;
        date: string;
        payments: import("../schemas/Payment.schema").Payment[];
        _id: import("mongoose").Types.ObjectId;
    }[]>;
    DeleteInvoiceById(id: string): Promise<import("mongoose").Document<unknown, {}, import("../schemas/Invoice.schema").Invoice> & import("../schemas/Invoice.schema").Invoice & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }>;
    GetInvoiceById(id: string): Promise<{
        remainingAmount: number;
        totalPaid: number;
        studentId: import("../schemas/Student.schema").Student;
        familyId?: import("../schemas/Family.schema").Family;
        totalAmount: number;
        schoolPrice: number;
        busPrice: number;
        date: string;
        payments: import("../schemas/Payment.schema").Payment[];
        _id: import("mongoose").Types.ObjectId;
    }>;
    addPayment(addPaymentDto: AddPaymentDto): Promise<import("mongoose").Document<unknown, {}, import("../schemas/Payment.schema").Payment> & import("../schemas/Payment.schema").Payment & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }>;
    getRemainingBalance(invoiceId: string): Promise<{
        remainingSchoolAmount: number;
        remainingBusAmount: number;
    }>;
}
