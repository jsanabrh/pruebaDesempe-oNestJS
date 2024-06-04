import { Module } from '@nestjs/common';
import { TournamentService } from './service/tournament.service';
import { TournamentController } from './controller/tournament.controller';

@Module({
  providers: [TournamentService],
  controllers: [TournamentController],
})
export class TournamentsModule {}
