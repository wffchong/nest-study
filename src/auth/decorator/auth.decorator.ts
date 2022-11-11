import { applyDecorators, UseGuards } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'

export function Auth() {
    // 聚合装饰器
    return applyDecorators(UseGuards(AuthGuard('jwt')))
}
