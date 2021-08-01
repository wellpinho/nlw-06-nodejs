import { getCustomRepository } from "typeorm";
import { UserRepository } from "../repositories/UserRepositories";
import { classToPlain } from 'class-transformer'

export class ListUsersService {
  async execute() {
    const listUsersService = getCustomRepository(UserRepository);

    const users = await listUsersService.find();

    return classToPlain(users);
  }
}