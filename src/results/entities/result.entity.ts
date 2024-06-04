import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class ResultEntity {
  @PrimaryGeneratedColumn()
  idTournament: number;

  @Column()
  points: number;

  @CreateDateColumn()
  createdAt?: Date;
}
