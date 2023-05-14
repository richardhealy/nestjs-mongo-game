import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Operator } from '../entities/operator.entity';

@Injectable()
export class OperatorService {
  constructor(
    @InjectModel(Operator.name) private readonly operatorModel: Model<Operator>,
  ) {}

  async findDistinct() {
    const operators = await this.operatorModel.distinct('operator').exec();

    if (!operators) {
      throw new InternalServerErrorException('Operators not found');
    }

    return operators;
  }
}
