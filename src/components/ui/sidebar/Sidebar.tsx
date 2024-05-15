'use client'
import React from 'react'
import clsx from 'clsx'
import { IoCloseOutline, IoLogInOutline, IoLogOutOutline, IoPeopleOutline, IoPersonOutline, IoSearchOutline, IoShirtOutline, IoTicketOutline } from 'react-icons/io5';
import { SidebarItem } from '@/components/index';
import { useUIStore } from '@/store';

const sidebarItems = [
    {
        href: "/perfil",
        icon: <IoPersonOutline size={30} />,
        name: "Perfil"
    },
    {
        href: "/orders",
        icon: <IoTicketOutline size={30} />,
        name: "Orders"
    },
    {
        href: "/login",
        icon: <IoLogInOutline size={30} />,
        name: "LogIn"
    },
    {
        href: "/logOut",
        icon: <IoLogOutOutline size={30} />,
        name: "LogOut"
    },
]

const sidebarItemsAdministration = [
    {
        href: "/perfil",
        icon: <IoShirtOutline size={30} />,
        name: "Perfil"
    },
    {
        href: "/orders",
        icon: <IoTicketOutline size={30} />,
        name: "Orders"
    },
    {
        href: "/orders",
        icon: <IoPeopleOutline size={30} />,
        name: "Users"
    },
]


export const Sidebar = () => {

    const isSideMenuOpen = useUIStore(state => state.isSideMenuOpen);
    const closeMenu = useUIStore(state => state.closeSideMenu);

    return (
        <>
            {/* Manejo de estado global con Zustand */}
            {
                isSideMenuOpen && (
                    // Black bg 
                    <div
                        className='fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30'>
                    </div>
                )
            }

            {
                isSideMenuOpen && (
                    // Blur
                    <div
                        onClick={closeMenu}
                        className='fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm'>
                    </div>
                )
            }

            {/* Aquí se va a manejar el estado global de otra manera para que sea más manejable el navbar */}
            {/* Con clsx */}

            {/* SideMenu */}
            <nav
                className={
                    clsx(
                        'fixed p-5 right-0 top-0 w-[400px] h-screen bg-white z-20 shadow-2xl transform transition-all duration-300 ',
                        {'translate-x-full': !isSideMenuOpen} //! Agrega esta clase si el menu no está abierto (desaparece side menu)
                    )
                }>
                <IoCloseOutline size={40} className='absolute top-5 right-5 cursor-pointer'
                    onClick={() => closeMenu()} /> 

                {/* Input */}
                <div className='relative mt-14'>
                    <IoSearchOutline size={20} className='absolute top-2 left-2' />
                    <input type="text" placeholder='Search'
                        className='w-full bg-gray-50 rounded pl-10 py-1 pr-10 border-b-2 text-lg border-gray-200 focus:outline-none focus:border-blue-500' />
                </div>

                {/* Menú */}

                {
                    sidebarItems.map(item => (
                        <SidebarItem key={item.href} {...item} />
                    ))
                }

                {/* Line Separator */}
                <div className='w-full h-px bg-gray-200 my-10'></div>

                {/* Administration Menu */}
                {
                    sidebarItemsAdministration.map(item => (
                        <SidebarItem key={item.href} {...item} />
                    ))
                }
            </nav>
        </>
    )
}
