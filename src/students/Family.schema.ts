import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Student } from './Student.schema';

@Schema()
export class Family {
  @Prop({ required: true })
  familyName: string;

  @Prop([{ type: mongoose.Schema.Types.ObjectId, ref: 'Student' }])
  students: Student[];
}

export const FamilySchema = SchemaFactory.createForClass(Family);
