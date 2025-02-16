import { WeekPlanController } from '@/controllers/weekPlan.controller';
import { Router } from 'express';
import { BaseRoute } from './base.route';
import { IWeekPlan } from '@/interfaces/weekPlan.interface';
import { CreateWeekPlanDto } from '@/dtos/weekPlan.dto';

export class WeekPlanRoute extends BaseRoute<IWeekPlan> {
  public path = '/weekPlan';
  public router = Router();
  public controller = new WeekPlanController();

  constructor() {
    super();
    this.initializeBaseRoutes(this.router, this.path, this.controller, CreateWeekPlanDto);
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.get(`${this.path}/latest/:userId`, this.controller.getLatestWeekPlanByUserId);
  }
}
