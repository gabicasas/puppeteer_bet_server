import { Injectable } from '@nestjs/common';
import { Bet } from '../model/bet.entity';
import { Market } from '../model/market.entity';
import { Option } from '../model/option.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';


@Injectable()
export class BetService {

    constructor(
                 @InjectRepository(Market) private readonly repoMarket: Repository<Market>,
                 @InjectRepository(Bet) private readonly repoBet: Repository<Bet>,
                 @InjectRepository(Option) private readonly repoOption: Repository<Option> ) { }


   public async saveOption(optionDto: any): Promise<Option> {
     return this.repoOption.save( optionDto as Option);
   }

   public async saveBet(betDto: any): Promise<Bet> {
    return this.repoBet.save( betDto as Bet);
  }

  public async saveMarket(marketDto: any): Promise<Market> {
    return this.repoMarket.save( marketDto as Market);
  }
}
