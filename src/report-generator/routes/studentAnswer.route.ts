import { BaseRoute } from '@/routes/base.route';
import { Router } from 'express';
import { StudentAnswerController } from '../controllers/studentAnswer.controller';
import { CreateStudentAnswerDto } from '../dtos/studentAnswer.dto';
import { IStudentAnswer } from '../interfaces/studentAnswer.interface';

export class StudentAnswerRoute extends BaseRoute<IStudentAnswer> {
  public path = '/studentAnswers';
  public router = Router();
  public controller = new StudentAnswerController();

  constructor() {
    super();
    this.initializeBaseRoutes(this.router, this.path, this.controller, CreateStudentAnswerDto);
  }
}
