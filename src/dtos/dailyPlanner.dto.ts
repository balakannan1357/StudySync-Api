import { IsString, IsDate, IsOptional, IsBoolean, IsEnum } from 'class-validator';
import { DailyPlannerStatus } from '@/enum/dailyPlanner.enum';

export class createDailyPlannerDto {
  @IsString()
  userId: string;

  @IsString()
  weeklyPlannerId: string;

  @IsDate()
  date: Date;

  @IsString()
  subTopic: string;

  @IsString()
  activityType: string;

  @IsEnum(DailyPlannerStatus)
  status: DailyPlannerStatus;

  @IsBoolean()
  backlog: boolean;
}

export class updateDailyPlannerDto {
  @IsOptional()
  @IsString()
  userId?: string;

  @IsOptional()
  @IsString()
  weeklyPlannerId?: string;

  @IsOptional()
  @IsDate()
  date?: Date;

  @IsOptional()
  @IsString()
  subTopic?: string;

  @IsOptional()
  @IsString()
  activityType?: string;

  @IsOptional()
  @IsEnum(DailyPlannerStatus)
  status?: DailyPlannerStatus;

  @IsOptional()
  @IsBoolean()
  backlog?: boolean;
}
