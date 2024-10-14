import { Body, Controller, Delete, Get, Header, Param, Post, UseGuards } from '@nestjs/common';
import { StudentsService } from './students.service';
import { AddStudentDto, CreateFamilyDto } from 'src/dto/students';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';

@Controller('students')
export class StudentsController {
  constructor(private studentsService: StudentsService) {}

  @Post('/family')
  @UseGuards(JwtAuthGuard)
  addFamily(@Body() createFamilyDto: CreateFamilyDto) {
    return this.studentsService.addFamily(createFamilyDto);
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  async AddStudent(@Body() createStudentDto: AddStudentDto) {
    return this.studentsService.addStudent(createStudentDto);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  async GetStudents() {
    return this.studentsService.getStudents();
  }

  @Get('/names')
  @UseGuards(JwtAuthGuard)
  async GetStudentsNames() {
    return this.studentsService.getStudentsNames();
  }

  @Get('/modify/:id')
  @UseGuards(JwtAuthGuard)
  async GetStudentById(@Param('id') id: string) {
    const student = await this.studentsService.getStudentById(id);
    return student;
  }

  @Post('/modify/:id')
  @UseGuards(JwtAuthGuard)
  updateStudent(
    @Param('id') id: string,
    @Body() updateStudentDto: AddStudentDto,
  ) {
    return this.studentsService.updateStudent(id, updateStudentDto);
  }

  @Delete(':id/delete')
  @UseGuards(JwtAuthGuard)
  @Header('X-Custom-Request-Name', 'Delete Student Request')
  deleteStudent(@Param('id') id: string) {
    return this.studentsService.deleteStudent(id);
  }

  // :TODO
  @UseGuards(JwtAuthGuard)

  @Get('/family')
  @UseGuards(JwtAuthGuard)
  async GetFamilies() {
    return this.studentsService.getFamilies();
  }

  @Get('/familyNames')
  @UseGuards(JwtAuthGuard)
  async GetFamiliesNames() {
    return this.studentsService.getFamiliesNames();
  }

  @Delete('/family/:id/delete')
  @UseGuards(JwtAuthGuard)
  deleteFamily(@Param('id') id: string) {
    return this.studentsService.deleteFamily(id);
  }
}
