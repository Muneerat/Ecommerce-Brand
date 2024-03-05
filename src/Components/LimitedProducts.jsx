import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Button from './Button';

export default function LimitedProducts() {
    const [limitProduct, setLimitProduct] = useState([]);
    const [isHover, setHover] = useState(null);


    const getLimitProduct = () => {
        axios.get('https://fakestoreapi.com/products?limit=5')
        .then(res => {
              setLimitProduct(res.data)
        })
        .catch((err) => {
             console.log(err)
         });
        
    }
    useEffect(() => {
        getLimitProduct();
    }),[];

  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-5 m-5'>
        {limitProduct.map((product,index) => {
            return (
              <div>
            <div key={product.id} className=' shadow-xl relative h-3/4'
              onMouseEnter={() => setHover(index)}
                onMouseLeave={() => setHover(null)}>
              <div className='flex justify-center pt-5'
             >
                <img className=' w-2/4 p-3 flex ' src={product.image} alt={product.title} />
                {/* <p>{product.description}</p> */}
                {/* <Button text='Add to cart'/> */}
                </div>

                { isHover == index && <button className='absolute bottom-0 p-1 transition-all duration-300 bg-black w-full text-white'>Add to cart</button>}
            </div>
            <div className='p-3'>
            <p>{product.title.substring(0,22)}</p>
            <p className='text-slate-400'>${product.price}</p>
            </div>
          
            </div>
            )
        })}
    </div>
  )
}
