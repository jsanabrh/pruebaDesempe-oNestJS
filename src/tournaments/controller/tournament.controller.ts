import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { TournamentService } from '../service/tournament.service';
import { CreateTournamentDto } from '../dto/createTournament.dto';
import { TournamentEntity } from '../entities/tournament.entity';
import { FilterTournamentDto } from '../dto/filterTournamet.dto';

@ApiTags('Tournaments')
@Controller('tournament')
export class TournamentController {
  constructor(private readonly tournamentService: TournamentService) {}

  @ApiResponse({ status: 201, description: 'Tournament created successfully.' })
  @ApiResponse({
    status: 400,
    description: 'The data entered to create the tournament is invalid.',
  })
  @ApiResponse({
    status: 500,
    description:
      'An internal server error occurred while creating the tournament.',
  })
  @Post('/createTournament')
  async createTournament(
    @Body() createTournament: CreateTournamentDto,
  ): Promise<TournamentEntity> {
    return this.tournamentService.createTournament(createTournament);
  }

  @ApiResponse({
    status: 200,
    description: 'All tournaments were found successfully.',
  })
  @ApiResponse({
    status: 404,
    description: 'No tournaments were found in the system.',
  })
  @ApiResponse({
    status: 500,
    description:
      'An internal server error occurred while searching for the tournaments.',
  })
  @Get('findAllTournament')
  async findAllTournaments() {
    return this.tournamentService.findAllTournament();
  }

  @Get('findAllTournamentFilter')
  async findAllTournamentFilter(@Query() filter: FilterTournamentDto) {
    return this.tournamentService.findAllTournamentFilter(filter);
  }

  @ApiResponse({ status: 200, description: 'Tournament updated successfully.' })
  @ApiResponse({
    status: 404,
    description: 'Tournament with the entered ID not found.',
  })
  @ApiResponse({
    status: 500,
    description:
      'An internal server error occurred while updating the tournament.',
  })
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

  @ApiResponse({ status: 200, description: 'Tournament deleted successfully.' })
  @ApiResponse({
    status: 404,
    description: 'Tournament with the entered ID not found.',
  })
  @ApiResponse({
    status: 500,
    description:
      'An internal server error occurred while deleting the tournament.',
  })
  @Delete('/deleteTournament/:idTournament')
  remove(@Param('idTournament') idTournament: number) {
    return this.tournamentService.removeTournament(+idTournament);
  }
}
