import { TournamentEntity } from 'src/tournaments/entities/tournament.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity()
export class PlayerEntity {
  @PrimaryColumn()
  idPlayer: number;

  @Column()
  namePlayer: string;

  @Column()
  lastNamePlayer: string;

  @Column()
  teamPlayer: string;

  @Column()
  idTournament: number;

  @ManyToOne(() => TournamentEntity, (tournament) => tournament.players)
  @JoinColumn({ name: 'idTournament' })
  tournament: TournamentEntity;
}
