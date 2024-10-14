import {
  IsArray,
  IsMongoId,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class AddStudentDto {
  @IsString()
  @IsNotEmpty()
  name: string;

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
