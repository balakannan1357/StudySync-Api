import { BaseController } from '@/controllers/base.controller';
import Container from 'typedi';
import { IStudentAnswer } from '../interfaces/studentAnswer.interface';
import { StudentAnswerService } from '../services/studentAnswer.service';

export class StudentAnswerController extends BaseController<IStudentAnswer> {
  private readonly _service = Container.get(StudentAnswerService);
  constructor() {
    super();
    this.setService(this._service);
  }
}
