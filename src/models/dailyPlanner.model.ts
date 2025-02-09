import { DailyPlannerStatus } from '@/enum/dailyPlanner.enum';
import { Document, model, Schema } from 'mongoose';
import { IDailyPlanner } from '../interfaces/dailyPlanner.interface';
import { creatorBaseSchema } from './creatorBase.model';

const dailyPlannerSchema = new Schema(
  {
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
    ...creatorBaseSchema,
  },
  { timestamps: true, collection: 'DailyPlanner' },
);

const DailyPlannerModel = model<IDailyPlanner & Document>('DailyPlanner', dailyPlannerSchema);

export { DailyPlannerModel };
