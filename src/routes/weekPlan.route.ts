import { WeekPlanController } from '@/controllers/weekPlan.controller';
import { CreateWeekPlanDto } from '@/dtos/weekPlan.dto';
import { IWeekPlan } from '@/interfaces/weekPlan.interface';
import { Router } from 'express';
import { BaseRoute } from './base.route';

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
    this.router.get(
      `${this.path}/getByWeekStartDate/:weekStartDate`,
      this.controller.getByWeekStartDate,
    );
  }
}
