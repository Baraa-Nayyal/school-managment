import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Class } from '../classes/Classe.schema';
import { Division } from '../divisions/Division.schema';
import { Invoice } from '../invoices/Invoice.schema';
import { Driver } from '../drivers/Driver.schema';
import { Family } from './Family.schema';

@Schema()
export class Student {
  @Prop({ required: true })
  name: string;

  @Prop({ required: false })
  dadName: string;

  @Prop({ required: false })
  momName: string;

  @Prop({ required: false })
  area: string;

  @Prop({ required: false })
  birthDate: string;

  @Prop({ required: false })
  dadNumber: string;

  @Prop({ required: false })
  momNumber: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Class' })
  class: Class;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Division' })
  division: Division;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Driver' })
  driver: Driver;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Invoice' }] })
  invoices: Invoice[];

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Family', default: null })
  family: Family | null;
}

export const StudentSchema = SchemaFactory.createForClass(Student);
