import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { JwtModule } from '@nestjs/jwt'
import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'
import { JwtStrategy } from './jwt.strategy'

@Module({
    imports: [
        AuthModule,
        ConfigModule.forRoot({
            isGlobal: true
        }),
        JwtModule.registerAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: (config: ConfigService) => {
                return {
                    //设置加密使用的 secret
                    secret: config.get('TOKEN_SECRET'),
                    //过期时间
                    signOptions: { expiresIn: '100d' }
                }
            }
        })
    ],
    controllers: [AuthController],
    // 把jwt策略 注册给提供者
    providers: [AuthService, JwtStrategy]
})
export class AuthModule {}
