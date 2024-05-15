'use client'
import React, { useState } from 'react'
import { IoAddCircleOutline, IoRemoveCircleOutline } from 'react-icons/io5'

interface Props {
    quantity: number
}

export const QuantitySelector = ({ quantity }: Props) => {

    const [count, setCount] = useState(quantity)

    const onQuantityChange = (value: number) => {
        if (count + value < 1) return;
        setCount(count + value)
    }

    return (
        <>
        <h3 className='font-bold mb-4'>Cantidad</h3>
        <div className='flex'>
            
            <button
                onClick={() => onQuantityChange(-1)}>
                <IoRemoveCircleOutline size={30} />
            </button>

            <span className='w-20 mx-3 py-2 rounded-xl bg-gray-200 text-center'>{count}</span>

            <button
                onClick={() => onQuantityChange(1)}>
                <IoAddCircleOutline size={30} />
            </button>
        </div>
        </>
    )
}
