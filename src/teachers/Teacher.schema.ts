import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Division } from '../divisions/Division.schema';
import { Class } from './Classe.schema';

@Schema()
class ClassDivision {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Class', required: true })
  classId: Class;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Division',
    required: true,
  })
  divisionId: Division;
}

@Schema()
export class Teacher {
  @Prop({ required: true })
  name: string;

  @Prop({
    type: [
      {
        classId: mongoose.Schema.Types.ObjectId,
        divisionId: mongoose.Schema.Types.ObjectId,
      },
    ],
  })
  classes: ClassDivision[];
}

export const TeacherSchema = SchemaFactory.createForClass(Teacher);
