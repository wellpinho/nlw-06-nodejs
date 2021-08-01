import { getCustomRepository } from "typeorm";
import { TagRepositories } from "../repositories/TagsRepositories";
import { classToPlain } from 'class-transformer'

export class ListTagsService {
  async execute() {
    const tagsRepository = getCustomRepository(TagRepositories);

    const tags = await tagsRepository.find();

    return classToPlain(tags);
  }
}