import { createParamDecorator, ExecutionContext } from '@nestjs/common'

export const User = createParamDecorator((data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest()
    // 返回request对象上的user
    return request.user
})
