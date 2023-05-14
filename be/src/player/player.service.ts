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

    // Opting for offset pagination rather than cursor pagination
    // seems more appropriate for this use case.
    const pageStart = page >= 1 ? page : 1;
    const pageSize = limit >= 1 ? Math.min(limit, 25) : 10;
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

    const dbResponse = await this.operatorModel.aggregate([
      // This adds filters to the pipeline if there are any
      ...filterMod.filter(notEmpty),
      {
        $unwind: '$dfsSlatePlayers',
      },
      {
        $replaceRoot: {
          newRoot: '$dfsSlatePlayers',
        },
      },
      // This adds sort options to the pipeline if there are any
      ...sortMod.filter(notEmpty),
      {
        $facet: {
          metaData: [
            {
              $count: 'total',
            },
          ],
          players: [{ $skip: skipDocuments }, { $limit: pageSize }],
        },
      },
    ]);

    if (!dbResponse || !dbResponse?.[0]) {
      throw new InternalServerErrorException('Players not found');
    }

    return dbResponse?.[0];
  }
}
