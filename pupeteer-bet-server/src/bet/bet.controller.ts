import { Controller, Post, Body } from '@nestjs/common';
import { BetService } from './bet.service';

@Controller('bet')
export class BetController {
    constructor(private readonly betService: BetService) { }


    @Post('/saveOption')
    async pushNewMarkets(@Body() body): Promise<any> {
        return await this.betService.saveOption(body);
    }
}
