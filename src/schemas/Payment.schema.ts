import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Invoice } from './Invoice.schema';

@Schema()
export class Payment {
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Invoice',
    required: true,
  })
  invoiceId: Invoice;

  @Prop({ required: true })
  paidSchoolAmount: number;

  @Prop({ required: true })
  paidBusAmount: number;

  @Prop({ required: true })
  date: string;
}

export const PaymentSchema = SchemaFactory.createForClass(Payment);
