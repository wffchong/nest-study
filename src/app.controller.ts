import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common'
import { PrismaClient } from '@prisma/client'
import { AppService } from './app.service'
import CreateArticleDto from './dto/create.article.dto'
import { HdPipe } from './Hd.pipe'

@Controller()
export class AppController {
    prisma: PrismaClient
    constructor(private readonly appService: AppService) {
        this.prisma = new PrismaClient()
    }

    @Get(':id')
    getHello(@Param('id', ParseIntPipe) id: number) {
        return this.prisma.article.findUnique({
            where: {
                id
            }
        })
    }

    @Post('store')
    async add(@Body(HdPipe) dto: CreateArticleDto) {
        return this.prisma.article.create({
            data: {
                title: dto.title,
                content: dto.content
            }
        })
    }
}
