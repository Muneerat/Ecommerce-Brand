import React, { useContext, useState } from 'react'
import { AppContext } from '../Contexts/AppContent'
import ProductCard from './ProductCard'
import { IoFilterOutline } from "react-icons/io5";

export default function AllProduct() {
    const {ourProducts,OurProducts, getOurProducts} = useContext(AppContext)
    const [loading, setLoading] = useState(false);
  return (
    <div className='flex max-wl'>
    <div className=' shadow-md w-6/12 m-3 p-3'>
        <div className='flex'>
            <IoFilterOutline size={18} className='flex items-center '/>
            <p>Filter</p>
        </div>
        <select className=''>
            <option>All</option>
            <option>Laptops</option>
            <option>Smartphones</option>
            <option>Cameras</option>
        </select>
    </div>
      <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-5 m-5'>
       { ourProducts.map((ourProduct, index) => {
        return (
            <ProductCard
                product={ourProduct}
                key={index}
            />
        )
       })}
       </div>
    </div>
  )
}
