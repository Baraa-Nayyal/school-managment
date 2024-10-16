import {
  IsArray,
  IsMongoId,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class AddStudentDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsOptional()
  dadName: string;

  @IsOptional()
  momName: string;

  @IsOptional()
  area: string;

  @IsNumber()
  @IsOptional()
  dadNumber: string;

  @IsOptional()
  birthDate: string;

  @IsNumber()
  @IsOptional()
  momNumber: string;

  @IsMongoId()
  @IsNotEmpty()
  class: string;

  @IsMongoId()
  @IsNotEmpty()
  division: string;

  @IsMongoId()
  @IsOptional()
  driver: string;

  @IsMongoId()
  @IsOptional()
  familyId?: string;
}

export class CreateFamilyDto {
  @IsString()
  @IsNotEmpty()
  familyName: string;

  @IsArray()
  @IsMongoId({ each: true })
  studentIds: string[];
}
