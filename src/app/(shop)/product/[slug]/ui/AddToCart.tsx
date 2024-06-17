'use client'
import { QuantitySelector, SizeSelector } from '@/components'
import { Product } from '@/interfaces'
import React, { useState } from 'react'
import type { CartProduct, Size } from '@/interfaces/product.interface';
import { useCartStore } from '@/store';

interface Props {
    product: Product;

}

export const AddToCart = ({ product }: Props) => {

    const addProductToCart = useCartStore(state => state.addProductToCart)
    const [size, setSize] = useState<Size | undefined>()
    const [quantity, setQuantity] = useState<number>(1)
    const [posted, setPosted] = useState(false)


    const addToCart = () => {
        setPosted(true)
        if (!size) return null;

        const cartProduct : CartProduct = {
            id: product.id,
            slug: product.slug,
            title: product.title,
            price: product.price,
            quantity: quantity,
            size: size,
            description: product.description,
            image: product.images[0]
        }

        //Añadir producto al carrito de estado global
        addProductToCart(cartProduct)
        setPosted(false)
        setQuantity(1)
        setSize(undefined)

    }


    return (
        <>


            {/* Selector de Tallas */}
            <SizeSelector selectedSize={size} availableSizes={product.sizes} onSizeChange={setSize} />


            {/* Selector de Cantidad */}
            <QuantitySelector quantity={quantity} onQuantityChanged={setQuantity} />

            {/* Error message */}
            {
                posted && !size && (

                    <p className='mt-5 text-red-500 text-xs'>Debe de seleccionar una talla*</p>

                )
            }

            {/* Button */}
            <button
                onClick={addToCart}
                className="btn-primary my-5">Agregar al Carrito
            </button>
            

        </>
    )
}
