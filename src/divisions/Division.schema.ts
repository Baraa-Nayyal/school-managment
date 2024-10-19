import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Division {
  @Prop({ required: true })
  name: string;
}

export const DivisionSchema = SchemaFactory.createForClass(Division);
