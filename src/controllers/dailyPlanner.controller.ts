import { IDailyPlanner } from '@/interfaces/dailyPlanner.interface';
import { DailyPlannerService } from '@/services/dailyPlanner.service';
import { Container } from 'typedi';
import { BaseController } from './base.controller';

export class DailyPlannerController extends BaseController<IDailyPlanner> {
  private readonly _service = Container.get(DailyPlannerService);
  constructor() {
    super();
    this.setService(this._service);
  }
}
