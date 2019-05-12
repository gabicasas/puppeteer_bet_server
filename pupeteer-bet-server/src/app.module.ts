import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BetController } from './bet/bet.controller';



@Module({
  imports: [],
  controllers: [AppController, BetController],
  providers: [AppService],
})
export class AppModule {}
