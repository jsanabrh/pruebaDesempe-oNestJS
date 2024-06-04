import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PlayerEntity } from '../entities/player.entity';
import { ILike, Repository } from 'typeorm';
import { CreatePlayerDto } from '../dto/createPlayer.dto';
import { UpdatePlayerDto } from '../dto/updatePlayer.dto';
import { TournamentEntity } from 'src/tournaments/entities/tournament.entity';
import { FilterDto } from '../dto/filters.dto';

@Injectable()
export class PlayerService {
  constructor(
    @InjectRepository(PlayerEntity)
    private readonly playerRepository: Repository<PlayerEntity>,
    @InjectRepository(TournamentEntity)
    private readonly tournamentRepository: Repository<TournamentEntity>,
  ) {}
  async createTournametPlayer(
    createPlayer: CreatePlayerDto,
  ): Promise<PlayerEntity> {
    const { idTournament, ...playerData } = createPlayer;
    const tournament = await this.tournamentRepository.findOne({
      where: { idTournament },
    });

    if (!tournament) {
      throw new NotFoundException('Tournament not found');
    }
    const player = this.playerRepository.create({
      ...playerData,
      idTournament: tournament.idTournament,
      tournament: tournament,
    });
    return await this.playerRepository.save(player);
  }

  async findAllPlayer() {
    return await this.playerRepository.find();
  }

  async findAllPlayerFilter({
    limit,
    offset,
    search,
    sortBy,
    order,
  }: FilterDto): Promise<PlayerEntity[]> {
    return await this.playerRepository.find({
      where: {
        teamPlayer: ILike(`%${search}%`),
      },
      order: {
        [sortBy]: order,
      },
      skip: offset,
      take: limit,
    });
  }

  async updatePlayer(
    idPlayer: number,
    updatePlayer: UpdatePlayerDto,
  ): Promise<any> {
    const player = await this.playerRepository.findOne({ where: { idPlayer } });
    if (!player) {
      throw new NotFoundException('User not found');
    }
    await this.playerRepository.update(idPlayer, updatePlayer);

    const updatePlayerData = await this.playerRepository.findOne({
      where: { idPlayer },
    });

    return await updatePlayerData;
  }
}
