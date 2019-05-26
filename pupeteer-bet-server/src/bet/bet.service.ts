import { Injectable } from '@nestjs/common';
import { Bet } from 'src/model/bet.entity';
import { Market } from 'src/model/market.entity';
import { Option } from 'src/model/option.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';


@Injectable()
export class BetService {

    constructor(
                  ) { }


   public async saveOption(optionDto: any) {
    // this.repoOption.save( optionDto as Option);
   }
}
