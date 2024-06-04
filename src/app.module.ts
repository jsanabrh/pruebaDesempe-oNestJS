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
      entities: [PlayerEntity, TournamentEntity],
      extra: {
        ssl: true,
      },
    }),
    TypeOrmModule.forFeature([PlayerEntity, TournamentEntity]),
    PlayersModule,
    TournamentsModule,
  ],

  controllers: [PlayerController, TournamentController],
  providers: [PlayerService, TournamentService],
})
export class AppModule {}
