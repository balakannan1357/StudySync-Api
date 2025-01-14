import mongoose, { Document, Schema } from 'mongoose';
import {IDailyPlanner} from '../interfaces/dailyPlanner.interface'

// Mongoose Schema for the daily_planner table
const dailyPlannerSchema = new Schema<IDailyPlanner>({
  daily_planner_id: {
    type: String,
    required: true,
    unique: true, // Ensure daily_planner_id is unique
  },
  user_id: {
    type: String,
    required: true,
  },
  weeklyplanner_id: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
 
  subtopic: {
    type: String,
    required: true,
  },
  activity_type: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
    enum: ['completed', 'pending', 'in-progress'], // Enum for status values
  },
  backlog: {
    type: Boolean,
    required: true,
    default: false, // Default to not a backlog
  },
});

const DailyPlanner = mongoose.model<IDailyPlanner>('DailyPlanner', dailyPlannerSchema);

export { DailyPlanner, IDailyPlanner };
