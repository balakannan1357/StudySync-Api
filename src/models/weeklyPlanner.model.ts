import { Document, model, Schema } from 'mongoose';
import { IWeeklyPlanner } from '../interfaces/weeklyPlanner.interface';
import { creatorBaseSchema } from './creatorBase.model';

const weeklyPlannerSchema = new Schema(
  {
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
    ...creatorBaseSchema,
  },
  { timestamps: true, collection: 'WeeklyPlanner' },
);

const WeeklyPlannerModel = model<IWeeklyPlanner & Document>('WeeklyPlanner', weeklyPlannerSchema);

export { WeeklyPlannerModel };
