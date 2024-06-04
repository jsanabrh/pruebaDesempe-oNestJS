import { PartialType } from '@nestjs/mapped-types';
import { CreateTournamentDto } from './createTournament.dto';

export class UpdateTournamentDto extends PartialType(CreateTournamentDto) {}
