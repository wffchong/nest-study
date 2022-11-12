import {
    Controller,
    MethodNotAllowedException,
    Post,
    UnsupportedMediaTypeException,
    UploadedFile,
    UseInterceptors
} from '@nestjs/common'
import { FileInterceptor } from '@nestjs/platform-express'
import { TransformInterceptor } from 'src/TransformInterceptor'
import { upload } from './decorator/upload.decorator'

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
    @upload('file', {
        limits: {
            fileSize: Math.pow(1024, 2) * 2
        },
        fileFilter(req: any, file: Express.Multer.File, callback: (error: Error | null, acceptFile: boolean) => void) {
            if (!file.mimetype.includes('image')) {
                callback(new UnsupportedMediaTypeException('文件类型错误'), false)
            } else {
                callback(null, true)
            }
        }
    })
    uploadImg(@UploadedFile() file: Express.Multer.File) {
        return file
    }
}
