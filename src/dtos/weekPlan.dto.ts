import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateWeekPlanDto {
  @IsString()
  userId: string;

  @IsNotEmpty()
  scheduledTasks: string;
}

export class UpdateWeekPlanDto {
  @IsOptional()
  @IsString()
  userId?: string;

  @IsNotEmpty()
  scheduledTasks: string;
}
