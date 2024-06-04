import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTournamentDto {
  createdAt: Date;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  nameTournament: string;
}
