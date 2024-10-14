import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Division } from './Division.schema';

@Schema()
export class Class {
  @Prop({ required: true })
  name: string;

  @Prop({
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Division' }],
  })
  divisionsIds: Division[];
}

export const ClassSchema = SchemaFactory.createForClass(Class);
