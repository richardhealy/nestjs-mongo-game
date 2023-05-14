import { Module } from '@nestjs/common';
import { SlateController } from './slate.controller';
import { SlateService } from './slate.service';
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
  controllers: [SlateController],
  providers: [SlateService],
})
export class SlateModule {}
