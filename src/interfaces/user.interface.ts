import { TimePreference } from '@/enum/timePreference.enum';
import { WeekDay } from '@/enum/weekDay.enum';
import { ICreatorBase } from './creatorBase.interface';

export interface ITimeSlot {
  start: string;
  end: string;
}

export type IStudyTime = Record<WeekDay, ITimeSlot[]>;

export interface IUser extends ICreatorBase {
  _id: string;
  name: string;
  email: string;
  phoneNumber: string;
  age: number;
  school: string;
  area: string;
  timePreference: TimePreference;
  studyTime: IStudyTime;
  password: string;
}
