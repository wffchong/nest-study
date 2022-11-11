import { Controller, Post, UseInterceptors } from '@nestjs/common'
import { TransformInterceptor } from 'src/TransformInterceptor'

@Controller('upload')
// 使用拦截器
@UseInterceptors(new TransformInterceptor())
export class UploadController {
    @Post('image')
    upload() {
        return '123'
    }
}
