import { ISubTopic } from '@/interfaces/subTopic.interface';
import { SubTopicService } from '@/services/subTopic.service';
import { Container } from 'typedi';
import { BaseController } from './base.controller';

export class SubTopicController extends BaseController<ISubTopic> {
  private readonly _service = Container.get(SubTopicService);
  constructor() {
    super();
    this.setService(this._service);
  }
}
