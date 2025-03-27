import { BaseController } from '@/controllers/base.controller';
import Container from 'typedi';
import { IStudent } from '../interfaces/student.interface';
import { StudentService } from '../services/student.service';

export class StudentController extends BaseController<IStudent> {
  private readonly _service = Container.get(StudentService);
  constructor() {
    super();
    this.setService(this._service);
  }
}
