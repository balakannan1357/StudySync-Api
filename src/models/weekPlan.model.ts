import { TaskStatus, TaskType } from '@/enum/task.enum';
import { Document, model, Schema } from 'mongoose';
import { IWeekPlan } from '../interfaces/weekPlan.interface';
import { creatorBaseSchema } from './creatorBase.model';
import { WeekDay } from '@/enum/weekDay.enum';

const taskSchema = new Schema(
  {
    subTopicId: {
      type: String,
    },
    type: {
      type: String,
      enum: TaskType,
    },
    status: {
      type: String,
      enum: TaskStatus,
    },
    priority: {
      type: Number,
    },
    duration: {
      type: Number,
    },
    startTime: {
      type: Date,
    },
    endTime: {
      type: Date,
    },
    tags: {
      type: [String],
    },
  },
  { _id: false },
);

const scheduledTasksSchema = new Schema(
  Object.fromEntries(Object.values(WeekDay).map(day => [day, { type: [taskSchema], default: [] }])),
  { _id: false },
);

const weekPlanSchema = new Schema(
  {
    _id: {
      type: Schema.Types.ObjectId,
    },
    userId: {
      type: String,
    },
    tasks: {
      type: scheduledTasksSchema,
    },
    weekStartDate: {
      type: Date,
      index: true,
    },
    weekEndDate: {
      type: Date,
    },
    ...creatorBaseSchema.obj,
  },
  { timestamps: true, collection: 'WeekPlans' },
);

const WeekPlanModel = model<IWeekPlan & Document>('WeekPlan', weekPlanSchema);

export { weekPlanSchema, WeekPlanModel };
