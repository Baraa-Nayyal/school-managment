"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvoicesModule = void 0;
const common_1 = require("@nestjs/common");
const invoices_service_1 = require("./invoices.service");
const invoices_controller_1 = require("./invoices.controller");
const mongoose_1 = require("@nestjs/mongoose");
const Invoice_schema_1 = require("./Invoice.schema");
const Payment_schema_1 = require("./Payment.schema");
const Student_schema_1 = require("../students/Student.schema");
let InvoicesModule = class InvoicesModule {
};
exports.InvoicesModule = InvoicesModule;
exports.InvoicesModule = InvoicesModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                {
                    name: Invoice_schema_1.Invoice.name,
                    schema: Invoice_schema_1.InvoiceSchema,
                },
                {
                    name: Payment_schema_1.Payment.name,
                    schema: Payment_schema_1.PaymentSchema,
                },
                {
                    name: Student_schema_1.Student.name,
                    schema: Student_schema_1.StudentSchema,
                },
            ]),
        ],
        controllers: [invoices_controller_1.InvoiceController],
        providers: [invoices_service_1.InvoiceService],
    })
], InvoicesModule);
//# sourceMappingURL=invoices.module.js.map