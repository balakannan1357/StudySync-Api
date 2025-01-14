import { Document } from 'mongoose';

// Interface for the WeeklyPlanner document
export interface IWeeklyPlanner extends Document {
  user_id: string;
  subtopic_id: string;
  subtopic_name: string;
  no_of_hours: number;
  no_of_sessions: number;
  week_start_date: Date; // Creation date
  week_end_date: Date; // Coming Saturday (end of the week)
}
