import { Module } from '@nestjs/common';
import { DriversService } from './drivers.service';
import { DriverController } from './drivers.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Driver, DriverSchema } from 'src/schemas/Driver.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Driver.name,
        schema: DriverSchema,
      },
    ]),
  ],
  controllers: [DriverController],
  providers: [DriversService],
})
export class DriversModule {}
