import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { DevService } from './dev.service'
import path from 'path'
import { config } from 'dotenv'

// 读取 .env 到 process.env 环境变量中
config({ path: path.join(__dirname, '../.env') })
console.log(process.env.NODE_ENV)

const appService = {
    provide: AppService,
    useClass: process.env.NODE_ENV === 'development' ? DevService : AppService
}

@Module({
    imports: [],
    controllers: [AppController],
    providers: [appService]
})
export class AppModule {}
