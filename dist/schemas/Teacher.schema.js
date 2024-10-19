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
exports.TeacherSchema = exports.Teacher = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const Division_schema_1 = require("./Division.schema");
const Classe_schema_1 = require("./Classe.schema");
let ClassDivision = class ClassDivision {
};
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Schema.Types.ObjectId, ref: 'Class', required: true }),
    __metadata("design:type", Classe_schema_1.Class)
], ClassDivision.prototype, "classId", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose_2.default.Schema.Types.ObjectId,
        ref: 'Division',
        required: true,
    }),
    __metadata("design:type", Division_schema_1.Division)
], ClassDivision.prototype, "divisionId", void 0);
ClassDivision = __decorate([
    (0, mongoose_1.Schema)()
], ClassDivision);
let Teacher = class Teacher {
};
exports.Teacher = Teacher;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Teacher.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: [
            {
                classId: mongoose_2.default.Schema.Types.ObjectId,
                divisionId: mongoose_2.default.Schema.Types.ObjectId,
            },
        ],
    }),
    __metadata("design:type", Array)
], Teacher.prototype, "classes", void 0);
exports.Teacher = Teacher = __decorate([
    (0, mongoose_1.Schema)()
], Teacher);
exports.TeacherSchema = mongoose_1.SchemaFactory.createForClass(Teacher);
//# sourceMappingURL=Teacher.schema.js.map