import { BaseController } from "./base.controller";
import { ISubtopic } from "@/interfaces/subTopic.interface";
import { SubtopicService } from "@/services/subTopic.service";
import { Container } from 'typedi';
import { Request, Response, NextFunction } from 'express';

export class SubTopicController extends BaseController<ISubtopic> {
  private readonly _service = Container.get(SubtopicService);
  constructor() {
    super();
    this.setService(this._service);
  }

  
}