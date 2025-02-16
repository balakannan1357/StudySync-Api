import { IWeekPlan } from '@/interfaces/weekPlan.interface';
import { WeekPlanModel } from '@/models/weekPlan.model';
import { Service } from 'typedi';
import { BaseService } from './base.service';

@Service()
export class WeekPlanService extends BaseService<IWeekPlan> {
  constructor() {
    super(WeekPlanModel);
  }

  public async getLatestWeekPlanByUserIdAsync(userId: string): Promise<IWeekPlan> {
    return await this._model.findOne({ userId }).sort({ weekStartDate: -1 });
  }
}
