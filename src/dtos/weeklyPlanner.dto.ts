import { IsString, IsNumber, Min, IsDate, IsOptional } from 'class-validator';

export class createWeeklyPlannerDto {
  @IsString()
  userId: string;

  @IsString()
  subtopicId: string;

  @IsString()
  subtopicName: string;

  @IsNumber()
  @Min(0, { message: 'Hours cannot be less than 0' })
  noOfHours: number;

  @IsNumber()
  @Min(0, { message: 'Number of sessions cannot be less than 0' })
  noOfSessions: number;

  @IsDate()
  weekStartDate: Date;

  @IsDate()
  weekEndDate: Date;
}

export class updateWeeklyPlannerDto {
  @IsOptional()
  @IsString()
  userId?: string;

  @IsOptional()
  @IsString()
  subtopicId?: string;

  @IsOptional()
  @IsString()
  subtopicName?: string;

  @IsOptional()
  @IsNumber()
  @Min(0, { message: 'Hours cannot be less than 0' })
  noOfHours?: number;

  @IsOptional()
  @IsNumber()
  @Min(0, { message: 'Number of sessions cannot be less than 0' })
  noOfSessions?: number;

  @IsOptional()
  @IsDate()
  weekStartDate?: Date;

  @IsOptional()
  @IsDate()
  weekEndDate?: Date;
}
