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
exports.InvoiceController = void 0;
const common_1 = require("@nestjs/common");
const invoices_service_1 = require("./invoices.service");
const invoices_1 = require("../dto/invoices");
const jwt_guard_1 = require("../auth/guards/jwt.guard");
let InvoiceController = class InvoiceController {
    constructor(invoiceService) {
        this.invoiceService = invoiceService;
    }
    createInvoice(createInvoiceDto) {
        return this.invoiceService.createInvoice(createInvoiceDto);
    }
    GetInvoices() {
        return this.invoiceService.getInvoices();
    }
    DeleteInvoiceById(id) {
        return this.invoiceService.deleteInvoice(id);
    }
    GetInvoiceById(id) {
        return this.invoiceService.getInvoiceById(id);
    }
    addPayment(addPaymentDto) {
        return this.invoiceService.addPayment(addPaymentDto);
    }
    getRemainingBalance(invoiceId) {
        return this.invoiceService.getRemainingBalance(invoiceId);
    }
};
exports.InvoiceController = InvoiceController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [invoices_1.CreateInvoiceDto]),
    __metadata("design:returntype", void 0)
], InvoiceController.prototype, "createInvoice", null);
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], InvoiceController.prototype, "GetInvoices", null);
__decorate([
    (0, common_1.Delete)('delete/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], InvoiceController.prototype, "DeleteInvoiceById", null);
__decorate([
    (0, common_1.Get)('/details/:id'),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], InvoiceController.prototype, "GetInvoiceById", null);
__decorate([
    (0, common_1.Post)('add-payment'),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [invoices_1.AddPaymentDto]),
    __metadata("design:returntype", void 0)
], InvoiceController.prototype, "addPayment", null);
__decorate([
    (0, common_1.Get)(':invoiceId/balance'),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Param)('invoiceId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], InvoiceController.prototype, "getRemainingBalance", null);
exports.InvoiceController = InvoiceController = __decorate([
    (0, common_1.Controller)('invoices'),
    __metadata("design:paramtypes", [invoices_service_1.InvoiceService])
], InvoiceController);
//# sourceMappingURL=invoices.controller.js.map