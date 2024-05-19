import React from 'react'
import type { Size } from '@/interfaces';
import clsx from 'clsx';

interface Props{
    selectedSize?: Size;
    availableSizes: Size[];
    onSizeChange: (size:Size) => void;
}

export const SizeSelector = ({selectedSize, availableSizes, onSizeChange}:Props) => {
  return (
    <div className='my-5'>
        <h3 className='font-bold mb-4'>Tallas disponibles</h3>
        {/* Available sizes */}
        <div className='flex'>
            {
                availableSizes.map(size => (
                    <button key={size} onClick={() => onSizeChange(size)} className={clsx('mx-2 hover:underline text-lg', {'underline': size === selectedSize})}>{size}</button>
                ))

            }
        </div>

    </div>
  )
}
