import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { PlayersModule } from './players/players.module';
import { PlayerEntity } from './players/entities/player.entity';
import { PlayerController } from './players/controller/player.controller';
import { PlayerService } from './players/service/player.service';
import { TournamentsModule } from './tournaments/tournaments.module';
import { TournamentEntity } from './tournaments/entities/tournament.entity';
import { TournamentController } from './tournaments/controller/tournament.controller';
import { TournamentService } from './tournaments/service/tournament.service';
import { ResultsModule } from './results/results.module';
import { ResultEntity } from './results/entities/result.entity';
import { ResultController } from './results/controller/result.controller';
import { ResultService } from './results/service/result.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: +process.env.PORT,
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      autoLoadEntities: true,
      synchronize: true,
      entities: [PlayerEntity, TournamentEntity, ResultEntity],
      extra: {
        ssl: true,
      },
    }),
    TypeOrmModule.forFeature([PlayerEntity, TournamentEntity, ResultEntity]),
    PlayersModule,
    TournamentsModule,
    ResultsModule,
  ],

  controllers: [PlayerController, TournamentController, ResultController],
  providers: [PlayerService, TournamentService, ResultService],
})
export class AppModule {}
