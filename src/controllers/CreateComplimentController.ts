import { Request, Response } from 'express'
import { CreateComplimentsService } from '../services/CreateComplimentsService';

export class CreateComplimentController {
  async handle(req: Request, res: Response) {
    const { tag_id, user_sender, user_receiver, message } = req.body;

    const createComplimentService = new CreateComplimentsService();
    

    const compliment = await createComplimentService.execute({
      tag_id, 
      user_sender, 
      user_receiver, 
      message
    })

    return res.json(compliment);
  }
}