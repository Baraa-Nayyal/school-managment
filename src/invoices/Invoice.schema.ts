import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Student } from '../students/Student.schema';
import { Payment } from './Payment.schema';
import { Family } from '../students/Family.schema';

@Schema()
export class Invoice {
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student',
    required: false,
  })
  studentId: Student;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Family',
    required: false,
  })
  familyId?: Family;

  @Prop({ required: true })
  totalAmount: number;

  @Prop({ required: true })
  schoolPrice: number;

  @Prop({ required: true })
  busPrice: number;

  @Prop({ required: true })
  date: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Payment' }] })
  payments: Payment[];
}

export const InvoiceSchema = SchemaFactory.createForClass(Invoice);
