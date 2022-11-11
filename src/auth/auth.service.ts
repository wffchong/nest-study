import { BadRequestException, Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'
import { RegisterDto } from './dto/register.dto'
import { hash, verify } from 'argon2'
import { LoginDto } from './dto/login.dto'
@Injectable()
export class AuthService {
    constructor(private readonly prisma: PrismaService) {}

    async register(dto: RegisterDto) {
        const user = this.prisma.user.create({
            data: {
                name: dto.name,
                password: await hash(dto.password)
            }
        })
        return user
    }

    async login(dto: LoginDto) {
        const user = await this.prisma.user.findUnique({
            where: {
                name: dto.name
            }
        })

        if (!(await verify(user.password, dto.password))) {
            throw new BadRequestException('密码输入错误')
        }

        return user
    }
}
