import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BetController } from './bet/bet.controller';
import { BetService } from './bet/bet.service';

import { TypeOrmModule } from '@nestjs/typeorm';



@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'mysql',
      database: 'testBet',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
  ],
  controllers: [AppController, BetController],
  providers: [AppService, BetService],
})
export class AppModule {}
