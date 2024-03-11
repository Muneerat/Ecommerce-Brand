import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Layouts from '../Components/Layouts'
import Button from '../Components/Button'

export default function SingleProduct() {

    const [product, setProducts] =  useState([])
    const Params = useParams()               

    const SingleProduct = () => {
        axios.get(`https://fakestoreapi.com/products/${Params.id}`)
        .then((res) =>  {
            // console.log(res.data)
            setProducts(res.data)
        })
        .catch((error) => {
             console.error(error);
        })
    }
    useEffect(() => {
        SingleProduct();
    },[Params.id])
  return (
  <Layouts className='bg-white p-0'>
              <div  className='h-[70vh] flex justify-evenly p-6 bg-primary-light'>
              <div className='p-3 w-2/4 flex justify-center bg-white'>
                <img className=' w-3/6' src={product.image} alt={product.title} />
              </div>
              <div className='p-3 w-2/5 bg-primary-light'>
               <h1 className='font-bold text-xl'>{product?.title}</h1>
               <p className='text-slate-400 py-3 text-lg'>${product.price}</p>
               <p className='text-lg'>{product.description}</p>
               <div className='h-1 w-full bg-slate-200 my-5 rounded-md'></div>
               <div className='flex my-3'>
                <h2 className='py-1 pl-0 text-xl'>Size:</h2>
               <button className='border-2 px-3 rounded-md mx-2 py-1 hover:bg-primary hover:text-white'>S</button>
               <button className='border-2 px-3 rounded-md mx-2 py-1 hover:bg-primary hover:text-white'>M</button>
               <button className='border-2 px-3 rounded-md mx-2 py-1 hover:bg-primary hover:text-white'>L</button>
               <button className='border-2 px-3 rounded-md mx-2 py-1 hover:bg-primary hover:text-white'>XL</button>
               </div>
               <div className='flex justify-between'>
               <div className='border '>
               <button className='px-3  mx- py-1 hover:bg-primary hover:text-white'>-</button>
               <button className='px-3 mx- py-1 hover:bg-primary hover:text-white'>Count</button>
               <button className='px-3 mx- py-1 hover:bg-primary hover:text-white'>+</button>
               </div>
               <div>
               <button className='px-3  mx- py-1 hover:bg-primary hover:text-white'>-</button>
               </div>
               </div>
            </div>
                {/* { isHover == index && <button className='absolute bottom-0 p-1 transition-all duration-300 bg-black w-full text-white'>Add to cart</button>} */}
            </div> 
  </Layouts>
  )
}
