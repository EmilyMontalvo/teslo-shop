'use client'
import { useCartStore } from '@/store'
import React, { useEffect, useState } from 'react'
import Image from "next/image";
import { QuantitySelector } from '@/components';
import Link from 'next/link';

export const ProductsInCart = () => {
    const productInCart = useCartStore(state => state.cart)
    const updatedProductQuantity = useCartStore(state => state.updateProductQuantity)
    const removeProduct = useCartStore(state => state.removeProduct)
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {

        setLoaded(true)

    }, [])


    if (!loaded) {
        return <p>Loading...</p>
    }

    return (
        productInCart.map(product => (
            <div key={`${product.slug}-${product.size}`} className="flex">
                <Image
                    src={`/products/${product.image}`}
                    width={150}
                    height={100}
                    alt={product.title}
                    className="mr-5 rounded mb-5"
                />
                <div>
                    <Link
                        className='cursor-pointer hover:underline'
                        href={`/product/${product.slug}`}>
                        {product.size} - {product.title}
                    </Link>

                    <p>{product.price}</p>
                    <QuantitySelector quantity={product.quantity} onQuantityChanged={quantity => updatedProductQuantity(product,quantity)} />
                    <button 
                    onClick={() => removeProduct(product)}
                    className="underline mb-5">Remover</button>
                </div>
            </div>
        ))
    )
}
