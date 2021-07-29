import { getCustomRepository } from "typeorm";
import { UserRepository } from "../repositories/UserRepositories";

interface IUserRequest {
  name: string,
  email: string,
  password: string,
  admin?: boolean
}

export class CreateUserServices {
  async execute({ name, email, password, admin } : IUserRequest) {
    const usersRepository = getCustomRepository(UserRepository);

    if (!email) {
      throw new Error('Email incorrect!');
    }

    const userAlreadyExists = await usersRepository.findOne({email});

    if (userAlreadyExists) {
      throw new Error('User already exists');
    }

    const user = usersRepository.create({
      name,
      email,
      password,
      admin
    });

    await usersRepository.save(user);

    return user;
  }
}