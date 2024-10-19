import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AddStudentDto, CreateFamilyDto } from 'src/dto/students';
import { Family } from './Family.schema';
import { Invoice } from './Invoice.schema';
import { Student } from './Student.schema';

@Injectable()
export class StudentsService {
  constructor(
    @InjectModel(Student.name) private studentModel: Model<Student>,
    @InjectModel(Invoice.name) private invoiceModel: Model<Invoice>,
    @InjectModel(Family.name) private familyModel: Model<Family>,
  ) {}

  async addStudent(createStudentDto: AddStudentDto) {
    const student = new this.studentModel({
      ...createStudentDto,
      family: createStudentDto.familyId,
    });
    return student.save();
  }

  async getStudents() {
    return this.studentModel
      .find({}, { invoices: 0, division: 0 })
      .populate('class')
      .populate('driver')
      .populate({
        path: 'family',
        select: 'familyName',
      })
      .exec();
  }

  async getFamilies() {
    return this.familyModel.find().populate({
      path: 'students',
      select: 'name',
    });
  }

  async getFamiliesNames() {
    return this.familyModel.find({}, { familyName: 1 });
  }

  async addFamily(createFamilyDto: CreateFamilyDto) {
    console.log(createFamilyDto);
    const students = await this.studentModel.find({
      _id: { $in: createFamilyDto.studentIds },
    });

    for (const student of students) {
      if (student.family) {
        throw new BadRequestException(
          `Student "${student.name}" already belongs to another family.`,
        );
      }
    }

    const newFamily = new this.familyModel({
      familyName: createFamilyDto.familyName,
      students: createFamilyDto.studentIds,
    });

    const savedFamily = await newFamily.save();

    await this.studentModel.updateMany(
      { _id: { $in: createFamilyDto.studentIds } },
      { $set: { family: savedFamily._id } },
    );

    return savedFamily;
  }

  async getStudentsNames() {
    return this.studentModel.find({}, { name: 1 });
  }

  async updateStudent(id: string, updateStudentDto: AddStudentDto) {
    return this.studentModel.findByIdAndUpdate(id, updateStudentDto, {
      new: true,
    });
  }

  async deleteStudent(id: string) {
    return this.studentModel.findByIdAndDelete(id);
  }

  async deleteFamily(id: string) {
    return this.familyModel.findByIdAndDelete(id);
  }

  async getStudentById(studentId: string) {
    console.log(studentId);
    const student = await this.studentModel
      .findById(studentId)
      .populate('class')
      .populate('division')
      .populate('invoices')
      .exec();

    if (!student) {
      throw new NotFoundException(`Student with ID ${studentId} not found`);
    }

    return student;
  }
}
