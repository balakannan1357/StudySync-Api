import { DailyPlannerStatus } from '@/enum/dailyPlanner.enum';

export interface IDailyPlanner {
  _id: string;
  userId: string;
  weeklyPlannerId: string;
  date: Date;
  subTopic: string;
  activityType: string;
  status: DailyPlannerStatus;
  backlog: boolean;
}
