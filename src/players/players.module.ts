import { Module } from '@nestjs/common';
import { PlayerService } from './service/player.service';
import { PlayerController } from './controller/player.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlayerEntity } from './entities/player.entity';
import { TournamentEntity } from 'src/tournaments/entities/tournament.entity';
import { ResultEntity } from 'src/results/entities/result.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([TournamentEntity, PlayerEntity, ResultEntity]),
  ],
  providers: [PlayerService],
  controllers: [PlayerController],
})
export class PlayersModule {}
