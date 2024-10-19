import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpException,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { DivisionsService } from './divisions.service';
import { AddDivisionDto } from './devisions';
import mongoose from 'mongoose';
import { JwtAuthGuard } from '../auth/guards/jwt.guard';

@Controller('divisions')
export class DivisionsController {
  constructor(private divisionsService: DivisionsService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @HttpCode(200)
  AddDivision(@Body() addDivisionDto: AddDivisionDto) {
    return this.divisionsService.AddDivision(addDivisionDto);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  GetDivisions() {
    return this.divisionsService.GetDivisions();
  }

  @Post(':id')
  @UseGuards(JwtAuthGuard)
  UpdateDivision(
    @Param('id') id: string,
    @Body() updateDivisionDto: AddDivisionDto,
  ) {
    return this.divisionsService.UpdateDivision(id, updateDivisionDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  async DeleteDivision(@Param('id') id: string) {
    const isValid = mongoose.Types.ObjectId.isValid(id);
    if (!isValid) throw new HttpException('Invalid Id', 404);

    const deletedDivision = await this.divisionsService.DeleteDivision(id);
    if (!deletedDivision) throw new HttpException('User Not Found', 404);
  }
}
