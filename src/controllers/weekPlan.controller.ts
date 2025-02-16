import { IWeekPlan } from '@/interfaces/weekPlan.interface';
import { WeekPlanService } from '@/services/weekPlan.service';
import { Container } from 'typedi';
import { BaseController } from './base.controller';

export class WeekPlanController extends BaseController<IWeekPlan> {
  private readonly _service = Container.get(WeekPlanService);
  constructor() {
    super();
    this.setService(this._service);
  }

  public async getLatestWeekPlanByUserId(userId: string) {
    return await this._service.getLatestWeekPlanByUserIdAsync(userId);
  }
}
