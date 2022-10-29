import { Controller, Get } from '@nestjs/common'
import { ConfigService } from 'src/config/config.service'

@Controller('article')
export class ArticleController {
    constructor(private readonly configService: ConfigService) {}
    @Get()
    index() {
        return 'index article ' + this.configService.get('app.name')
    }
}
