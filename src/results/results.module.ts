import { Module } from '@nestjs/common';
import { ResultService } from './service/result.service';
import { ResultController } from './controller/result.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ResultEntity } from './entities/result.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ResultEntity])],
  providers: [ResultService],
  controllers: [ResultController],
})
export class ResultsModule {}
