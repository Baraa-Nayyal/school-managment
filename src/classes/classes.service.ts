import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AddClassDto } from 'src/dto/classes';
import { Class } from 'src/schemas/Classe.schema';

@Injectable()
export class ClassesService {
  constructor(@InjectModel(Class.name) private classesModel: Model<Class>) {}

  GetClasses() {
    return this.classesModel.find().populate('divisionsIds');
  }

  AddClass(addClassDto: AddClassDto) {
    const newClass = new this.classesModel(addClassDto);
    return newClass.save();
  }

  UpdateClass(id: string, updateClassDto: AddClassDto) {
    return this.classesModel.findByIdAndUpdate(id, updateClassDto, {
      new: true,
    });
  }

  DeleteClass(id: string) {
    return this.classesModel.findByIdAndDelete(id);
  }
}
