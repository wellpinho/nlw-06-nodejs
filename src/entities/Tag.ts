import {Column, CreateDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";
import { v4 as uuid } from 'uuid'
import { Expose } from 'class-transformer'

@Entity('tags')
export class Tag {
  @PrimaryColumn('uuid')
  readonly id: String

  @Column()
  name: String

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Expose({ name: 'name_custom'})
  nameCustom(): string {
    return `#${this.name}`
  }

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
