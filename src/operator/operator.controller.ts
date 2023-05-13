import { Controller, Get, Param } from '@nestjs/common';
import { OperatorService } from './operator.service';

const processInput = (input: string) =>
  input.toLocaleLowerCase().split('+').join(' ');

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
    console.log({
      operator: processInput(operator),
      operatorGameType: processInput(gameType),
    });

    return this.operatorService.findBy({
      operator: { $regex: processInput(operator), $options: 'i' },
      operatorGameType: { $regex: processInput(gameType), $options: 'i' },
    });
  }
}
