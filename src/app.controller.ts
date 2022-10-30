import { Controller, Get, Inject } from '@nestjs/common'
import { ConfigService, ConfigType } from '@nestjs/config'
import databaseConfig from './config/database.config'

@Controller()
export class AppController {
    constructor(
        private readonly config: ConfigService,
        @Inject(databaseConfig.KEY)
        private database: ConfigType<typeof databaseConfig>
    ) {}

    @Get()
    getHello(): string {
        // return this.config.get('APP_NAME')
        // return process.env.NODE_ENV
        // return this.config.get('upload.allowType')
        return this.database.host
    }
}
