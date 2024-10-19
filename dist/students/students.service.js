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
exports.StudentsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const Family_schema_1 = require("../schemas/Family.schema");
const Invoice_schema_1 = require("../schemas/Invoice.schema");
const Student_schema_1 = require("../schemas/Student.schema");
let StudentsService = class StudentsService {
    constructor(studentModel, invoiceModel, familyModel) {
        this.studentModel = studentModel;
        this.invoiceModel = invoiceModel;
        this.familyModel = familyModel;
    }
    async addStudent(createStudentDto) {
        const student = new this.studentModel({
            ...createStudentDto,
            family: createStudentDto.familyId,
        });
        return student.save();
    }
    async getStudents() {
        return this.studentModel
            .find({}, { invoices: 0, division: 0 })
            .populate('class')
            .populate('driver')
            .populate({
            path: 'family',
            select: 'familyName',
        })
            .exec();
    }
    async getFamilies() {
        return this.familyModel.find().populate({
            path: 'students',
            select: 'name',
        });
    }
    async getFamiliesNames() {
        return this.familyModel.find({}, { familyName: 1 });
    }
    async addFamily(createFamilyDto) {
        console.log(createFamilyDto);
        const students = await this.studentModel.find({
            _id: { $in: createFamilyDto.studentIds },
        });
        for (const student of students) {
            if (student.family) {
                throw new common_1.BadRequestException(`Student "${student.name}" already belongs to another family.`);
            }
        }
        const newFamily = new this.familyModel({
            familyName: createFamilyDto.familyName,
            students: createFamilyDto.studentIds,
        });
        const savedFamily = await newFamily.save();
        await this.studentModel.updateMany({ _id: { $in: createFamilyDto.studentIds } }, { $set: { family: savedFamily._id } });
        return savedFamily;
    }
    async getStudentsNames() {
        return this.studentModel.find({}, { name: 1 });
    }
    async updateStudent(id, updateStudentDto) {
        return this.studentModel.findByIdAndUpdate(id, updateStudentDto, {
            new: true,
        });
    }
    async deleteStudent(id) {
        return this.studentModel.findByIdAndDelete(id);
    }
    async deleteFamily(id) {
        return this.familyModel.findByIdAndDelete(id);
    }
    async getStudentById(studentId) {
        console.log(studentId);
        const student = await this.studentModel
            .findById(studentId)
            .populate('class')
            .populate('division')
            .populate('invoices')
            .exec();
        if (!student) {
            throw new common_1.NotFoundException(`Student with ID ${studentId} not found`);
        }
        return student;
    }
};
exports.StudentsService = StudentsService;
exports.StudentsService = StudentsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(Student_schema_1.Student.name)),
    __param(1, (0, mongoose_1.InjectModel)(Invoice_schema_1.Invoice.name)),
    __param(2, (0, mongoose_1.InjectModel)(Family_schema_1.Family.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model])
], StudentsService);
//# sourceMappingURL=students.service.js.map