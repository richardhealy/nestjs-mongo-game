import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Operator } from '../entities/operator.entity';

@Injectable()
export class GameTypeService {
  constructor(
    @InjectModel(Operator.name) private readonly operatorModel: Model<Operator>,
  ) {}

  async find(operatorId?: string) {
    const operators = await this.operatorModel.find().exec();

    if (!operators) {
      throw new InternalServerErrorException('GameTypes not found');
    }

    const gameTypes = operators
      .map(({ id, operatorGameType }) => ({
        id,
        operatorGameType,
      }))
      // If operatorId is provided, filter out all
      // operators that don't match otherwise return
      // all operators
      .filter(({ id }) => !operatorId || operatorId === id.toString())
      .flatMap(({ operatorGameType }) => operatorGameType);

    return Array.from(new Set(gameTypes));
  }
}
