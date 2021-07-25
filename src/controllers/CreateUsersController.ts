import { Request, Response } from 'express'
import { CreateUserServices } from "../services/CreateUserServices";

export class CreateUsersController {
  async handle(req: Request, res: Response) {
    const { name, email, admin } = req.body;

    const createUserService = new CreateUserServices();
    
    const user = await createUserService.execute({
      name,
      email,
      admin
    })

    return res.json(user);
  }
}