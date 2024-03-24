import React from 'react'

export default function FormError({error,className,...props}) {
  return (
   
    <>
        {error && 
        <div 
          className={`text-sm text-red-600 block mt-0.5`}
          role='alert'
          {...props}
          >
            {error}
          </div>}
    </>
  )
}
