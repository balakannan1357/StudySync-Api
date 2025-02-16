import { TaskStatus, TaskType } from '@/enum/task.enum';
import { ICreatorBase } from './creatorBase.interface';
import { WeekDay } from '@/enum/weekDay.enum';

export interface ITask {
  subTopicId: string;
  type: TaskType;
  status: TaskStatus;
  priority: number;
  duration: number;
  startTime: Date;
  endTime: Date;
  tags: string[];
}

export type IWeekTasks = Record<WeekDay, ITask[]>;

export interface IWeekPlan extends ICreatorBase {
  _id: string;
  userId: string;
  tasks: IWeekTasks;
  weekStartDate: Date;
  weekEndDate: Date;
}
