'use client'
import { QuantitySelector, SizeSelector } from '@/components'
import { Product } from '@/interfaces'
import React, { useState } from 'react'
import { Size } from '../../../../../interfaces/product.interface';

interface Props {
    product: Product;

}

export const AddToCart = ({ product }: Props) => {

    const [size, setSize] = useState<Size | undefined>()
    const [quantity, setQuantity] = useState<number>(1)
    const [posted, setPosted] = useState(false)


    const addToCart = () => {
        setPosted(true)
        if (!size) return null;

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
