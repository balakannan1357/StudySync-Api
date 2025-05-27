import { IWeekPlan } from '@/interfaces/weekPlan.interface';
import { WeekPlanService } from '@/services/weekPlan.service';
import { NextFunction, Request, Response } from 'express';
import { Container } from 'typedi';
import { BaseController } from './base.controller';

export class WeekPlanController extends BaseController<IWeekPlan> {
  private readonly _service = Container.get(WeekPlanService);
  constructor() {
    super();
    this.setService(this._service);
  }

  public getByWeekStartDate = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const date: string = req.params.weekStartDate;
      if (!date) {
        return res.status(400).json({ message: 'Week start date is required' });
      }
      const userId = 'user-123'; // Replace with actual user ID retrieval logic from token
      const weekPlan = await this._service.getByWeekStartDate(userId, date);
      res.status(200).json(weekPlan);
    } catch (error) {
      next(error);
    }
  };
}
