import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Operator } from '../entities/operator.entity';
import { processInput } from 'src/utils/processInput';

@Injectable()
export class GameTypeService {
  constructor(
    @InjectModel(Operator.name) private readonly operatorModel: Model<Operator>,
  ) {}

  async find(operator?: string) {
    console.log({ operator });

    const players = await this.operatorModel
      .distinct('operatorGameType', {
        operator: { $regex: processInput(operator), $options: 'i' },
      })
      .exec();

    return players;
  }
}
