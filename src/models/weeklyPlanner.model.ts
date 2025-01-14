import mongoose, { Document, Schema } from 'mongoose';
import {IWeeklyPlanner} from '../interfaces/weeklyPlanner.interface'


const weeklyPlannerSchema = new Schema<IWeeklyPlanner>({
  user_id: {
    type: String,
    required: true,
  },
  subtopic_id: {
    type: String,
    required: true,
  },
  subtopic_name: {
    type: String,
    required: true,
  },
  no_of_hours: {
    type: Number,
    required: true,
    min: [0, 'Hours cannot be less than 0'],
  },
  no_of_sessions: {
    type: Number,
    required: true,
    min: [0, 'Number of sessions cannot be less than 0'],
  },
  week_start_date: {
    type: Date,
    required: true,
    default: Date.now, // Default to the current date
  },
  week_end_date: {
    type: Date,
    required: true,
  },
});

const WeeklyPlanner = mongoose.model<IWeeklyPlanner>('WeeklyPlanner', weeklyPlannerSchema);

export { WeeklyPlanner };
