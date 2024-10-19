import { Module } from '@nestjs/common';
import { StudentsService } from './students.service';
import { StudentsController } from './students.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Student, StudentSchema } from './Student.schema';
import { Invoice, InvoiceSchema } from '../invoices/Invoice.schema';
import { Family, FamilySchema } from './Family.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Student.name,
        schema: StudentSchema,
      },
      {
        name: Invoice.name,
        schema: InvoiceSchema,
      },
      {
        name: Family.name,
        schema: FamilySchema,
      },
    ]),
  ],
  controllers: [StudentsController],
  providers: [StudentsService],
})
export class StudentsModule {}
