import { IsNotEmpty, IsString } from 'class-validator';

export class AddDivisionDto {
  @IsString()
  @IsNotEmpty()
  name: string;
}
