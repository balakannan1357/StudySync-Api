import { ICreatorBase } from '@/interfaces/creatorBase.interface';
import { QuestionType } from '../enums/questionType.enum';

export interface ITest extends ICreatorBase {
  name: string;
  date: string;
  description?: string;
  questions: IQuestion[];
}

export interface IQuestion extends ICreatorBase {
  text: string;
  options?: IOption[];
  type: QuestionType;
  maxMarks: number;
}

export interface IOption extends ICreatorBase {
  text: string;
  isCorrect: boolean;
}
