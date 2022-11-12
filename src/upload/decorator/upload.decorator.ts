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

// 封装上传图片
export function uploadImage(field = 'file') {
    return upload(field, {
        limits: { fieldSize: Math.pow(1024, 2) * 3 },
        fileFilter: fileFilter(['image'])
    })
}

// 封装上传markdown
export function uploadMarkdown(field = 'file') {
    return upload(field, {
        limits: { fieldSize: Math.pow(1024, 2) * 3 },
        fileFilter: fileFilter(['markdown'])
    })
}

// 封装上传文件
export function uploadFile(field = 'file', type: string[] = ['image']) {
    return upload(field, {
        limits: { fieldSize: Math.pow(1024, 2) * 3 },
        fileFilter: fileFilter(type)
    })
}
