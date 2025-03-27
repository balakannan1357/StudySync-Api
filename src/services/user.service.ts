import { IUser } from '@/interfaces/user.interface';
import { UserModel } from '@/models/user.model';
import { Service } from 'typedi';
import { BaseService } from './base.service';

@Service()
export class UserService extends BaseService<IUser> {
  constructor() {
    super(UserModel);
  }
}
