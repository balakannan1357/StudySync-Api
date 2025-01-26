export interface IWeeklyPlanner {
  _id: string;
  userId: string;
  subTopicId: string;
  subTopicName: string;
  noOfHours: number;
  noOfSessions: number;
  weekStartDate: Date;
  weekEndDate: Date;
}
