import { Inject, Injectable } from '@nestjs/common'

@Injectable()
export class AppService {
    constructor(@Inject('config') private config: any) {}

    findOne() {
        return 'findOne' + this.config.name
    }
}
