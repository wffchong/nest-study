import { Controller, Get } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'

@Controller()
export class AppController {
    constructor(private readonly config: ConfigService) {}

    @Get()
    getHello(): string {
        // return this.config.get('APP_NAME')
        // return process.env.NODE_ENV
        return this.config.get('upload.allowType')
    }
}
