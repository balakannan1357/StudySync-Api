import { ISubTopic } from '@/interfaces/subTopic.interface';
import { SubTopicModel } from '@/models/subTopic.model';
import { Service } from 'typedi';
import { BaseService } from './base.service';

@Service()
export class SubTopicService extends BaseService<ISubTopic> {
  constructor() {
    super(SubTopicModel);
  }
}
