import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import ProductCard from './ProductCard';
import Button from './Button';

export default function OurProduct() {
    const [ourProducts, setourProducts] = useState([]);
    const [showAllProducts, setShowAllProducts] = useState(false);

    const getOurProducts = () => {
        axios.get('https://fakestoreapi.com/products')
        .then((res) => {
            console.log(res.data);
            setourProducts(res.data);

        })
        .catch((error) => {
            console.error(error);
        })
    }
    useEffect(() => {
        getOurProducts();
    }, [])

    const handleViewAllProducts = () => {
        setShowAllProducts(!showAllProducts);
    };

  return (
    <div>
    <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-5 m-5'>
    {ourProducts.slice(0, showAllProducts ? ourProducts.length : 8).map((ourProduct, index) => {
        return (
            <ProductCard 
                product={ourProduct}
                key={index}
            />
        )
    })  
     }
     </div>
     {!showAllProducts && (
        <div className='flex justify-center w-full mx-auto'>
        {/* <button 
             className='p-3 transition-all duration-300 bg-primary text-white rounded-sm hover:bg-primary-light hover:text-primary'  
             onClick={handleViewAllProducts}>View All Products</button>
        </div> */}
        <Button 
               onClick={handleViewAllProducts}
               text='View All Products'
               className='p-3 transition-all duration-300 bg-primary text-white rounded-sm hover:bg-primary-light hover:text-primary ' />
    </div> 
        
     )}
     </div>
  )
}
