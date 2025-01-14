import { Service } from "typedi";
import { BaseService } from "./base.service";
import { DailyPlanner } from "@/models/dailyPlanner.model";
import { IDailyPlanner } from "@/interfaces/dailyPlanner.interface";

@Service()
export class DailyPlannerService extends BaseService<IDailyPlanner>{
    constructor()
    {
        super(DailyPlanner);
    }
}