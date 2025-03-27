import { ICreatorBase } from '@/interfaces/creatorBase.interface';
import { IStudentAnswer } from './studentAnswer.interface';
import { ITest } from './test.interface';

export interface Report extends ICreatorBase {
  studentAnswerId: string;
  test: ITest;
  studentAnswer: IStudentAnswer;
  generatedAt: string;
}
