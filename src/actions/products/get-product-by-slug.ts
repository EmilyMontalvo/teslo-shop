'use server'
import prisma from "@/lib/prisma"

export const getProductBySlug = async (slug: string) => {
    try {

        const product = await prisma.product.findFirst(
            {
                include: {
                    ProductImage: {
                        select: {
                            url: true
                        }
                    }
                },
                where: {
                    slug: slug
                }
            }

        )

        if (!product) return null;
        const {ProductImage, ...rest} = product

        return {
            ...rest,
            images: product.ProductImage.map(image => image.url)
        }

    } catch (error) {
        throw Error('Error al obtener producto por slug')
    }
}