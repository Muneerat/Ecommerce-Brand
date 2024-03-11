import React from 'react'

export default function Layouts({
   children,
   className}) {
  return (
    <div className={`max-w-screen-2xl mx-auto p-4 bg-primary-light ${className}`}>
     {children}
    </div>
  )
}
