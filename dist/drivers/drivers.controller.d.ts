import { DriversService } from './drivers.service';
import { CreateDriverDto } from 'src/dto/drivers';
export declare class DriverController {
    private readonly driverService;
    constructor(driverService: DriversService);
    getDrivers(): Promise<(import("mongoose").Document<unknown, {}, import("./Driver.schema").Driver> & import("./Driver.schema").Driver & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    })[]>;
    getDriverById(id: string): Promise<import("mongoose").Document<unknown, {}, import("./Driver.schema").Driver> & import("./Driver.schema").Driver & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }>;
    createDriver(createDriverDto: CreateDriverDto): Promise<import("mongoose").Document<unknown, {}, import("./Driver.schema").Driver> & import("./Driver.schema").Driver & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }>;
    updateDriver(id: string, updateDriverDto: CreateDriverDto): Promise<import("mongoose").Document<unknown, {}, import("./Driver.schema").Driver> & import("./Driver.schema").Driver & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }>;
    deleteDriver(id: string): Promise<import("mongoose").Document<unknown, {}, import("./Driver.schema").Driver> & import("./Driver.schema").Driver & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }>;
}
