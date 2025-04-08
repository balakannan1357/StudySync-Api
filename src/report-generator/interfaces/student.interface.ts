import { ICreatorBase } from '@/interfaces/creatorBase.interface';

export interface IStudent extends ICreatorBase {
  name: string;
  email: string;
  age: number;
  rollNum: string;
}
