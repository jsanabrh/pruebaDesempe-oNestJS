import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PlayerEntity } from '../entities/player.entity';
import { ILike, Repository } from 'typeorm';
import { CreatePlayerDto } from '../dto/createPlayer.dto';
import { UpdatePlayerDto } from '../dto/updatePlayer.dto';
import { TournamentEntity } from 'src/tournaments/entities/tournament.entity';
import { FilterDto } from '../dto/filters.dto';
import { ResultEntity } from 'src/results/entities/result.entity';

@Injectable()
export class PlayerService {
  constructor(
    @InjectRepository(PlayerEntity)
    private readonly playerRepository: Repository<PlayerEntity>,
    @InjectRepository(TournamentEntity)
    private readonly tournamentRepository: Repository<TournamentEntity>,
    @InjectRepository(ResultEntity)
    private readonly resultsRepository: Repository<ResultEntity>,
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
    return await this.playerRepository.find({
      relations: ['result'],
    });
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

  async savePlayerWithResult(
    name: string,
    lastName: string,
    team: string,
    points: number,
  ): Promise<void> {
    const player = new PlayerEntity();
    player.namePlayer = name;
    player.lastNamePlayer = lastName;
    player.teamPlayer = team;

    const result = new ResultEntity();
    result.points = points;

    player.result = result;

    await this.playerRepository.save(player);
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

  async getAllPlayersWithResults() {
    return this.playerRepository.find({ relations: ['result'] });
  }

  async assignPointsToPlayer(idPlayer: number, points: number): Promise<void> {
    const player = await this.playerRepository.findOne({ where: { idPlayer } });
    if (!player) {
      throw new Error('Player not found');
    }

    const result = new ResultEntity();
    result.points = points; // Asegúrate de asignar un valor a 'points'
    await this.resultsRepository.save(result);

    player.result = result;
    await this.playerRepository.save(player);
  }
}
