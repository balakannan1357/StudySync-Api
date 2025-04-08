import { IsString } from 'class-validator';

export class CreateReportDto {
  @IsString()
  studentName: string;
  
  @IsString()
  course: string;
}
