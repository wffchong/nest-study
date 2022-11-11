import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { AuthService } from './auth.service'
import { LoginDto } from './dto/login.dto'
import { RegisterDto } from './dto/register.dto'
import { Request } from 'express'

@Controller('auth')
export class AuthController {
    constructor(private readonly auth: AuthService) {}
    @Post('register')
    register(@Body() dto: RegisterDto) {
        return this.auth.register(dto)
    }

    @Post('login')
    login(@Body() dto: LoginDto) {
        return this.auth.login(dto)
    }

    @Get('all')
    // 使用方法装饰器对jwt策略验证
    @UseGuards(AuthGuard('jwt'))
    // 这样就可以对all接口进行身份验证了，如果token无效则会报401
    all(@Req() req: Request) {
        console.log(req.user)
        return req.user
    }
}
