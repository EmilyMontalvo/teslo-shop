'use client'
import React, { useState } from 'react'
import { IoAddCircleOutline, IoRemoveCircleOutline } from 'react-icons/io5'

interface Props {
    quantity: number
    onQuantityChanged: (quantity:number)=>void
}

export const QuantitySelector = ({ quantity, onQuantityChanged }: Props) => {

    //const [count, setCount] = useState(quantity)

    const onValueChange = (value: number) => {
        if (quantity + value < 1) return;
        onQuantityChanged(quantity + value)
    }

    return (
        <>
        <h3 className='font-bold mb-4'>Cantidad</h3>
        <div className='flex'>
            
            <button
                onClick={() => onValueChange(-1)}>
                <IoRemoveCircleOutline size={30} />
            </button>

            <span className='w-20 mx-3 py-2 rounded-xl bg-gray-200 text-center'>{quantity}</span>

            <button
                onClick={() => onValueChange(1)}>
                <IoAddCircleOutline size={30} />
            </button>
        </div>
        </>
    )
}
