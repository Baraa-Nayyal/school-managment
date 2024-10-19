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
exports.DriversService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const Driver_schema_1 = require("./Driver.schema");
let DriversService = class DriversService {
    constructor(driverModel) {
        this.driverModel = driverModel;
    }
    async createDriver(createDriverDto) {
        const driver = new this.driverModel(createDriverDto);
        return driver.save();
    }
    async getDrivers() {
        return this.driverModel.find().exec();
    }
    async getDriverById(driverId) {
        return this.driverModel.findById(driverId).exec();
    }
    async updateDriver(driverId, updateDriverDto) {
        return this.driverModel
            .findByIdAndUpdate(driverId, updateDriverDto, { new: true })
            .exec();
    }
    async deleteDriver(driverId) {
        return this.driverModel.findByIdAndDelete(driverId).exec();
    }
};
exports.DriversService = DriversService;
exports.DriversService = DriversService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(Driver_schema_1.Driver.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], DriversService);
//# sourceMappingURL=drivers.service.js.map