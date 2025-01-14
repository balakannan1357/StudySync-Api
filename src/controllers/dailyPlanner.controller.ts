import { BaseController } from "./base.controller";
import { IDailyPlanner } from "@/interfaces/dailyPlanner.interface";
import { DailyPlannerService } from "@/services/dailyPlanner.service";
import { Container } from 'typedi';
import { Request, Response, NextFunction } from 'express';

export class DailyPlannerController extends BaseController<IDailyPlanner> {
  private readonly _service = Container.get(DailyPlannerService);
  constructor() {
    super();
    this.setService(this._service);
  }

  
}