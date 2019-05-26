import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BetController } from './bet/bet.controller';
import { BetService } from './bet/bet.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Bet } from './model/bet.entity';
import { Market } from './model/market.entity';
import { Option } from './model/option.entity';
import { PersistenceModule } from './persistence/persistence.module';


@Module({
  imports: [
    TypeOrmModule.forRoot(),

    PersistenceModule,
    
  ],
  controllers: [AppController, BetController],
  providers: [AppService, BetService],
})
export class AppModule {}
