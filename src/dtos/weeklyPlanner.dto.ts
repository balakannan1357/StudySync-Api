import { IsString, IsNumber, Min, IsDate, IsOptional } from 'class-validator';

export class CreateWeeklyPlannerDto {
  @IsString()
  userId: string;

  @IsString()
  subTopicId: string;

  @IsString()
  subTopicName: string;

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

export class UpdateWeeklyPlannerDto {
  @IsOptional()
  @IsString()
  userId?: string;

  @IsOptional()
  @IsString()
  subTopicId?: string;

  @IsOptional()
  @IsString()
  subTopicName?: string;

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
