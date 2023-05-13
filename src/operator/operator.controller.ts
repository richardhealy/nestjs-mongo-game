import { Controller, Get, Param } from '@nestjs/common';
import { OperatorService } from './operator.service';
import { processInput } from 'src/utils/processInput';

@Controller('/operator')
export class OperatorController {
  constructor(private readonly operatorService: OperatorService) {}

  @Get()
  findAll() {
    return this.operatorService.findAll();
  }

  @Get(':operatorId')
  findOne(@Param('operatorId') operatorId: string) {
    return this.operatorService.findOne(operatorId);
  }

  @Get(':operator/:gameType')
  findOperatorNames(
    @Param('operator') operator: string,
    @Param('gameType') gameType: string,
  ) {
    return this.operatorService.findBy({
      operator: { $regex: processInput(operator), $options: 'i' },
      operatorGameType: { $regex: processInput(gameType), $options: 'i' },
    });
  }
}
