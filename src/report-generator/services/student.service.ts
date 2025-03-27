import { BaseService } from '@/services/base.service';
import { Service } from 'typedi';
import { IStudent } from '../interfaces/student.interface';
import { StudentModel } from '../models/student.model';

@Service()
export class StudentService extends BaseService<IStudent> {
  constructor() {
    super(StudentModel);
  }
}
