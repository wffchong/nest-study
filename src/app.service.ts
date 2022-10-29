import { Inject, Injectable } from '@nestjs/common'

@Injectable()
export class AppService {
    constructor(
        @Inject('ConfigService')
        private configService: { url: string }
    ) {}
    get() {
        return 'AppService get method ' + this.configService.url
    }
}
