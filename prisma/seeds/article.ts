import { PrismaClient } from '@prisma/client'
import { Random } from 'mockjs'
import { create } from '../helper'
import _ from 'lodash'

export const article = () => {
    create(30, async (prisma: PrismaClient) => {
        await prisma.article.create({
            data: {
                title: Random.ctitle(),
                content: Random.cparagraph(10, 50),
                thumb: Random.image('300x300'),
                categoryId: _.random(1, 10)
            }
        })
    })
}
