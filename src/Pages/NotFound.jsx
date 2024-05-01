import React from 'react';
import {Link} from 'react-router-dom';


export default function NotFound() {
  return (
    <div>
        <div className='flex flex-col justify-center m-auto items-center h-[530px]'>
            <h1 className='text-9xl font-semibold text-primary'>404</h1>
            <h2 className='font-bold text-3xl p-2'>Oops! Page not found</h2>
            <p>The page you are looking for does not exist</p>
            <Link to="/">
            <button className='bg-primary hover:bg-primary/70 my-5 text-white font-bold py-2 px-4 rounded-lg transition ease-in-out duration-200'>Back to Home</button>
            </Link>
        </div>
    </div>
  )
}
