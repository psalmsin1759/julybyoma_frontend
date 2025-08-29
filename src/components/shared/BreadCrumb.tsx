import React from 'react'

interface Props{
  title: string;
  subtitle?: string;
}
export default function BreadCrumb({title, subtitle}: Props) {
  return (
    <div className='flex gap-2 border-t mt-2 border-gray-300 p-2 text-gray-400'>
      <span >Home</span><span>/</span><span>{title}</span> {subtitle && <><span>/</span><span className='text-black'>{subtitle}</span></>}
    </div>
  )
}
