import { Controller, Get } from '@nestjs/common';
import { OperatorService } from './operator.service';

@Controller('/operator')
export class OperatorController {
  constructor(private readonly operatorService: OperatorService) {}

  @Get()
  findDistinct() {
    return this.operatorService.findDistinct();
  }
}
