import React from 'react'

export default function Button({text, className}) {
  return (
    <div>
         <button className=' rounded-md text-primary bg-white p-2 my-3'>
        {text}
    </button>
    </div>
   
  )
}
