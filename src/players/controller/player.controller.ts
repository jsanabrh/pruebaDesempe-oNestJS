import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PlayerService } from '../service/player.service';
import { CreatePlayerDto } from '../dto/createPlayer.dto';
import { PlayerEntity } from '../entities/player.entity';

@ApiTags('Players')
@Controller('player')
export class PlayerController {
  constructor(private readonly playerService: PlayerService) {}

  @Post('/createPlayer')
  async createPlayer(
    @Body() createPlayer: CreatePlayerDto,
  ): Promise<PlayerEntity> {
    return this.playerService.createTournametPlayer(createPlayer);
  }

  @Get('findAllPlayers')
  async findAllPlayers() {
    return this.playerService.findAllPlayer();
  }

  @Put('/updatePlayer:idPlayer')
  async updateUser(
    @Param('idPlayer') idPlayer: number,
    @Body() updatePlayer: CreatePlayerDto,
  ) {
    return this.playerService.updatePlayer(idPlayer, updatePlayer);
  }
}
