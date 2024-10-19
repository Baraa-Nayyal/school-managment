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
exports.DivisionsController = void 0;
const common_1 = require("@nestjs/common");
const divisions_service_1 = require("./divisions.service");
const devisions_1 = require("./devisions");
const mongoose_1 = require("mongoose");
const jwt_guard_1 = require("../auth/guards/jwt.guard");
let DivisionsController = class DivisionsController {
    constructor(divisionsService) {
        this.divisionsService = divisionsService;
    }
    AddDivision(addDivisionDto) {
        return this.divisionsService.AddDivision(addDivisionDto);
    }
    GetDivisions() {
        return this.divisionsService.GetDivisions();
    }
    UpdateDivision(id, updateDivisionDto) {
        return this.divisionsService.UpdateDivision(id, updateDivisionDto);
    }
    async DeleteDivision(id) {
        const isValid = mongoose_1.default.Types.ObjectId.isValid(id);
        if (!isValid)
            throw new common_1.HttpException('Invalid Id', 404);
        const deletedDivision = await this.divisionsService.DeleteDivision(id);
        if (!deletedDivision)
            throw new common_1.HttpException('User Not Found', 404);
    }
};
exports.DivisionsController = DivisionsController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [devisions_1.AddDivisionDto]),
    __metadata("design:returntype", void 0)
], DivisionsController.prototype, "AddDivision", null);
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DivisionsController.prototype, "GetDivisions", null);
__decorate([
    (0, common_1.Post)(':id'),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, devisions_1.AddDivisionDto]),
    __metadata("design:returntype", void 0)
], DivisionsController.prototype, "UpdateDivision", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DivisionsController.prototype, "DeleteDivision", null);
exports.DivisionsController = DivisionsController = __decorate([
    (0, common_1.Controller)('divisions'),
    __metadata("design:paramtypes", [divisions_service_1.DivisionsService])
], DivisionsController);
//# sourceMappingURL=divisions.controller.js.map