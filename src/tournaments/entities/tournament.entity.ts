import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class TournamentEntity {
  @PrimaryGeneratedColumn()
  idTournament: number;

  @Column()
  nameTournament: string;

  @CreateDateColumn()
  createdAt?: Date;
}
