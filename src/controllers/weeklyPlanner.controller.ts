import { BaseController } from "./base.controller";
import { IWeeklyPlanner } from "@/interfaces/weeklyPlanner.interface";
import { WeeklyPlannerService } from "@/services/weeklyPlanner.service";
import { Container } from 'typedi';
import { Request, Response, NextFunction } from 'express';

export class WeeklyPlannerController extends BaseController<IWeeklyPlanner> {
  private readonly _service = Container.get(WeeklyPlannerService);
  constructor() {
    super();
    this.setService(this._service);
  }

  
}