import React from 'react'
import Categories from '../Components/Categories'
import Layouts from '../Components/Layouts';
import BgImg from '../assets/Banner-img.png'
import Button from '../Components/Button';
import Tabs from '../Components/Tabs';
import LimitedProducts from '../Components/LimitedProducts';


export default function () {
  return (
    <Layouts>
      {/* <div className='h-1 w-full bg-slate-200'></div> */}
      {/* <Categories /> */}
      <div 
          className='bg-cover bg-center max-h-full h-[60vh]'
          style= {{ 
            backgroundImage: `url(${BgImg})`
           }}> 
           <div className='p-10 pl-20 flex flex-col my-auto'>
           <h1 className='pt-4 text-4xl '>
               Latest trending
            </h1>
            <h2 className='font-bold pt-3  text-7xl '>Electronic items</h2>
           
           <Button text='Learn more' />
           </div>
           
      </div>
      <div className='mt-5'>
      <Tabs text="Today's" />
      <LimitedProducts />
      {/* <Categories /> */}
      </div>
      <div className='mt-5'>
        <Tabs text="Categories" />
        <Categories />      
      </div>

    </Layouts>
  )
}
