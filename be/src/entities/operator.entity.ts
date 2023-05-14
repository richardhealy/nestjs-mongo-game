import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Operator extends Document {
  @Prop()
  season: number;

  @Prop()
  seasonType: number;

  @Prop()
  week: number;

  @Prop({ index: true, lowercase: true })
  operatorGameType: string;

  @Prop({ index: true, lowercase: true })
  operator: string;

  @Prop({ index: true, lowercase: true })
  operatorName: string;

  @Prop()
  isMultiDaySlate: boolean;

  @Prop()
  numberOfGames: number;

  @Prop()
  operatorDay: string;

  @Prop()
  operatorSlateId: number;

  @Prop()
  operatorStartTime: string;

  @Prop()
  removedByOperator: boolean;

  @Prop()
  salaryCap: number;
}

export const OperatorSchema = SchemaFactory.createForClass(Operator);
