import { BaseRoute } from '@/routes/base.route';
import { Router } from 'express';
import { TestController } from '../controllers/test.controller';
import { CreateTestDto } from '../dtos/test.dto';
import { ITest } from '../interfaces/test.interface';

export class TestRoute extends BaseRoute<ITest> {
  public path = '/tests';
  public router = Router();
  public controller = new TestController();

  constructor() {
    super();
    this.initializeBaseRoutes(this.router, this.path, this.controller, CreateTestDto);
  }
}
