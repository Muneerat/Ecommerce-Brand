import React from 'react'

export default function Button({
               text, 
               className,
               children,
                ...props
              }) {
  return (
    <div>
         <button 
            className={`px-6 py-2 rounded-md inline-flex items-center justify-center hover:bg-primary transition-all ease-in-out duration-400  gap-2 text-xl my-4 hover:-translate-y-1 shadow-lg ${className}`}
           { ...props}>
        {text}
        {children}
    </button>
    </div>
   
  )
}
