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
exports.DivisionsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const Division_schema_1 = require("../schemas/Division.schema");
let DivisionsService = class DivisionsService {
    constructor(divisionModel) {
        this.divisionModel = divisionModel;
    }
    AddDivision(addDivisionDto) {
        const newDivision = new this.divisionModel(addDivisionDto);
        return newDivision.save();
    }
    async UpdateDivision(id, updateDivisionDto) {
        return this.divisionModel.findByIdAndUpdate(id, updateDivisionDto, {
            new: true,
        });
    }
    GetDivisions() {
        return this.divisionModel.find();
    }
    DeleteDivision(id) {
        return this.divisionModel.findByIdAndDelete(id);
    }
};
exports.DivisionsService = DivisionsService;
exports.DivisionsService = DivisionsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(Division_schema_1.Division.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], DivisionsService);
//# sourceMappingURL=divisions.service.js.map