"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvoiceService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const Invoice_schema_1 = require("./Invoice.schema");
const Payment_schema_1 = require("./Payment.schema");
const Student_schema_1 = require("./Student.schema");
let InvoiceService = class InvoiceService {
    constructor(invoiceModel, paymentModel, studentModel) {
        this.invoiceModel = invoiceModel;
        this.paymentModel = paymentModel;
        this.studentModel = studentModel;
    }
    async createInvoice(createInvoiceDto) {
        const { studentId, familyId } = createInvoiceDto;
        if (studentId && familyId) {
            throw new common_1.BadRequestException('You can only provide either student or family, not both.');
        }
        const totalAmount = createInvoiceDto.schoolPrice + createInvoiceDto.busPrice;
        const invoice = new this.invoiceModel({
            ...createInvoiceDto,
            totalAmount,
            date: new Date(),
        });
        const savedInvoice = await invoice.save();
        if (createInvoiceDto.familyId) {
            await this.studentModel.updateMany({ family: createInvoiceDto.familyId }, { $push: { invoices: savedInvoice._id } });
        }
        else {
            await this.studentModel.findByIdAndUpdate(createInvoiceDto.studentId, {
                $push: { invoices: savedInvoice._id },
            });
        }
        return savedInvoice;
    }
    async getInvoices() {
        const invoices = await this.invoiceModel
            .find()
            .populate('studentId', 'name')
            .populate('familyId', 'familyName')
            .populate('payments')
            .exec();
        return invoices.map((invoice) => {
            const name = invoice.studentId
                ? invoice.studentId.name
                : invoice.familyId?.familyName;
            const totalPaid = invoice.payments.reduce((sum, payment) => {
                return (sum + (payment.paidSchoolAmount || 0) + (payment.paidBusAmount || 0));
            }, 0);
            const remainingAmount = invoice.totalAmount - totalPaid;
            return {
                ...invoice.toObject(),
                remainingAmount,
                totalPaid,
                name,
            };
        });
    }
    async getInvoiceById(invoiceId) {
        const invoice = await this.invoiceModel
            .findById(invoiceId)
            .populate('payments')
            .populate({
            path: 'studentId',
            select: 'name',
        })
            .exec();
        const totalPaid = invoice.payments.reduce((sum, payment) => {
            return (sum + (payment.paidSchoolAmount || 0) + (payment.paidBusAmount || 0));
        }, 0);
        const remainingAmount = invoice.totalAmount - totalPaid;
        return {
            ...invoice.toObject(),
            remainingAmount,
            totalPaid,
        };
    }
    async deleteInvoice(id) {
        return this.invoiceModel.findByIdAndDelete(id);
    }
    async addPayment(addPaymentDto) {
        const payment = new this.paymentModel({
            ...addPaymentDto,
            date: new Date(),
        });
        const savedPayment = await payment.save();
        await this.invoiceModel.findByIdAndUpdate(addPaymentDto.invoiceId, { $push: { payments: savedPayment._id } }, { new: true });
        return savedPayment;
    }
    async getRemainingBalance(invoiceId) {
        const invoice = await this.invoiceModel.findById(invoiceId).exec();
        const payments = await this.paymentModel.find({ invoiceId }).exec();
        const totalPaidSchool = payments.reduce((sum, payment) => sum + payment.paidSchoolAmount, 0);
        const totalPaidBus = payments.reduce((sum, payment) => sum + payment.paidBusAmount, 0);
        const remainingSchoolAmount = invoice.schoolPrice - totalPaidSchool;
        const remainingBusAmount = invoice.busPrice - totalPaidBus;
        return { remainingSchoolAmount, remainingBusAmount };
    }
};
exports.InvoiceService = InvoiceService;
exports.InvoiceService = InvoiceService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(Invoice_schema_1.Invoice.name)),
    __param(1, (0, mongoose_1.InjectModel)(Payment_schema_1.Payment.name)),
    __param(2, (0, mongoose_1.InjectModel)(Student_schema_1.Student.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model])
], InvoiceService);
//# sourceMappingURL=invoices.service.js.map