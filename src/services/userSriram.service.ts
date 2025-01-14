import { Service } from "typedi";
import { BaseService } from "./base.service";
import { User } from "@/models/user.model";
import { IUser } from "@/interfaces/users.interface";



@Service()
export class UserService extends BaseService<IUser>{
    constructor()
    {
        super(User);
    }
}