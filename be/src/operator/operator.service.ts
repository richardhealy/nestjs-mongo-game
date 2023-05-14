import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';
import { Operator } from '../entities/operator.entity';
import { mapOperator } from '../utils/mapOperator';

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

  async findAll() {
    const operators = await this.operatorModel.find().exec();

    if (!operators) {
      throw new InternalServerErrorException('Operators not found');
    }

    return operators.map(mapOperator);
  }

  async findOne(id: string) {
    const operator = await this.operatorModel.findOne({ id }).exec();

    if (!operator) {
      throw new NotFoundException(`Operator #${id} not found`);
    }

    return mapOperator(operator);
  }

  async findBy(attrs: FilterQuery<Operator>) {
    const operators = await this.operatorModel.find(attrs).exec();

    if (!operators) {
      throw new InternalServerErrorException('Operators not found');
    }

    return operators.map(mapOperator);
  }
}
