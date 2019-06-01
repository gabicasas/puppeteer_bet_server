import { Controller, Post, Body } from '@nestjs/common';
import { BetService } from './bet.service';

@Controller('bet')
export class BetController {
    constructor(private readonly betService: BetService) { }


    @Post('/saveOption')
    async pushNewOption(@Body() body): Promise<any> {
        return await this.betService.saveOption(body);
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
