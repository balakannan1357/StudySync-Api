import { ICreatorBase } from "./creatorBase.interface";

export interface ISubTopic extends ICreatorBase {
  _id: string;
  name: string;
  subject: string;
  noOfHours: number;
  noOfSessions: number;
}
