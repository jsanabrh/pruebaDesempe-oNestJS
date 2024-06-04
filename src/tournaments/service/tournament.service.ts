import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TournamentEntity } from '../entities/tournament.entity';
import { ILike, Repository } from 'typeorm';
import { CreateTournamentDto } from '../dto/createTournament.dto';
import { UpdateTournamentDto } from '../dto/updateTournament.dto';
import { FilterTournamentDto } from '../dto/filterTournamet.dto';

@Injectable()
export class TournamentService {
  constructor(
    @InjectRepository(TournamentEntity)
    private readonly tournamentRepository: Repository<TournamentEntity>,
  ) {}
  async createTournament(
    createTournament: CreateTournamentDto,
  ): Promise<TournamentEntity> {
    const tournament = this.tournamentRepository.create(createTournament);
    return await this.tournamentRepository.save(tournament);
  }

  async findAllTournament() {
    return await this.tournamentRepository.find({
      relations: ['players'],
    });
  }

  async findAllTournamentFilter({
    limit,
    offset,
    search,
    sortBy,
    order,
  }: FilterTournamentDto): Promise<TournamentEntity[]> {
    return await this.tournamentRepository.find({
      where: {
        nameTournament: ILike(`%${search}%`),
      },
      order: {
        [sortBy]: order,
      },
      skip: offset,
      take: limit,
    });
  }

  async updateTournament(
    idTournament: number,
    updateTournament: UpdateTournamentDto,
  ): Promise<any> {
    const tournament = await this.tournamentRepository.findOne({
      where: { idTournament },
    });
    if (!tournament) {
      throw new NotFoundException('Tournament not found');
    }
    await this.tournamentRepository.update(idTournament, updateTournament);

    const updateTournamentData = await this.tournamentRepository.findOne({
      where: { idTournament },
    });

    return await updateTournamentData;
  }

  async removeTournament(idTournament: number) {
    const tournament = await this.tournamentRepository.delete({ idTournament });
    if (!idTournament) {
      throw new NotFoundException('Tournament not found');
    }
    return tournament;
  }
}
