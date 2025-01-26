import mongoose, { Document, Schema } from 'mongoose';
import { IWeeklyPlanner } from '../interfaces/weeklyPlanner.interface';

const weeklyPlannerSchema = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
  },
  userId: {
    type: String,
  },
  subTopicId: {
    type: String,
  },
  subTopicName: {
    type: String,
  },
  noOfHours: {
    type: Number,
  },
  noOfSessions: {
    type: Number,
  },
  weekStartDate: {
    type: Date,
  },
  weekEndDate: {
    type: Date,
  },
});

const WeeklyPlannerModel = mongoose.model<IWeeklyPlanner & Document>(
  'WeeklyPlanner',
  weeklyPlannerSchema,
);

export { WeeklyPlannerModel };
