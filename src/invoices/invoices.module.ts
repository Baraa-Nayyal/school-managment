import { Module } from '@nestjs/common';
import { InvoiceService } from './invoices.service';
import { InvoiceController } from './invoices.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Invoice, InvoiceSchema } from 'src/schemas/Invoice.schema';
import { Payment, PaymentSchema } from 'src/schemas/Payment.schema';
import { Student, StudentSchema } from 'src/schemas/Student.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Invoice.name,
        schema: InvoiceSchema,
      },
      {
        name: Payment.name,
        schema: PaymentSchema,
      },
      {
        name: Student.name,
        schema: StudentSchema,
      },
    ]),
  ],
  controllers: [InvoiceController],
  providers: [InvoiceService],
})
export class InvoicesModule {}
