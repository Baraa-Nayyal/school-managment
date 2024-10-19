import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateDriverDto } from 'src/dto/drivers';
import { Driver } from './Driver.schema';

@Injectable()
export class DriversService {
  constructor(@InjectModel(Driver.name) private driverModel: Model<Driver>) {}

  async createDriver(createDriverDto: CreateDriverDto) {
    const driver = new this.driverModel(createDriverDto);
    return driver.save();
  }

  async getDrivers() {
    return this.driverModel.find().exec();
  }

  async getDriverById(driverId: string) {
    return this.driverModel.findById(driverId).exec();
  }

  async updateDriver(driverId: string, updateDriverDto: CreateDriverDto) {
    return this.driverModel
      .findByIdAndUpdate(driverId, updateDriverDto, { new: true })
      .exec();
  }

  async deleteDriver(driverId: string) {
    return this.driverModel.findByIdAndDelete(driverId).exec();
  }
}
