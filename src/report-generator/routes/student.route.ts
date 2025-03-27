import { BaseRoute } from '@/routes/base.route';
import { Router } from 'express';
import { StudentController } from '../controllers/student.controller';
import { StudentDto } from '../dtos/student.dto';
import { IStudent } from '../interfaces/student.interface';

export class StudentRoute extends BaseRoute<IStudent> {
  public path = '/students';
  public router = Router();
  public controller = new StudentController();

  constructor() {
    super();
    this.initializeBaseRoutes(this.router, this.path, this.controller, StudentDto);
  }
}
