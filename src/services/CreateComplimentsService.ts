import { getCustomRepository } from "typeorm";
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories";
import { UserRepository } from "../repositories/UserRepositories";

interface ICompliments {
  tag_id: string
  user_sender: string
  user_receiver: string
  message: string
}

export class CreateComplimentsService {
  async execute({ tag_id, user_sender, user_receiver, message }: ICompliments) {
    const complimentsRepository = getCustomRepository(ComplimentsRepositories);
    const usersRepositories = getCustomRepository(UserRepository);

    // se user que envia não é o mesmo que recebe o elogio
    if (user_sender === user_receiver) {
      throw new Error('Incorect User Receiver')
    }

    const userReceiverExists = await usersRepositories.findOne(user_receiver) // recebe id direto

    if (!userReceiverExists) {
      throw new Error('User Receiver does not exists')
    }

    const compliment = complimentsRepository.create({
      tag_id,
      user_receiver,
      user_sender,
      message
    })

    await complimentsRepository.save(compliment)

    return compliment;

  }
}