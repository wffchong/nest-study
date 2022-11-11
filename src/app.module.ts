import { Module } from '@nestjs/common'
import { PrismaModule } from './prisma/prisma.module'
import { UploadModule } from './upload/upload.module'
@Module({
    imports: [PrismaModule, UploadModule]
})
export class AppModule {}
