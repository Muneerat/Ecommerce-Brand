import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

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
    <div>
                <div>
              <div  className=' shadow-xl relative h-3/4'
              >
                  {/* <div className='right-4 absolute'>
                  <FaRegHeart className='my-3'/>
                  <HiEye />
              </div> */}
              <div className='flex justify-center pt-5'>
                <img className=' w-1/4 p-3 flex ' src={product.image} alt={product.title} />
              </div>
           
                {/* { isHover == index && <button className='absolute bottom-0 p-1 transition-all duration-300 bg-black w-full text-white'>Add to cart</button>} */}
            </div>
            <div className='p-3'>
            <p>{product?.title}</p>
            <p className='text-slate-400'>${product.price}</p>
            {/* <p>{product.description}</p> */}
            </div>
          
            </div>
            
     
    </div>
  )
}
