import { ICreatorBase } from '@/interfaces/creatorBase.interface';

export interface IStudentAnswer extends ICreatorBase {
  testId: string;
  studentId: string;
  date: string;
  answers: IAnswer[];
  totalMarks: number;
  percentage: number;
}

export interface IAnswer extends ICreatorBase {
  questionId: string;
  selectedOptionId?: string;
  textAnswer?: string;
  marksAwarded: number;
}
