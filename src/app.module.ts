import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ConfigService } from './config.service'
import { DbService } from './db.service'
import { TestModule } from './test/test.module'
import { HdModule } from './hd/hd.module'

@Module({
    imports: [TestModule, HdModule],
    controllers: [AppController],
    providers: [
        AppService,
        ConfigService,
        {
            provide: 'DbService',
            inject: ['ConfigService'],
            // 这里会自动注入到工厂函数里面
            useFactory: async (configService) => {
                return new Promise((r) => {
                    setTimeout(() => {
                        r('异步服务')
                    }, 3000)
                })
                // return new DbService(configService)
            }
        }
    ]
})
export class AppModule {}
