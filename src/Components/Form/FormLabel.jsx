import React from 'react'

export default function FormLabel({
    isRequired=true,
    children,
    ...props
}) {
  return (
    <label 
      {...props}
      className={`text-sm font-medium flex justify-start ${isRequired ? 'after:content-['*'] after:text-danger-600' : ''}`}>
        {children}
      </label>
  )
}
