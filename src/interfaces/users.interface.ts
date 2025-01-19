import { TimePreference } from '@/enum/timePreference.enum';
import { WeekDay } from '@/enum/weekDay.enum';

export interface ITimeSlot {
  start: string;
  end: string;
}

export type IStudyTime = Record<WeekDay, ITimeSlot[]>;

export interface IUser {
  _id: string;
  name: string;
  email: string;
  phoneNumber: string;
  age: number;
  school: string;
  area: string;
  timePreference: TimePreference;
  studyTime: IStudyTime;
}
