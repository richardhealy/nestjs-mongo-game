import { Controller, Get, Param } from '@nestjs/common';
import { SlateService } from './slate.service';

@Controller('/operator')
export class SlateController {
  constructor(private readonly slateService: SlateService) {}

  @Get(':operator/:gameType')
  findAll(
    @Param('operator') operator: string,
    @Param('gameType') gameType: string,
  ) {
    return this.slateService.findDistinct(operator, gameType);
  }
}
