import { TimePreference } from '@/enum/timePreference.enum';
import mongoose, { Document, Schema } from 'mongoose';
import { IUser } from '../interfaces/users.interface';

const timeSlotSchema = new Schema(
  {
    time: {
      type: String,
    },
    available: {
      type: Boolean,
    },
  },
  { _id: false }, // Prevent creating an _id for each subdocument
);
const studyTimeSchema = new Schema(
  {
    Monday: { type: [timeSlotSchema] },
    Tuesday: { type: [timeSlotSchema] },
    Wednesday: { type: [timeSlotSchema] },
    Thursday: { type: [timeSlotSchema] },
    Friday: { type: [timeSlotSchema] },
    Saturday: { type: [timeSlotSchema] },
    Sunday: { type: [timeSlotSchema] },
  },
  { _id: false }, // Prevent creating an _id for the overall studyTime object
);
const userSchema = new Schema({
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
    type: TimePreference,
  },
  studyTime: {
    type: Schema.Types.Mixed,
  },
});

const UserModel = mongoose.model<IUser & Document>('User', userSchema);

export { UserModel };

