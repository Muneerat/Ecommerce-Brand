import React from 'react'
import Categories from '../Components/Categories'
import Layouts from '../Components/Layouts';
import BgImg from '../assets/Banner-img.png'
import Button from '../Components/Button';
import Tabs from '../Components/Tabs';
import LimitedProducts from '../Components/LimitedProducts';
import phone from '../assets/phone.png';
import TextHeader from '../Components/textHeader';
import OurProduct from '../Components/OurProduct';


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
           
           <Button 
               text='Learn more'
               className='text-primary bg-white ' />
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
      <div>
        <Tabs text="Our Products" />
        <TextHeader text='Explore Our Products'/>
        <OurProduct />
      </div>
      {/* <div className='w-full flex bg-black'>
        <div className='w-3/6 text-white'>Hello Neerat</div>
        <div className='h-[70vh] bg-cover bg-center w-3/6' style={{ backgroundImage: `url(${phone})` }}></div>
      </div> */}

    </Layouts>
  )
}
