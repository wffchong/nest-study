import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const create = (count: number, callback: (prisma: PrismaClient) => void) => {
    for (let i = 0; i < count; i++) {
        callback(prisma)
    }
}
