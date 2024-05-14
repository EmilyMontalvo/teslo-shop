import { titleFont } from '@/config/fonts';
import React from 'react'
import { RiH3 } from 'react-icons/ri';

interface Props {
  title:string;
  subtitle?:string;
  className?: string;
}

export const Title = ({title, subtitle, className}:Props) => {
  return (
    <div className={`${className} mt-3`} >
      <h1 className={`${titleFont.className} antialiased font-semibold text-4xl my-5`}> {title}</h1>
      {subtitle && ( <h3 className='text-xl mb-5'>{subtitle}</h3>)}
    </div>
  )
}
