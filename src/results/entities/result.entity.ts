import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class ResultEntity {
  @PrimaryGeneratedColumn()
  idResult: number;

  @Column()
  points: number;

  @CreateDateColumn()
  createdAt?: Date;
}
