import { BadRequestException, Controller, Get, Param } from '@nestjs/common';
import { SlateService } from './slate.service';

@Controller('/operator')
export class SlateController {
  constructor(private readonly slateService: SlateService) {}

  @Get(':operator/:gameType')
  findAll(
    @Param('operator') operator: string,
    @Param('gameType') gameType: string,
  ) {
    if (!operator || !gameType) {
      return new BadRequestException('Missing operator or gameType');
    }

    return this.slateService.findDistinct(operator, gameType);
  }
}
