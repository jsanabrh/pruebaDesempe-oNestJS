import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PlayerEntity } from '../entities/player.entity';
import { Repository } from 'typeorm';
import { CreatePlayerDto } from '../dto/createPlayer.dto';
import { UpdatePlayerDto } from '../dto/updatePlayer.dto';

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

  async updatePlayer(
    idPlayer: number,
    updatePlayer: UpdatePlayerDto,
  ): Promise<any> {
    const player = await this.playerRepository.findOne({ where: { idPlayer } });
    if (!player) {
      throw new NotFoundException('User not found');
    }
    await this.playerRepository.update(idPlayer, updatePlayer);

    const updatePlayerData = await this.playerRepository.findOne({
      where: { idPlayer },
    });

    return await updatePlayerData;
  }
}
