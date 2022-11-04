import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { Validate } from './validate'
import { ValidateExceptionFilter } from './validate-exception.filter'

async function bootstrap() {
    const app = await NestFactory.create(AppModule)
    // 使用系统管道，Dto实现验证
    // 全局管道
    // app.useGlobalPipes(new ValidationPipe())
    // 使用自定义的
    app.useGlobalPipes(new Validate())
    // 使用过滤器
    app.useGlobalFilters(new ValidateExceptionFilter())
    await app.listen(3000)
}
bootstrap()
