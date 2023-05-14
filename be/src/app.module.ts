import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OperatorModule } from './operator/operator.module';
import { GameTypeModule } from './gameType/gameType.module';
import { PlayerModule } from './player/player.module';
import { SlateModule } from './slate/slate.module';

@Module({
  imports: [
    // Order is important here otherwise it will conflict with the operator route
    GameTypeModule,
    SlateModule,
    PlayerModule,
    OperatorModule,
    MongooseModule.forRoot('mongodb://localhost:27017/game-test'),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
