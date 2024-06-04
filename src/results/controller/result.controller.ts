import { Body, Controller, Post } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { ResultService } from '../service/result.service';
import { CreateResultDto } from '../dto/result.dto';
import { ResultEntity } from '../entities/result.entity';

@ApiTags('Result')
@Controller('result')
export class ResultController {
  constructor(private readonly resultService: ResultService) {}

  @ApiResponse({ status: 201, description: 'Result created successfully.' })
  @ApiResponse({
    status: 400,
    description: 'The data entered to create the result is invalid.',
  })
  @ApiResponse({
    status: 500,
    description: 'An internal server error occurred while creating the result.',
  })
  @Post('/createResult')
  async createResult(
    @Body() createResult: CreateResultDto,
  ): Promise<ResultEntity> {
    return this.resultService.createResult(createResult);
  }
}
