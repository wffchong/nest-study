import { PrismaService } from './../prisma/prisma.service'
import { ConfigService } from '@nestjs/config'
import { ExtractJwt, Strategy } from 'passport-jwt'
import { PassportStrategy } from '@nestjs/passport'
import { Injectable } from '@nestjs/common'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
    constructor(configService: ConfigService, private prisma: PrismaService) {
        super({
            //解析用户提交的header中的Bearer Token数据
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            //加密码的 secret
            secretOrKey: configService.get('TOKEN_SECRET')
        })
    }

    //只要token经过上面验证有效 就会自动调下面的方法
    async validate({ sub: id }) {
        // 查询表，查到这个用户的话 就会把 user 放到 Request对象里面，类似一个全局对象，
        // 这样就可以在其他地方使用这个对象了
        return this.prisma.user.findUnique({
            where: { id }
        })
    }
}
