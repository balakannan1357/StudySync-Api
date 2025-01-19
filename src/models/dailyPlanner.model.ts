import { DailyPlannerStatus } from '@/enum/dailyPlanner.enum';
import mongoose, { Document, Schema } from 'mongoose';
import { IDailyPlanner } from '../interfaces/dailyPlanner.interface';

const dailyPlannerSchema = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
  },
  userId: {
    type: String,
  },
  weeklyPlannerId: {
    type: String,
  },
  date: {
    type: Date,
  },

  subTopic: {
    type: String,
  },
  activityType: {
    type: String,
  },
  status: {
    type: DailyPlannerStatus,
  },
  backlog: {
    type: Boolean,
  },
});

const DailyPlannerModel = mongoose.model<IDailyPlanner & Document>('DailyPlanner', dailyPlannerSchema);

export { DailyPlannerModel };

