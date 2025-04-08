import { ICreatorBase } from '@/interfaces/creatorBase.interface';
import { QuestionCategory } from '../enums/questionCategory.enum';

export interface IReport extends ICreatorBase {
  studentName: string;
  course: string;
  batch: string;
  exam: string;
  date: string;
  totalMarks: number;
  obtainedMarks: number;
  items: IEvaluationEntry[];
}

export interface IEvaluationEntry {
  subject: string;
  chapter: string;
  topic: string;
  category: QuestionCategory;
  maxMarks: number;
  obtainedMarks: number;
}
