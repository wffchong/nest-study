import { IsNotEmpty, Validate } from 'class-validator'
import { IsConfirmed } from 'src/rules/is-confirmed.rule'
import { IsNotExistsRule } from 'src/rules/is-not-exists.rule'

export default class RegisterDto {
    @IsNotEmpty({ message: '用户名不能为空' })
    @IsNotExistsRule('user', { message: '用户名已经存在' })
    name: string

    // 使用装饰器验证
    @IsNotEmpty({ message: '密码不能为空' })
    // 使用类验证
    @Validate(IsConfirmed, { message: '密码和确认密码不一致' })
    password: string
}
