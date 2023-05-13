import { Module } from '@nestjs/common';
import { GameTypeController } from './gameType.controller';
import { GameTypeService } from './gameType.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Operator, OperatorSchema } from '../entities/operator.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Operator.name,
        schema: OperatorSchema,
      },
    ]),
  ],
  controllers: [GameTypeController],
  providers: [GameTypeService],
})
export class GameTypeModule {}
