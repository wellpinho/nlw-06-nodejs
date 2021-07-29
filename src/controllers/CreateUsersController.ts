import { Request, Response } from 'express'
import { CreateUserServices } from "../services/CreateUserServices";
import { hash } from 'bcryptjs'

export class CreateUsersController {
  async handle(req: Request, res: Response) {
    const { name, email, password, admin } = req.body;

    const createUserService = new CreateUserServices();
    
    const passwordHash = await hash(password, 8);

    const user = await createUserService.execute({
      name,
      email,
      password: passwordHash,
      admin
    })

    return res.json(user);
  }
}