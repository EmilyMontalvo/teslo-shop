'use server'
import prisma from "@/lib/prisma"

export const getStockBySlug = async (slug: string): Promise<number> => {
    try {
        const slock = await prisma.product.findFirst(
            {
                where: {
                    slug: slug
                },
                select: {inStock: true}
            }

        )

        return slock?.inStock ?? 0;

    } catch (error) {
        throw Error('Error al obtener producto por slug')
    }
}