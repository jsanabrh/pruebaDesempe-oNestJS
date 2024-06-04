import { IsNumber, IsString } from '@nestjs/class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreatePlayerDto {
  @ApiProperty()
  @IsNumber()
  idPlayer: number;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  namePlayer: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  lastNamePlayer: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  teamPlayer: string;
}
