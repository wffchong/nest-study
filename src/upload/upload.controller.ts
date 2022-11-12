import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common'
import { FileInterceptor } from '@nestjs/platform-express'
import { TransformInterceptor } from 'src/TransformInterceptor'
import { fileFilter, upload, uploadImage, uploadMarkdown } from './decorator/upload.decorator'

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
    @uploadImage()
    uploadImg(@UploadedFile() file: Express.Multer.File) {
        return file
    }

    @Post('markdown')
    @uploadMarkdown()
    // 上传markdown
    uploadMarkdown(@UploadedFile() file: Express.Multer.File) {
        return file
    }
}
