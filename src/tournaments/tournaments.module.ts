import { Module } from '@nestjs/common';
import { TournamentService } from './service/tournament.service';
import { TournamentController } from './controller/tournament.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TournamentEntity } from './entities/tournament.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TournamentEntity])],
  providers: [TournamentService],
  controllers: [TournamentController],
})
export class TournamentsModule {}
