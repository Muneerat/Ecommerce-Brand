import React from 'react'

export default function Layouts({
   children,
   className}) {
  return (
    <div className={` bg-primary-light dark:bg-black ${className}`}>
    <div className='max-w-screen-2xl mx-auto '>
     {children}
    </div>
    </div>
  )
}
