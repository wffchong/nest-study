import { Body, Controller, Get, Post } from '@nestjs/common'
import { AuthService } from './auth.service'
import { LoginDto } from './dto/login.dto'
import { RegisterDto } from './dto/register.dto'
import { Auth } from './decorator/auth.decorator'
// import { User } from './decorator/user.decorator'
// import { user as UserType } from '@prisma/client'

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
    @Auth()
    // 这样就可以对all接口进行身份验证了，如果token无效则会报401
    // all(@User() user: UserType) {
    //     return user
    // }
    all() {
        return this.auth.findAll()
    }
}
