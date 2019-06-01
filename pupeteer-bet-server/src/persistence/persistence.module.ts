import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Market } from '../model/market.entity';
import { Bet } from '../model/bet.entity';
import { Option } from '../model/option.entity';

@Module({imports: [
   
    TypeOrmModule.forFeature([Market, Bet, Option]),
   
    
  ]})
export class PersistenceModule {}
