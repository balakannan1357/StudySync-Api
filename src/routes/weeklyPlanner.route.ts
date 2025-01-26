import { WeeklyPlannerController } from '@/controllers/weeklyPlanner.controller';
import { Router } from 'express';
import { BaseRoute } from './base.route';
import { IWeeklyPlanner } from '@/interfaces/weeklyPlanner.interface';
import { CreateWeeklyPlannerDto } from '@/dtos/weeklyPlanner.dto';

export class WeeklyPlannerRoute extends BaseRoute<IWeeklyPlanner> {
  public path = '/weeklyPlanner';
  public router = Router();
  public controller = new WeeklyPlannerController();

  constructor() {
    super();
    this.initializeBaseRoutes(this.router, this.path, this.controller, CreateWeeklyPlannerDto);
  }
}
