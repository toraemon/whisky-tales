import { prisma } from '../../prisma/client';

export const getAllWhiskies = async () => {
    return await prisma.whisky.findMany();
}