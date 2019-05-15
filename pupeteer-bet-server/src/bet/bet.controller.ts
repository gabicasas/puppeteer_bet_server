import { Controller } from '@nestjs/common';
import { BetService } from './bet.service';

@Controller('bet')
export class BetController {
    constructor(private readonly betService: BetService) { }
}
