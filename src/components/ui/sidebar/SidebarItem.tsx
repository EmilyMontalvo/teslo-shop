import { strict } from 'assert'
import Link from 'next/link'
import React, { ReactElement } from 'react'

interface Props {
    href: string
    icon: ReactElement
    name: string
}

export const SidebarItem = ({ href, icon, name }: Props) => {
    return (
        <>
            <Link
                href={href}
                className='flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all'>
                {icon}
                <span className='ml-3 text-lg'>{name}</span>
            </Link>
        </>

    )
}
