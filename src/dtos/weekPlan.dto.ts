import { IsDate, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateWeekPlanDto {
  @IsString()
  userId: string;

  @IsNotEmpty()
  scheduledTasks: string;

  @IsDate()
  weekStartDate: Date;

  @IsDate()
  weekEndDate: Date;
}

export class UpdateWeekPlanDto {
  @IsOptional()
  @IsString()
  userId?: string;

  @IsNotEmpty()
  scheduledTasks: string;

  @IsOptional()
  @IsDate()
  weekStartDate?: Date;

  @IsOptional()
  @IsDate()
  weekEndDate?: Date;
}
