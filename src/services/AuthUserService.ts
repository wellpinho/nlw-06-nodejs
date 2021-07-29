import { getCustomRepository } from "typeorm";
import { UserRepository } from "../repositories/UserRepositories";
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

interface IAuth {
  email: string,
  password: string
}

export class AuthUserService {
  async execute({email, password}: IAuth) {
    const userRepository = getCustomRepository(UserRepository);

    // verificar se email existe
    const user = await userRepository.findOne({email});

    if (!user) {
      throw new Error('Email/Password incorrect');
    }

    // verificar se senha esta correta
    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new Error('Email/Password incorrect');
    }
    // gerar token
    const token = sign({ 
      email: user.email 
    }, '7313befec87fcb02a023df34a19769388649a50b', {
      subject: user.id,
      expiresIn: '1d'
    });

    return token;
  }
}