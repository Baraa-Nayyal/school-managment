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
exports.TeacherService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const Teacher_schema_1 = require("../schemas/Teacher.schema");
let TeacherService = class TeacherService {
    constructor(teacherModel) {
        this.teacherModel = teacherModel;
    }
    async getTeachers() {
        const teachers = await this.teacherModel
            .find()
            .populate({
            path: 'classes',
            populate: [
                { path: 'classId', model: 'Class' },
                { path: 'divisionId', model: 'Division' },
            ],
        })
            .exec();
        const transformedTeachers = teachers.map((teacher) => ({
            ...teacher.toObject(),
            classes: teacher.classes.map((item) => ({
                class: item.classId,
                division: item.divisionId,
            })),
        }));
        return transformedTeachers;
    }
    async addTeacher(createTeacherDto) {
        const teacher = new this.teacherModel(createTeacherDto);
        return teacher.save();
    }
    async getTeacherById(teacherId) {
        const teacher = await this.teacherModel
            .findById(teacherId)
            .populate({
            path: 'classes',
            populate: [
                { path: 'classId', model: 'Class' },
                { path: 'divisionId', model: 'Division' },
            ],
        })
            .exec();
        const transformedTeacher = {
            ...teacher.toObject(),
            classes: teacher.classes.map((item) => ({
                class: item.classId,
                division: item.divisionId,
            })),
        };
        return transformedTeacher;
    }
};
exports.TeacherService = TeacherService;
exports.TeacherService = TeacherService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(Teacher_schema_1.Teacher.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], TeacherService);
//# sourceMappingURL=teachers.service.js.map