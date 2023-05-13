import { Controller, Get, Query } from '@nestjs/common';
import { PlayerService } from './player.service';

@Controller('/players')
export class PlayerController {
  constructor(private readonly playerService: PlayerService) {}

  @Get()
  findAll(
    @Query('page') page?: number,
    @Query('limit') limit?: number,
    @Query('operatorGameType') operatorGameType?: string,
    @Query('operatorName') operatorName?: string,
    @Query('operator') operator?: string,
    @Query('sortBy') sortBy?: string,
    @Query('sortDir') sortDir?: string,
  ) {
    return this.playerService.find({
      page,
      limit,
      operatorGameType,
      operatorName,
      operator,
      sortBy,
      sortDir,
    });
  }
}
