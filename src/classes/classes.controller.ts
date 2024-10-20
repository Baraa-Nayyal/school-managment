import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
} from '@nestjs/common';
import { ClassesService } from './classes.service';
import { AddClassDto } from './classes';

@Controller('classes')
export class ClassesController {
  constructor(private classesService: ClassesService) {}

  @Get()
  GetClasses() {
    return this.classesService.GetClasses();
  }

  @Post(':id')
  UpdateClass(@Param('id') id: string, @Body() updateClassDto: AddClassDto) {
    return this.classesService.UpdateClass(id, updateClassDto);
  }

  @Post()
  @HttpCode(200)
  AddClass(@Body() addClassDto: AddClassDto) {
    return this.classesService.AddClass(addClassDto);
  }

  @Delete(':id')
  DeleteClass(@Param('id') id: string) {
    return this.classesService.DeleteClass(id);
  }
}
