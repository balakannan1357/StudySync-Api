import { ISubTopic } from '@/interfaces/subTopic.interface';
import { BaseRoute } from './base.route';
import { Router } from 'express';
import { SubTopicController } from '@/controllers/subTopic.controller';
import { CreateSubTopicDto } from '@/dtos/subTopic.dto';

export class SubTopicRoute extends BaseRoute<ISubTopic> {
  public path = '/subTopic';
  public router = Router();
  public controller = new SubTopicController();

  constructor() {
    super();
    this.initializeBaseRoutes(this.router, this.path, this.controller, CreateSubTopicDto);
  }
}
