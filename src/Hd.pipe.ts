import { PipeTransform, Injectable, ArgumentMetadata, HttpException, HttpStatus } from '@nestjs/common'
import { plainToInstance } from 'class-transformer'
import { validate } from 'class-validator'

@Injectable()
export class HdPipe implements PipeTransform {
    async transform(value: any, metadata: ArgumentMetadata) {
        const object = plainToInstance(metadata.metatype, value)
        const errors = await validate(object)

        // 大于0代表有错误
        if (errors.length) {
            // 拿到所有错误组装好
            const messages = errors.map((error) => {
                return {
                    name: error.property,
                    messages: Object.values(error.constraints).map((v) => v)
                }
            })
            // 抛出
            throw new HttpException(messages, HttpStatus.UNPROCESSABLE_ENTITY)
        }

        // 代表验证通过没出错
        return value
    }
}
