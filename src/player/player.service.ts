import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Operator } from '../entities/operator.entity';
import { PlayerDto } from '../dto/Player.dto';
import { notEmpty } from '../utils/notEmpty';
import { sanitizeFilterInput } from './utils/sanitizeFilterInput';
import { sanitizeSortInput } from './utils/sanitizeSortInput';

@Injectable()
export class PlayerService {
  constructor(
    @InjectModel(Operator.name) private readonly operatorModel: Model<Operator>,
  ) {}

  async find({ page, limit, ...rest }: Partial<PlayerDto>) {
    const filters = sanitizeFilterInput(rest);
    const sort = sanitizeSortInput(rest);

    const pageStart = page >= 1 ? page : 1;
    const pageSize = limit >= 1 ? Math.min(limit, 25) : 10;

    // Calculate the number of documents to skip
    const skipDocuments = (pageStart - 1) * pageSize;

    const filterMod = [
      filters && {
        $match: {
          ...filters,
        },
      },
    ];

    const sortMod = [
      sort && {
        $sort: {
          ...sort,
        },
      },
    ];

    const players = await this.operatorModel.aggregate([
      ...filterMod.filter(notEmpty),
      {
        $unwind: '$dfsSlatePlayers',
      },
      {
        $replaceRoot: {
          newRoot: '$dfsSlatePlayers',
        },
      },
      ...sortMod.filter(notEmpty),
      {
        $skip: skipDocuments,
      },
      {
        $limit: pageSize,
      },
    ]);

    if (!players) {
      throw new InternalServerErrorException('Players not found');
    }

    return players;
  }
}
