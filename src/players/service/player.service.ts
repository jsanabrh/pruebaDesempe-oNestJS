import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PlayerEntity } from '../entities/player.entity';
import { Repository } from 'typeorm';
import { CreatePlayerDto } from '../dto/createPlayer.dto';

@Injectable()
export class PlayerService {
  constructor(
    @InjectRepository(PlayerEntity)
    private readonly playerRepository: Repository<PlayerEntity>,
  ) {}
  async createPlayer(createPlayer: CreatePlayerDto): Promise<PlayerEntity> {
    const player = this.playerRepository.create(createPlayer);
    return await this.playerRepository.save(player);
  }

  async findAllPlayer() {
    return await this.playerRepository.find();
  }
}
