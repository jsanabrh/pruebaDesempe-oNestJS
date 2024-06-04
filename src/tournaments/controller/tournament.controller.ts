import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { TournamentService } from '../service/tournament.service';
import { CreateTournamentDto } from '../dto/createTournament.dto';
import { TournamentEntity } from '../entities/tournament.entity';

@ApiTags('Tournaments')
@Controller('tournament')
export class TournamentController {
  constructor(private readonly tournamentService: TournamentService) {}

  @Post('/createTournament')
  async createTournament(
    @Body() createTournament: CreateTournamentDto,
  ): Promise<TournamentEntity> {
    return this.tournamentService.createTournament(createTournament);
  }

  @Get('findAllTournament')
  async findAllTournaments() {
    return this.tournamentService.findAllTournament();
  }

  @Put('/updateTournament:idTournament')
  async updateUser(
    @Param('idTournament') idTournament: number,
    @Body() updateTournament: CreateTournamentDto,
  ) {
    return this.tournamentService.updateTournament(
      idTournament,
      updateTournament,
    );
  }

  @Delete('/deleteTournament/:idTournament')
  remove(@Param('idTournament') idTournament: number) {
    return this.tournamentService.removeTournament(+idTournament);
  }
}
