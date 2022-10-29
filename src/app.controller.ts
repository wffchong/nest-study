import { Controller, Get, Inject } from '@nestjs/common'
import { AppService } from './app.service'
import { DbService } from './db.service'

@Controller()
export class AppController {
    constructor(private readonly appService: AppService, @Inject('DbService') private readonly dbService: DbService) {}

    @Get()
    getHello(): string {
        return this.dbService.connect()
    }
}
