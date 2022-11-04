import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { AuthModule } from './auth/auth.module'
import config from './config'
@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            load: [...config]
        }),
        AuthModule
    ],
    controllers: [AppController],
    providers: [AppService]
})
export class AppModule {}
