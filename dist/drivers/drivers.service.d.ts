import { Model } from 'mongoose';
import { CreateDriverDto } from './drivers';
import { Driver } from './Driver.schema';
export declare class DriversService {
    private driverModel;
    constructor(driverModel: Model<Driver>);
    createDriver(createDriverDto: CreateDriverDto): Promise<import("mongoose").Document<unknown, {}, Driver> & Driver & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }>;
    getDrivers(): Promise<(import("mongoose").Document<unknown, {}, Driver> & Driver & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    })[]>;
    getDriverById(driverId: string): Promise<import("mongoose").Document<unknown, {}, Driver> & Driver & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }>;
    updateDriver(driverId: string, updateDriverDto: CreateDriverDto): Promise<import("mongoose").Document<unknown, {}, Driver> & Driver & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }>;
    deleteDriver(driverId: string): Promise<import("mongoose").Document<unknown, {}, Driver> & Driver & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }>;
}
