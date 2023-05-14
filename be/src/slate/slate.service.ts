import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Operator } from '../entities/operator.entity';
import { processInput } from 'src/utils/processInput';

@Injectable()
export class SlateService {
  constructor(
    @InjectModel(Operator.name) private readonly operatorModel: Model<Operator>,
  ) {}

  async findDistinct(operator?: string, gameType?: string) {
    const players = await this.operatorModel
      .distinct('operatorName', {
        operator: { $regex: processInput(operator), $options: 'i' },
        operatorGameType: { $regex: processInput(gameType), $options: 'i' },
      })
      .exec();

    return players;
  }
}
