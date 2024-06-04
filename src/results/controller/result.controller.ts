import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ResultService } from '../service/result.service';
import { CreateResultDto } from '../dto/result.dto';
import { ResultEntity } from '../entities/result.entity';

@ApiTags('Result')
@Controller('result')
export class ResultController {
  constructor(private readonly resultService: ResultService) {}

  @Post('/createResult')
  async createResult(
    @Body() createResult: CreateResultDto,
  ): Promise<ResultEntity> {
    return this.resultService.createResult(createResult);
  }
}
