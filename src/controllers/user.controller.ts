import { IUser } from '@/interfaces/users.interface';
import { UserService } from '@/services/user.service';
import { Container, Service } from 'typedi';
import { BaseController } from './base.controller';

@Service()
export class UserController extends BaseController<IUser> {
  private readonly _service = Container.get(UserService);

  constructor() {
    super();
    this.setService(this._service);
  }
}
