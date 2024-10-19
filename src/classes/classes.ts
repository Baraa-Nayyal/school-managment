import { IsArray, IsMongoId, IsNotEmpty, IsString } from 'class-validator';

export class AddClassDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsArray()
  @IsNotEmpty()
  @IsMongoId({ each: true })
  divisionsIds: string[];
}
