import { UserController } from '@/controllers/user.controller';
import { IUser } from '@/interfaces/users.interface';
import { createUserDto } from '@dtos/users.dto';
import { Router } from 'express';
import { BaseRoute } from './base.route';

export class UserRoute extends BaseRoute<IUser> {
  public path = '/users';
  public router = Router();
  public controller = new UserController();

  constructor() {
    super();
    this.initializeBaseRoutes(this.router, this.path, this.controller, CreateUserDto);
  }
}
