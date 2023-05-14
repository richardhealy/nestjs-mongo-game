import { Controller, Get, Param, Query } from '@nestjs/common';
import { GameTypeService } from './gameType.service';

@Controller('/operator/type')
export class GameTypeController {
  constructor(private readonly gameTypeService: GameTypeService) {}

  @Get(':operator?')
  findAll(@Param('operator') operatorId?: string) {
    return this.gameTypeService.find(operatorId);
  }
}
