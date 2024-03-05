import React from 'react'

export default function Tabs({text}) {
  return (
    <div className='flex'>
        <div 
          className='h-12 w-4 bg-primary rounded-md '>
          </div>
         <p className='p-1 flex items-center'>{text}</p>
    </div>
  )
}
