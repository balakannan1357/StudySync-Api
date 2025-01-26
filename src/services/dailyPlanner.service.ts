import { IDailyPlanner } from '@/interfaces/dailyPlanner.interface';
import { DailyPlannerModel } from '@/models/dailyPlanner.model';
import { Service } from 'typedi';
import { BaseService } from './base.service';

@Service()
export class DailyPlannerService extends BaseService<IDailyPlanner> {
  constructor() {
    super(DailyPlannerModel);
  }
}
