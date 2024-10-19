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
exports.DriverController = void 0;
const common_1 = require("@nestjs/common");
const drivers_service_1 = require("./drivers.service");
const drivers_1 = require("../dto/drivers");
const jwt_guard_1 = require("../auth/guards/jwt.guard");
let DriverController = class DriverController {
    constructor(driverService) {
        this.driverService = driverService;
    }
    getDrivers() {
        return this.driverService.getDrivers();
    }
    getDriverById(id) {
        return this.driverService.getDriverById(id);
    }
    createDriver(createDriverDto) {
        return this.driverService.createDriver(createDriverDto);
    }
    updateDriver(id, updateDriverDto) {
        return this.driverService.updateDriver(id, updateDriverDto);
    }
    deleteDriver(id) {
        return this.driverService.deleteDriver(id);
    }
};
exports.DriverController = DriverController;
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DriverController.prototype, "getDrivers", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DriverController.prototype, "getDriverById", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [drivers_1.CreateDriverDto]),
    __metadata("design:returntype", void 0)
], DriverController.prototype, "createDriver", null);
__decorate([
    (0, common_1.Post)(':id'),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, drivers_1.CreateDriverDto]),
    __metadata("design:returntype", void 0)
], DriverController.prototype, "updateDriver", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DriverController.prototype, "deleteDriver", null);
exports.DriverController = DriverController = __decorate([
    (0, common_1.Controller)('drivers'),
    __metadata("design:paramtypes", [drivers_service_1.DriversService])
], DriverController);
//# sourceMappingURL=drivers.controller.js.map