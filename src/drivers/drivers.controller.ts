import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { DriversService } from './drivers.service';
import { CreateDriverDto } from 'src/dto/drivers';

@Controller('drivers')
export class DriverController {
  constructor(private readonly driverService: DriversService) {}

  @Get()
  getDrivers() {
    return this.driverService.getDrivers();
  }

  @Get(':id')
  getDriverById(@Param('id') id: string) {
    return this.driverService.getDriverById(id);
  }

  @Post()
  createDriver(@Body() createDriverDto: CreateDriverDto) {
    return this.driverService.createDriver(createDriverDto);
  }

  @Post(':id')
  updateDriver(
    @Param('id') id: string,
    @Body() updateDriverDto: CreateDriverDto,
  ) {
    return this.driverService.updateDriver(id, updateDriverDto);
  }

  @Delete(':id')
  deleteDriver(@Param('id') id: string) {
    return this.driverService.deleteDriver(id);
  }
}
