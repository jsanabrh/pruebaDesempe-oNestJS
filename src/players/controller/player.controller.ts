import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { PlayerService } from '../service/player.service';
import { CreatePlayerDto } from '../dto/createPlayer.dto';
import { PlayerEntity } from '../entities/player.entity';
import { FilterDto } from '../dto/filters.dto';

@ApiTags('Players')
@Controller('player')
export class PlayerController {
  constructor(private readonly playerService: PlayerService) {}

  @ApiResponse({ status: 201, description: 'Game player successfully.' })
  @ApiResponse({
    status: 400,
    description: 'The data entered to create the player is invalid.',
  })
  @ApiResponse({
    status: 500,
    description: 'An internal server error occurred while creating the player.',
  })
  @Post('/createPlayer')
  async createPlayer(
    @Body() createPlayer: CreatePlayerDto,
  ): Promise<PlayerEntity> {
    return this.playerService.createTournametPlayer(createPlayer);
  }

  @ApiResponse({
    status: 200,
    description: 'All players were found successfully.',
  })
  @ApiResponse({
    status: 404,
    description: 'No players were found in the system.',
  })
  @ApiResponse({
    status: 500,
    description:
      'An internal server error occurred while searching for the players.',
  })
  @Get('findAllPlayersFilter')
  async findAllPlayersFilter(@Query() filter: FilterDto) {
    return this.playerService.findAllPlayerFilter(filter);
  }

  @Get('findAllPlayer')
  async findAllPlayers() {
    return this.playerService.findAllPlayer();
  }

  @ApiResponse({ status: 200, description: 'Player updated successfully.' })
  @ApiResponse({
    status: 404,
    description: 'Player with the entered ID not found.',
  })
  @ApiResponse({
    status: 500,
    description: 'An internal server error occurred while updating the player.',
  })
  @Put('/updatePlayer:idPlayer')
  async updateUser(
    @Param('idPlayer') idPlayer: number,
    @Body() updatePlayer: CreatePlayerDto,
  ) {
    return this.playerService.updatePlayer(idPlayer, updatePlayer);
  }
}
