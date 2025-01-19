import { DailyPlannerStatus } from '@/enum/dailyPlanner.enum';

export interface IDailyPlanner {
  daily_planner_id: string;
  user_id: string;
  weeklyplanner_id: string;
  date: Date;
  subtopic: string;
  activity_type: string;
  status: DailyPlannerStatus;
  backlog: boolean;
}
