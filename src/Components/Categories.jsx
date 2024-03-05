import axios from 'axios'
import React, { useEffect, useState } from 'react';
import { GiClothes } from "react-icons/gi";
import { AiFillAlipayCircle } from "react-icons/ai";
import Img from '../assets/Banner-img.png'

export default function Categories() {

  const [categories, setCategories] = useState([]);

  const imgCategories = {
    'img1' : Img
  }
    const getCategory = () => {
        axios.get(`https://fakestoreapi.com/products/categories`)
        .then(res => {
                setCategories(res.data)
            })
        
        .catch((err) => {
             console.log(err)
 
        });
    }

    useEffect(() => {
        getCategory()
    },[]);

  return (
    <div>
          <h1 className='p-1 font-bold'>Browse By Category</h1>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 cursor-pointer items-center justify-center'>
        {
            categories.map((category, index) => {
                return (
                    <div key={index} className='border border-slate-300 w-4/6 h- items-center justify-center p-3'>
                    {/* <GiClothes /> */}
                    {/* {imgCategories.category (

                    )} */}
                    {imgCategories[category.toLowerCase()] && (
                                    <img src={imgCategories[category.toLowerCase()]} alt={category} className='w-full h-auto mb-2' />
                                ) }
                    {/* <img className='w-10 h-10' src={Img} alt='img' /> */}
                        <h1 className='p-1 capitalize' >{category}</h1>
                    </div>
                )
            })
        }
        </div>
    </div>
  )
}
