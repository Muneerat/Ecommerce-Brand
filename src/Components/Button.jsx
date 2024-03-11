import React from 'react'

export default function Button({
               text, 
               className,
                ...props
              }) {
  return (
    <div>
         <button 
            className={`rounded-md p-2 my-3 ${className}`}
           { ...props}>
        {text}
    </button>
    </div>
   
  )
}
