import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { TournamentService } from '../service/tournament.service';
import { CreateTournamentDto } from '../dto/createTournament.dto';
import { TournamentEntity } from '../entities/tournament.entity';

@ApiTags('Tournaments')
@Controller('tournament')
export class TournamentController {
  constructor(private readonly tournamentService: TournamentService) {}

  @Post('/createPlayer')
  async createTournament(
    @Body() createTournament: CreateTournamentDto,
  ): Promise<TournamentEntity> {
    return this.tournamentService.createTournament(createTournament);
  }
}
