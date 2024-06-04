import { Module } from '@nestjs/common';
import { PlayerService } from './service/player.service';
import { PlayerController } from './controller/player.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlayerEntity } from './entities/player.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PlayerEntity])],
  providers: [PlayerService],
  controllers: [PlayerController],
})
export class PlayersModule {}
