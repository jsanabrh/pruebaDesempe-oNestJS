import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { PlayersModule } from './players/players.module';
import { PlayerEntity } from './players/entities/player.entity';
import { PlayerController } from './players/controller/player.controller';
import { PlayerService } from './players/service/player.service';
import { TournamentsModule } from './tournaments/tournaments.module';

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
      entities: [PlayerEntity],
      extra: {
        ssl: true,
      },
    }),
    TypeOrmModule.forFeature([PlayerEntity]),
    PlayersModule,
    TournamentsModule,
  ],

  controllers: [PlayerController],
  providers: [PlayerService],
})
export class AppModule {}
