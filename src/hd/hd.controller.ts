import { Controller, Get, Inject } from '@nestjs/common'
import { TestService } from 'src/test/test.service'

@Controller('hd')
export class HdController {
    constructor(private readonly test: TestService, @Inject('test') private readonly testValue) {}
    @Get()
    show() {
        // return 'hd show method'
        // return this.test.get()
        return this.test.get() + this.testValue
    }
}
