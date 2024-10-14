import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Driver {
  @Prop({ required: true })
  name: string;
}

export const DriverSchema = SchemaFactory.createForClass(Driver);
