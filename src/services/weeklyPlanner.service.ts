import { IWeeklyPlanner } from '@/interfaces/weeklyPlanner.interface';
import { WeeklyPlannerModel } from '@/models/weeklyPlanner.model';
import { Service } from 'typedi';
import { BaseService } from './base.service';

@Service()
export class WeeklyPlannerService extends BaseService<IWeeklyPlanner> {
  constructor() {
    super(WeeklyPlannerModel);
  }
}
