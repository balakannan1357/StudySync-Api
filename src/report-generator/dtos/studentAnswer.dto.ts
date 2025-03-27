import { IsString } from 'class-validator';

export class CreateStudentAnswerDto {
  @IsString()
  studentId: string;
}
