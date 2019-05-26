import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Market } from 'src/model/market.entity';
import { Bet } from 'src/model/bet.entity';
import { Option } from 'src/model/option.entity';

@Module({imports: [
   
    TypeOrmModule.forFeature([Market, Bet, Option]),
   
    
  ]})
export class PersistenceModule {}
