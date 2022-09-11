import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'

const configService = {
    provide: 'config',
    useValue: {
        name: 'testName',
        author: 'testAuthor'
    }
}

@Module({
    imports: [],
    controllers: [AppController],
    providers: [AppService, configService]
})
export class AppModule {}
