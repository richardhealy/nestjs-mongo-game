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
}

export const OperatorSchema = SchemaFactory.createForClass(Operator);
