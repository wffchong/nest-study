import { BadRequestException, Injectable } from '@nestjs/common'
import md5 from 'md5'
import { PrismaService } from 'src/prisma/prisma.service'
import LoginDto from './dto/login.dto'
import RegisterDto from './dto/register.dto'

@Injectable()
export class AuthService {
    constructor(private readonly prisma: PrismaService) {}
    async register(dto: RegisterDto) {
        const password = md5(dto.password)
        const user = await this.prisma.user.create({
            data: {
                name: dto.name,
                password
            }
        })

        delete user.password
        return user
    }

    async login(dto: LoginDto) {
        const user = await this.prisma.user.findFirst({
            where: {
                name: dto.name
            }
        })
        //校对密码
        if (md5(user.password) !== md5(dto.password)) {
            throw new BadRequestException('密码输入错误')
        }

        delete user.password
        return user
    }
}
