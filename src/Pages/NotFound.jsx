import React from 'react'

export default function NotFound() {
  return (
    <div>
        <div className='flex flex-col justify-center m-auto items-center h-[530px]'>
            <h1 className='text-9xl font-semibold text-primary'>404</h1>
            <h2 className='font-bold text-3xl p-2'>Oops! Page not found</h2>
            <p>The page you are looking for does not exist</p>
            <button className='bg-primary hover:bg-primary/70 my-5 text-white font-bold py-2 px-4 rounded-lg transition ease-in-out duration-200 hover:text-[#fff] hover:bg-[#519364] hover:border-[#519364]'>Back to Home</button>
        </div>
    </div>
  )
}
