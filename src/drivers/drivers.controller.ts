import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { DriversService } from './drivers.service';
import { CreateDriverDto } from './drivers';
import { JwtAuthGuard } from '../auth/guards/jwt.guard';

@Controller('drivers')
export class DriverController {
  constructor(private readonly driverService: DriversService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  getDrivers() {
    return this.driverService.getDrivers();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  getDriverById(@Param('id') id: string) {
    return this.driverService.getDriverById(id);
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  createDriver(@Body() createDriverDto: CreateDriverDto) {
    return this.driverService.createDriver(createDriverDto);
  }

  @Post(':id')
  @UseGuards(JwtAuthGuard)
  updateDriver(
    @Param('id') id: string,
    @Body() updateDriverDto: CreateDriverDto,
  ) {
    return this.driverService.updateDriver(id, updateDriverDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  deleteDriver(@Param('id') id: string) {
    return this.driverService.deleteDriver(id);
  }
}
