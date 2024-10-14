import { Body, Controller, Delete, Get, Header, Param, Post } from '@nestjs/common';
import { StudentsService } from './students.service';
import { AddStudentDto, CreateFamilyDto } from 'src/dto/students';

@Controller('students')
export class StudentsController {
  constructor(private studentsService: StudentsService) {}

  @Post('/family')
  addFamily(@Body() createFamilyDto: CreateFamilyDto) {
    return this.studentsService.addFamily(createFamilyDto);
  }

  @Post()
  async AddStudent(@Body() createStudentDto: AddStudentDto) {
    return this.studentsService.addStudent(createStudentDto);
  }

  @Get()
  async GetStudents() {
    return this.studentsService.getStudents();
  }

  @Get('/names')
  async GetStudentsNames() {
    return this.studentsService.getStudentsNames();
  }

  @Get('/modify/:id')
  async GetStudentById(@Param('id') id: string) {
    const student = await this.studentsService.getStudentById(id);
    return student;
  }

  @Post('/modify/:id')
  updateStudent(
    @Param('id') id: string,
    @Body() updateStudentDto: AddStudentDto,
  ) {
    return this.studentsService.updateStudent(id, updateStudentDto);
  }

  @Delete(':id/delete')
  @Header('X-Custom-Request-Name', 'Delete Student Request')
  deleteStudent(@Param('id') id: string) {
    return this.studentsService.deleteStudent(id);
  }

  // :TODO

  @Get('/family')
  async GetFamilies() {
    return this.studentsService.getFamilies();
  }

  @Get('/familyNames')
  async GetFamiliesNames() {
    return this.studentsService.getFamiliesNames();
  }

  @Delete('/family/:id/delete')
  deleteFamily(@Param('id') id: string) {
    return this.studentsService.deleteFamily(id);
  }
}
