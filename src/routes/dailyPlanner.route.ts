import { DailyPlannerController } from "@/controllers/dailyPlanner.controller";
import { IDailyPlanner } from "@/interfaces/dailyPlanner.interface";
import { createDailyPlannerDto } from "@/dtos/dailyPlanner.dto";
import { Router } from "express";
import { BaseRoute } from "./base.route";

export class DailyPlannerRoute extends BaseRoute<IDailyPlanner> {
  public path = "/dailyPlanner";
  public router = Router();
  public controller = new DailyPlannerController();

  constructor() {
    super();
    this.initializeBaseRoutes(this.router, this.path, this.controller, createDailyPlannerDto);
  }
}