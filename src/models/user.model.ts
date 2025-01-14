import mongoose, {  Schema } from 'mongoose';
import {IUser} from '../interfaces/users.interface'

// Mongoose Schema for the users table
// Define a schema for the studyTime field
const timeSlotSchema = new Schema(
  {
    time: {
      type: String,
      match: [/^\d{2}:\d{2}$/, 'Time should be in HH:MM format'], // Ensure time format
      required: true,
    },
    available: {
      type: Boolean,
      required: true,
    },
  },
  { _id: false } // Prevent creating an _id for each subdocument
);
const studyTimeSchema = new Schema(
  {
    Monday: { type: [timeSlotSchema], default: [] },
    Tuesday: { type: [timeSlotSchema], default: [] },
    Wednesday: { type: [timeSlotSchema], default: [] },
    Thursday: { type: [timeSlotSchema], default: [] },
    Friday: { type: [timeSlotSchema], default: [] },
    Saturday: { type: [timeSlotSchema], default: [] },
    Sunday: { type: [timeSlotSchema], default: [] },
  },
  { _id: false } // Prevent creating an _id for the overall studyTime object
);
const userSchema = new Schema<IUser>({
  user_id: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address'],
  },
  phone_number: {
    type: String,
    required: true,
    match: [/^\+?[1-9]\d{1,14}$/, 'Please enter a valid phone number'],
  },
  age: {
    type: Number,
    required: true,
  },
  school: {
    type: String,
  },
  area: {
    type: String,
  },
  time_preference: {
    type: String,
    enum: ['Nightowl', 'Morning person'],
    required: true,
  },
  studyTime: {
    type: studyTimeSchema,
    default: {}, // Default to an empty object
  },
});

const User = mongoose.model<IUser>('User', userSchema);

export { User };
