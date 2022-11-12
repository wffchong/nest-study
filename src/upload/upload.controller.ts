import { Controller, MethodNotAllowedException, Post, UploadedFile, UseInterceptors } from '@nestjs/common'
import { FileInterceptor } from '@nestjs/platform-express'
import { TransformInterceptor } from 'src/TransformInterceptor'

@Controller('upload')
// 使用拦截器
@UseInterceptors(new TransformInterceptor())
export class UploadController {
    @Post()
    // 上传文件
    @UseInterceptors(FileInterceptor('file'))
    uploadFile(@UploadedFile() file: Express.Multer.File) {
        console.log(file)
        return file
    }

    @Post('image')
    // 上传图片
    @UseInterceptors(
        FileInterceptor('file', {
            limits: {
                fileSize: Math.pow(1024, 2) * 2 // 2 M
            },
            fileFilter(
                req: any,
                file: Express.Multer.File,
                callback: (error: Error | null, acceptFile: boolean) => void
            ): void {
                if (!file.mimetype.includes('image')) {
                    callback(new MethodNotAllowedException('文件类型错误'), false)
                } else {
                    callback(null, true)
                }
            }
        })
    )
    uploadImg(@UploadedFile() file: Express.Multer.File) {
        return file
    }
}
