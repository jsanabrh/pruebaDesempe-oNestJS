import { Body, Controller, Post } from '@nestjs/common';
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
    return this.playerService.createPlayer(createPlayer);
  }
}
