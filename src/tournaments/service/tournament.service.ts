import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TournamentEntity } from '../entities/tournament.entity';
import { Repository } from 'typeorm';
import { CreateTournamentDto } from '../dto/createTournament.dto';

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
}
