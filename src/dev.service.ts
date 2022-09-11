import { Injectable } from '@nestjs/common'

@Injectable()
export class DevService {
    getHello() {
        return 'devService Hello development'
    }
}
