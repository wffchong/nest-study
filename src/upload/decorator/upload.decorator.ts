import { applyDecorators, UnsupportedMediaTypeException, UseInterceptors } from '@nestjs/common'
import { FileInterceptor } from '@nestjs/platform-express'
import { MulterOptions } from '@nestjs/platform-express/multer/interfaces/multer-options.interface'

export function fileFilter(type: string[]) {
    return (req: any, file: Express.Multer.File, callback: (error: Error | null, acceptFile: boolean) => void) => {
        const check = type.some((t) => file.mimetype.includes(t))
        if (!check) {
            callback(new UnsupportedMediaTypeException('文件类型错误'), false)
        } else {
            callback(null, true)
        }
    }
}

export function upload(field = 'file', options: MulterOptions) {
    return applyDecorators(UseInterceptors(FileInterceptor(field, options)))
}
