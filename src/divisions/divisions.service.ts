import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Division } from 'src/schemas/Division.schema';
import { AddDivisionDto } from '../dto/devisions';

@Injectable()
export class DivisionsService {
  constructor(
    @InjectModel(Division.name) private divisionModel: Model<Division>,
  ) {}

  AddDivision(addDivisionDto: AddDivisionDto) {
    const newDivision = new this.divisionModel(addDivisionDto);
    return newDivision.save();
  }

  async UpdateDivision(id: string, updateDivisionDto: AddDivisionDto) {
    return this.divisionModel.findByIdAndUpdate(id, updateDivisionDto, {
      new: true,
    });
  }

  GetDivisions() {
    return this.divisionModel.find();
  }

  DeleteDivision(id: string) {
    return this.divisionModel.findByIdAndDelete(id);
  }
}
