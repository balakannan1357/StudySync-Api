import { Document } from 'mongoose';

// Interface for the DailyPlanner document
export interface IDailyPlanner extends Document {
  daily_planner_id: string;
  user_id: string;
  weeklyplanner_id: string;
  date: Date;
  subtopic: string;
  activity_type: string;
  status: 'completed' | 'pending' | 'in-progress'; // Enum for status values
  backlog: boolean;
}
