import { Controller, Post, Body, Session } from '@nestjs/common';
import { BetService } from './bet.service';
import { Option } from 'src/model/option.entity';
import { partition } from 'rxjs';
import { Market } from 'src/model/market.entity';
import { Bet } from 'src/model/bet.entity';


@Controller('bet')
export class BetController {
    constructor(private readonly betService: BetService) { }


    @Post('/saveOption')
    async pushNewOption(@Body() body: Option, @Session() sess): Promise<any> {
       
        if (!sess.optionInUse) {
            let newMarket: Market = new Market();
            newMarket = await this.betService.saveMarket(newMarket);
            let newBet: Bet = new Bet();
            newBet.market = newMarket;
            newBet = await this.betService.saveBet(newBet);
            body.bet = newBet;
            const option: Option  = await this.betService.saveOption(body);
            sess.optionInUse = option;
            
        } else {
            /**
             * Si exise la url en esta apuesta (bet) hay qeu crear una nueva (bet) pq ya se han marcado todas 
             * las option posibles
             */
            const optionsUrl: Option[] = await this.betService.getBetURL(body.url, sess.optionInUse.bet);
            if (optionsUrl.length === 0) {
                body.bet = sess.optionInUse.bet;
                const option: Option  = await this.betService.saveOption(body);
                sess.optionInUse = option;
            } else {
                let newBet: Bet = new Bet();
                newBet.market = sess.optionInUse.market;
                newBet = await this.betService.saveBet(newBet);
                body.bet = newBet;
                const option: Option  = await this.betService.saveOption(body);
                sess.optionInUse = option;
            }
           
        }
       
      
        return sess.optionInUse;

    }

    @Post('/saveBet')
    async pushNewBet(@Body() body): Promise<any> {
        return await this.betService.saveBet(body);
    }

    @Post('/saveMarket')
    async pushNewMarket(@Body() body): Promise<any> {
        return await this.betService.saveMarket(body);
    }
}
