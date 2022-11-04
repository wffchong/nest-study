import { ValidatorConstraint, ValidatorConstraintInterface, ValidationArguments } from 'class-validator'

@ValidatorConstraint()
export class IsConfirmed implements ValidatorConstraintInterface {
    // value代表传过来的值，这里指密码,args指这次请求传过来的值
    validate(value: string, args: ValidationArguments) {
        return value === args.object[args.property + '_confirmed']
    }

    defaultMessage(args: ValidationArguments) {
        return '比对失败'
    }
}
