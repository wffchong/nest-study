import { ValidationError, ValidationPipe } from '@nestjs/common'

export class Validate extends ValidationPipe {
    protected mapChildrenToValidationErrors(error: ValidationError, parentPath?: string): ValidationError[] {
        const errors = super.mapChildrenToValidationErrors(error, parentPath)

        // 这样经过处理就可以明确的知道那些字段是错误的了
        errors.map((error) => {
            for (const key in error.constraints) {
                // 把错误字段拼接进去
                error.constraints[key] = error.property + '-' + error.constraints[key]
            }
        })
        return errors
    }
}
