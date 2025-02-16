import { TimePreference } from '@/enum/timePreference.enum';
import { Document, model, Schema } from 'mongoose';
import { IUser } from '../interfaces/users.interface';
import { creatorBaseSchema } from './creatorBase.model';
import { WeekDay } from '@/enum/weekDay.enum';

const timeSlotSchema = new Schema(
  {
    start: { type: String },
    end: { type: String },
  },
  { _id: false },
);

const studyTimeSchema = new Schema(
  Object.fromEntries(
    Object.values(WeekDay).map(day => [day, { type: [timeSlotSchema], default: [] }]),
  ),
  { _id: false },
);

const userSchema = new Schema(
  {
    _id: {
      type: Schema.Types.ObjectId,
    },
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    phoneNumber: {
      type: String,
    },
    age: {
      type: Number,
    },
    school: {
      type: String,
    },
    area: {
      type: String,
    },
    timePreference: {
      type: String,
      enum: TimePreference,
    },
    studyTime: {
      type: studyTimeSchema,
    },
    ...creatorBaseSchema,
  },
  { timestamps: true, collection: 'Users' },
);

const UserModel = model<IUser & Document>('User', userSchema);

export { UserModel };
