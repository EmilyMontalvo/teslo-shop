'use client'
import { QuantitySelector, SizeSelector } from '@/components'
import { Product } from '@/interfaces'
import React, { useState } from 'react'
import { Size } from '../../../../../interfaces/product.interface';

interface Props {
    product: Product;

}

export const AddToCart = ({ product }: Props) => {

    const [size, setSize] = useState<Size|undefined>()
    return (
        <>
            {/* Selector de Tallas */}
            <SizeSelector selectedSize={size} availableSizes={product.sizes} onSizeChange={setSize} />

            {/* Selector de Cantidad */}
            <QuantitySelector quantity={2} />


        </>
    )
}
