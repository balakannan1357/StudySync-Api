import { BaseService } from '@/services/base.service';
import { Service } from 'typedi';
import { IStudentAnswer } from '../interfaces/studentAnswer.interface';
import { StudentAnswerModel } from '../models/studentAnswer.model';

@Service()
export class StudentAnswerService extends BaseService<IStudentAnswer> {
  constructor() {
    super(StudentAnswerModel);
  }
}
