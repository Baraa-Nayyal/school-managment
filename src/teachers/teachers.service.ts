import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTeacherDto } from './teachers';
import { Teacher } from './Teacher.schema';

@Injectable()
export class TeacherService {
  constructor(
    @InjectModel(Teacher.name) private teacherModel: Model<Teacher>,
  ) {}

  async getTeachers() {
    const teachers = await this.teacherModel
      .find()
      .populate({
        path: 'classes',
        populate: [
          { path: 'classId', model: 'Class' },
          { path: 'divisionId', model: 'Division' },
        ],
      })
      .exec();

    const transformedTeachers = teachers.map((teacher) => ({
      ...teacher.toObject(),
      classes: teacher.classes.map((item) => ({
        class: item.classId,
        division: item.divisionId,
      })),
    }));

    return transformedTeachers;
  }

  async addTeacher(createTeacherDto: CreateTeacherDto) {
    const teacher = new this.teacherModel(createTeacherDto);
    return teacher.save();
  }

  async getTeacherById(teacherId: string) {
    const teacher = await this.teacherModel
      .findById(teacherId)
      .populate({
        path: 'classes',
        populate: [
          { path: 'classId', model: 'Class' },
          { path: 'divisionId', model: 'Division' },
        ],
      })
      .exec();

    const transformedTeacher = {
      ...teacher.toObject(),
      classes: teacher.classes.map((item) => ({
        class: item.classId,
        division: item.divisionId,
      })),
    };

    return transformedTeacher;
  }
}
