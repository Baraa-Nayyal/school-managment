export declare class CreateInvoiceDto {
    studentId: string;
    familyId?: string;
    totalAmount?: number;
    schoolPrice: number;
    busPrice: number;
    date?: string;
}
export declare class AddPaymentDto {
    invoiceId: string;
    paidSchoolAmount: number;
    paidBusAmount: number;
    receiptNumber: number;
    date?: string;
}
