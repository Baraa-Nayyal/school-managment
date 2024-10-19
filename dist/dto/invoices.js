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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddPaymentDto = exports.CreateInvoiceDto = void 0;
const class_validator_1 = require("class-validator");
class CreateInvoiceDto {
}
exports.CreateInvoiceDto = CreateInvoiceDto;
__decorate([
    (0, class_validator_1.IsMongoId)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.ValidateIf)((o) => !o.familyId),
    __metadata("design:type", String)
], CreateInvoiceDto.prototype, "studentId", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)((o) => !o.studentId),
    (0, class_validator_1.IsMongoId)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateInvoiceDto.prototype, "familyId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsPositive)(),
    __metadata("design:type", Number)
], CreateInvoiceDto.prototype, "totalAmount", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsPositive)(),
    __metadata("design:type", Number)
], CreateInvoiceDto.prototype, "schoolPrice", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsPositive)(),
    __metadata("design:type", Number)
], CreateInvoiceDto.prototype, "busPrice", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateInvoiceDto.prototype, "date", void 0);
class AddPaymentDto {
}
exports.AddPaymentDto = AddPaymentDto;
__decorate([
    (0, class_validator_1.IsMongoId)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], AddPaymentDto.prototype, "invoiceId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], AddPaymentDto.prototype, "paidSchoolAmount", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], AddPaymentDto.prototype, "paidBusAmount", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsPositive)(),
    __metadata("design:type", Number)
], AddPaymentDto.prototype, "receiptNumber", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], AddPaymentDto.prototype, "date", void 0);
//# sourceMappingURL=invoices.js.map