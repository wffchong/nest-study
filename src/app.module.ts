import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ConfigModule } from './config/config.module'
import { ArticleModule } from './article/article.module'

@Module({
    imports: [ConfigModule, ArticleModule],
    controllers: [AppController],
    providers: [AppService]
})
export class AppModule {}
