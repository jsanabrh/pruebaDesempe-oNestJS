import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ResultEntity } from '../entities/result.entity';
import { Repository } from 'typeorm';
import { CreateResultDto } from '../dto/result.dto';

@Injectable()
export class ResultService {
  constructor(
    @InjectRepository(ResultEntity)
    private readonly resultRepository: Repository<ResultEntity>,
  ) {}
  async createResult(createResult: CreateResultDto): Promise<ResultEntity> {
    const result = this.resultRepository.create(createResult);
    return await this.resultRepository.save(result);
  }
}
