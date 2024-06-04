import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateResultDto {
  createdAt: Date;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  points: number;
}
