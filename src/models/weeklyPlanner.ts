import mongoose, { Document, Schema } from 'mongoose';

interface IWeeklyPlanner extends Document {
  user_id: string;
  subtopic_id: string;
  subtopic_name: string;
  no_of_hours: number;
  no_of_sessions: number;
  week_start_date: Date; // Creation date
  week_end_date: Date; // Coming Saturday (end of the week)
}

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

export { WeeklyPlanner, IWeeklyPlanner };
