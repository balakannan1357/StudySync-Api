import { Service } from "typedi";
import { BaseController } from "./base.controller";
import { IUser } from "@/interfaces/users.interface";
import { UserService } from "@/services/userSriram.service";
import { Container } from 'typedi';

@Service()
export class UserController extends BaseController<IUser> {
//   private readonly _service = new UserService();
  private readonly _service = Container.get(UserService);
  
  constructor() {
    super();
    this.setService(this._service);
  }


}