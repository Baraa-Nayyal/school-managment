import { Controller, Post, Body, Get, Param, UseGuards } from '@nestjs/common';
import { TeacherService } from './teachers.service';
import { CreateTeacherDto } from './teachers';
import { JwtAuthGuard } from '../auth/guards/jwt.guard';

@Controller('teachers')
export class TeacherController {
  constructor(private readonly teacherService: TeacherService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  GetTeachers() {
    return this.teacherService.getTeachers();
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  AddTeacher(@Body() createTeacherDto: CreateTeacherDto) {
    return this.teacherService.addTeacher(createTeacherDto);
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  GetTeacherById(@Param('id') id: string) {
    return this.teacherService.getTeacherById(id);
  }
}
