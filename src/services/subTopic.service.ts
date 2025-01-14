import { Service } from "typedi";
import { BaseService } from "./base.service";
import { Subtopic } from "@/models/subTopic.model";
import { ISubtopic } from "@/interfaces/subTopic.interface";

@Service()
export class SubtopicService extends BaseService<ISubtopic>{
    constructor()
    {
        super(Subtopic);
    }
}