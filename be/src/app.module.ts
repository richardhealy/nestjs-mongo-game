import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OperatorModule } from './operator/operator.module';
import { GameTypeModule } from './gameType/gameType.module';
import { PlayerModule } from './player/player.module';
import { SlateModule } from './slate/slate.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    // Order is important here otherwise it
    // will conflict with the operator route
    GameTypeModule,
    SlateModule,
    PlayerModule,
    OperatorModule,
    MongooseModule.forRoot(process.env.MONGO_URI),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
