import { Column, Entity, PrimaryColumn } from 'typeorm';

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
}
