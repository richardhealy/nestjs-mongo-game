import { Controller, Get, Query } from '@nestjs/common';
import { PlayerService } from './player.service';

@Controller('/players')
export class PlayerController {
  constructor(private readonly playerService: PlayerService) {}

  @Get()
  findAll(@Query('page') page?: number, @Query('limit') limit?: number) {
    return this.playerService.find({
      page,
      limit,
    });
  }
}
