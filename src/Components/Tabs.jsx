import React from 'react'

export default function Tabs({text}) {
  return (
    <div className='flex mt-10 m-2 hover:translate-y-2 duration-300 '>
        <div 
          className='h-12 w-4 bg-primary rounded-md '>
          </div>
         <p className='p-1 pl-3 flex items-center text-primary'>{text}</p>
    </div>
  )
}
