import { ICreatorBase } from "./creatorBase.interface";

export interface IWeeklyPlanner extends ICreatorBase {
  _id: string;
  userId: string;
  subTopicId: string;
  subTopicName: string;
  noOfHours: number;
  noOfSessions: number;
  weekStartDate: Date;
  weekEndDate: Date;
}
