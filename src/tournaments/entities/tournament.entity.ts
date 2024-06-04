import { PlayerEntity } from 'src/players/entities/player.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
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

  @OneToMany(() => PlayerEntity, (player) => player.tournament)
  players: PlayerEntity[];
}
