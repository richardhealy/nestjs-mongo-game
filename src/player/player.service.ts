import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Operator } from '../entities/operator.entity';
import { PlayerDto } from 'src/dto/Player.dto';

const sanitizeFilterInput = (input: PlayerDto) => {
  const { sortBy, sortDir } = input;

  if (sortBy === 'operatorPlayerName') {
    return {
      operatorPlayerName: sortDir === 'asc' ? 1 : -1,
    };
  }

  if (sortBy === 'fantasyPoints') {
    return {
      operatorPlayerName: sortDir === 'asc' ? 1 : -1,
    };
  }

  return {};
};

const sanitizeFSortInput = (input: PlayerDto) => {
  const { operatorGameType, operatorName, operator } = input;

  return {
    ...(operatorGameType && { operatorGameType }),
    ...(operatorName && { operatorName }),
    ...(operator && { operator }),
  };
};

@Injectable()
export class PlayerService {
  constructor(
    @InjectModel(Operator.name) private readonly operatorModel: Model<Operator>,
  ) {}

  async find({ page, limit, ...rest }: PlayerDto) {
    const filters = sanitizeFilterInput(rest);

    const pageStart = page >= 1 ? page : 1;
    const pageSize = limit >= 1 ? Math.min(limit, 25) : 10;

    // Calculate the number of documents to skip
    const skipDocuments = (pageStart - 1) * pageSize;

    const players = await this.operatorModel.aggregate([
      {
        $unwind: '$dfsSlatePlayers',
      },
      {
        $group: {
          _id: '$dfsSlatePlayers.playerId',
          details: { $first: '$dfsSlatePlayers' },
        },
      },
      {
        $replaceRoot: {
          newRoot: '$details',
        },
      },
      {
        $match: {
          filters,
        },
      },
      {
        $sort: {
          operatorPlayerName: 1, // 1 for ascending, -1 for descending
        },
      },
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
