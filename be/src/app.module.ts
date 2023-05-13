import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { OperatorModule } from './operator/operator.module';
import { GameTypeModule } from './gameType/gameType.module';
import { PlayerModule } from './player/player.module';

@Module({
  imports: [
    // Order is important here otherwise it will conflict with the operator route
    GameTypeModule,
    PlayerModule,
    OperatorModule,
    MongooseModule.forRoot('mongodb://localhost:27017/game-test'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
