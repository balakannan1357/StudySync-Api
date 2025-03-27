import { BaseService } from '@/services/base.service';
import { Service } from 'typedi';
import { ITest } from '../interfaces/test.interface';
import { TestModel } from '../models/test.model';

@Service()
export class TestService extends BaseService<ITest> {
  constructor() {
    super(TestModel);
  }
}
