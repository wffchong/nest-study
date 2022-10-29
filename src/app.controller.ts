import { Controller, Get } from '@nestjs/common'
import { ConfigService } from './config/config.service'

@Controller()
export class AppController {
    // constructor(private readonly appService: AppService) {}
    constructor(private readonly configService: ConfigService) {}

    @Get()
    getHello(): any {
        return this.configService.get()
    }
}
