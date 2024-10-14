import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { TeacherService } from './teachers.service';
import { CreateTeacherDto } from 'src/dto/teachers';

@Controller('teachers')
export class TeacherController {
  constructor(private readonly teacherService: TeacherService) {}

  @Get()
  GetTeachers() {
    return this.teacherService.getTeachers();
  }

  @Post()
  AddTeacher(@Body() createTeacherDto: CreateTeacherDto) {
    return this.teacherService.addTeacher(createTeacherDto);
  }

  @Get(':id')
  GetTeacherById(@Param('id') id: string) {
    return this.teacherService.getTeacherById(id);
  }
}
