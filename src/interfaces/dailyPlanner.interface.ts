import { DailyPlannerStatus } from '@/enum/dailyPlanner.enum';
import { ICreatorBase } from './creatorBase.interface';

export interface IDailyPlanner extends ICreatorBase {
  _id: string;
  userId: string;
  weeklyPlannerId: string;
  date: Date;
  subTopic: string;
  activityType: string;
  status: DailyPlannerStatus;
  backlog: boolean;
}
