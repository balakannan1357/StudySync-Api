import { Document } from 'mongoose';

interface ITimeSlot {
  time: string; // Time in HH:MM format
  available: boolean; // Availability status
}

// Define the studyTime structure
interface IStudyTime {
  Monday?: ITimeSlot[];
  Tuesday?: ITimeSlot[];
  Wednesday?: ITimeSlot[];
  Thursday?: ITimeSlot[];
  Friday?: ITimeSlot[];
  Saturday?: ITimeSlot[];
  Sunday?: ITimeSlot[];
}

// Interface for the User document
export interface IUser extends Document {
  user_id: string;
  name: string;
  email: string;
  phone_number: string;
  age: number;
  school: string;
  area: string;
  time_preference: 'Nightowl' | 'Morning person';
  studyTime : IStudyTime
}
