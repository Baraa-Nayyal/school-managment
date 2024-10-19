"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentsModule = void 0;
const common_1 = require("@nestjs/common");
const students_service_1 = require("./students.service");
const students_controller_1 = require("./students.controller");
const mongoose_1 = require("@nestjs/mongoose");
const Student_schema_1 = require("../schemas/Student.schema");
const Invoice_schema_1 = require("../schemas/Invoice.schema");
const Family_schema_1 = require("../schemas/Family.schema");
let StudentsModule = class StudentsModule {
};
exports.StudentsModule = StudentsModule;
exports.StudentsModule = StudentsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                {
                    name: Student_schema_1.Student.name,
                    schema: Student_schema_1.StudentSchema,
                },
                {
                    name: Invoice_schema_1.Invoice.name,
                    schema: Invoice_schema_1.InvoiceSchema,
                },
                {
                    name: Family_schema_1.Family.name,
                    schema: Family_schema_1.FamilySchema,
                },
            ]),
        ],
        controllers: [students_controller_1.StudentsController],
        providers: [students_service_1.StudentsService],
    })
], StudentsModule);
//# sourceMappingURL=students.module.js.map