'use client'
import { titleFont } from '@/config/fonts'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { IoCartOutline, IoSearchOutline } from 'react-icons/io5'
import { useCartStore, useUIStore } from '@/store'

export const TopMenu = () => {

    const [loaded, setLoaded] = useState(false)
    const openMenu = useUIStore(state => state.openSideMenu);
    const totalItemsInCart = useCartStore(state => state.getTotalItems())

useEffect(() => {
  
setLoaded(true)
  
}, [])



    return (
        <nav className='flex px-5 justify-between items-center w-full'>
            {/* Logo */}
            <div>
                <Link href={'/'}>
                    <span className={`${titleFont.className} antialiased font-bold`}>Teslo</span>
                    <span> | Shop</span>
                </Link>
            </div>
            {/* Center Menu */}
            <div className='hidden sm:block'>
                <Link
                    className='m-2 rounded-md transition-all hover:bg-gray-100'
                    href={'/gender/men'}>
                    Hombres
                </Link>
                <Link
                    className='m-2 rounded-md transition-all hover:bg-gray-100'
                    href={'/gender/women'}>
                    Mujeres
                </Link>
                <Link
                    className='m-2 rounded-md transition-all hover:bg-gray-100'
                    href={'/gender/kid'}>
                    Niños
                </Link>
            </div>
            {/* Search, cart, menu */}
            <div className='flex items-center'>

                {/* Search icon */}
                <Link href={'/search'} className='mx-2'>
                    <IoSearchOutline className='w-5 h-5' />
                </Link>

                {/* Cart icon */}
                <Link href={'/cart'}>
                    <div className='relative mx-2'>
                        {
                            loaded && totalItemsInCart > 0 && (
                                <span className='absolute text-xs rounded-full px-1 font-bold -top-2 -right-2 bg-blue-700 text-white'>
                                    {totalItemsInCart}
                                </span>
                            )
                        }

                        <IoCartOutline className='w-5 h-5' />
                    </div>

                </Link>

                {/* Manejo el estado con Zustand */}
                <button
                    onClick={() => openMenu()}
                    className='m-2 p-2 rounded-md transition-all hover:bg-gray-100' >
                    Menú
                </button>

            </div>
        </nav>
    )
}
