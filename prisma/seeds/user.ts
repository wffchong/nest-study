import { PrismaClient } from '@prisma/client'
import { Random } from 'mockjs'
import { create } from '../helper'

export const user = () => {
    create(30, async (prisma: PrismaClient) => {
        await prisma.user.create({
            data: {
                email: Random.string(),
                password: 'wangfufan',
                github: Random.url(),
                avatar: Random.image('300x300')
            }
        })
    })
}
