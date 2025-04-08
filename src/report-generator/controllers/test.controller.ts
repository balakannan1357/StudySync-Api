import { BaseController } from '@/controllers/base.controller';
import Container from 'typedi';
import { ITest } from '../interfaces/test.interface';
import { TestService } from '../services/test.service';

export class TestController extends BaseController<ITest> {
  private readonly _service = Container.get(TestService);
  constructor() {
    super();
    this.setService(this._service);
  }
}
