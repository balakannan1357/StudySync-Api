import { Service } from "typedi";
import { BaseService } from "./base.service";
import { WeeklyPlanner } from "@/models/weeklyPlanner.model";
import { IWeeklyPlanner } from "@/interfaces/weeklyPlanner.interface";


@Service()
export class WeeklyPlannerService extends BaseService<IWeeklyPlanner>{
    constructor()
    {
        super(WeeklyPlanner);
    }
}