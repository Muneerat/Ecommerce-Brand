import axios from 'axios'
import React, { useContext } from 'react'
import { useState, useEffect } from 'react'
import ProductCard from './ProductCard';
import Button from './Button';
import Loading from './Loading';
import { AppContext } from '../Contexts/AppContent';
import { Link } from 'react-router-dom';

export default function OurProduct() {
    // const [ourProducts, setOurProducts] = useState([]);
    const [showAllProducts, setShowAllProducts] = useState(false);
    const [loading, setLoading] = useState(false);
    const {ourProducts,setOurProducts,getOurProducts} = useContext(AppContext)
    // const {loading, setLoading} = useContext(AppContext);

    // const getOurProducts = () => {
    //     setLoading(true);
    //     axios.get('https://fakestoreapi.com/products')
    //     .then((res) => {
    //         setOurProducts(res.data);

    //     })
    //     .catch((error) => {
    //         console.error(error);
    //     })
    //     .finally(() => {
    //          setLoading(false);
 
    //     })
    // }
    // useEffect(() => {
    //     getOurProducts();
    // }, [])

    const handleViewAllProducts = () => {
        setShowAllProducts(!showAllProducts);
    };

  return (
    <div>
     { loading && 
      <Loading />}
   
   { !loading &&  
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
     </div>}
     {!showAllProducts && (
        <div className='flex justify-center w-full mx-auto'>
       <Link to='products/allProducts'>
        <Button 
               onClick={handleViewAllProducts}
               text='View All Products'
               className='p-3 transition-all duration-300 bg-primary text-white rounded-sm hover:bg-primary-light hover:text-primary '
         />
      </Link>
       
    </div> 
        
     )}
     </div>
  )
}
