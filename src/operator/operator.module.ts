import { Module } from '@nestjs/common';
import { OperatorController } from './operator.controller';
import { OperatorService } from './operator.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Operator, OperatorSchema } from 'src/entities/operator.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Operator.name,
        schema: OperatorSchema,
      },
    ]),
  ],
  controllers: [OperatorController],
  providers: [OperatorService],
})
export class OperatorModule {}
