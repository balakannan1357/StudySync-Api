import { ICreatorBase } from '@/interfaces/creatorBase.interface';
import { QuestionCategory } from '../enums/questionCategory.enum';

export interface ITest extends ICreatorBase {
  name: string;
  date: string;
  course: string;
  batch: string;
  exam: string;
  totalMarks: number;
  questions: IQuestion[];
}

export interface IQuestion extends ICreatorBase {
  subject: string;
  chapter: string;
  topic: string;
  category?: QuestionCategory;
  maxMarks: number;
}
