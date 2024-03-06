import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import ProductCard from './ProductCard';

export default function OurProduct() {
    const [ourProducts, setourProducts] = useState([]);

    const getOurProducts = () => {
        axios.get('https://fakestoreapi.com/products')
        .then((res) => {
            console.log(res.data);
            setourProducts(res.data)
        })
        .catch((error) => {
            console.error(error);
        })
    }
    useEffect(() => {
        getOurProducts();
    }, [])

  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-5 m-5'>
    {ourProducts.map((ourProduct, index) => {
        return (
            <ProductCard 
                product={ourProduct}
                key={index}
            />
        )
    })  
     }
    </div>
  )
}
