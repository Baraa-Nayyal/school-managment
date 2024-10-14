import { Prop } from '@nestjs/mongoose';
import {
  IsNotEmpty,
  IsNumber,
  IsMongoId,
  IsPositive,
  IsString,
  IsOptional,
  IsInt,
  Min,
  ValidateIf,
} from 'class-validator';
import mongoose from 'mongoose';
import { Student } from 'src/schemas/Student.schema';

export class CreateInvoiceDto {
  @IsMongoId()
  @IsNotEmpty()
  @ValidateIf((o) => !o.familyId)
  studentId: string;

  @ValidateIf((o) => !o.studentId)
  @IsMongoId()
  @IsNotEmpty()
  familyId?: string;

  @IsNumber()
  @IsOptional()
  @IsPositive()
  totalAmount?: number;

  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  schoolPrice: number;

  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  busPrice: number;

  @IsString()
  @IsOptional()
  date?: string;
}

export class AddPaymentDto {
  @IsMongoId()
  @IsNotEmpty()
  invoiceId: string;

  @IsNumber()
  @IsNotEmpty()
  @IsInt()
  @Min(0)
  paidSchoolAmount: number;

  @IsNumber()
  @IsNotEmpty()
  @IsInt()
  @Min(0)
  paidBusAmount: number;

  @IsString()
  @IsOptional()
  date?: string;
}
