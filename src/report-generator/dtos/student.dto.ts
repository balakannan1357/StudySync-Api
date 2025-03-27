import { IsEmail, IsNumber, IsString } from 'class-validator';

export class StudentDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsNumber()
  age: number;
}
