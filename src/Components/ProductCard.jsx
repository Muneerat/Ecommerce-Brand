import Button from './Button';
import { HiEye } from "react-icons/hi";
import { FaRegHeart } from "react-icons/fa"
import { useState } from 'react';
import { Link } from 'react-router-dom';


export default function ProductCard({
    product,
    key
}) {

    const [isHover, setHover] = useState(null);
  return (
    <div key={key}>
    <Link to={`${product.id}`}>
    <div className=' shadow-xl relative h-3/4'
    onMouseEnter={() => setHover(key)}
      onMouseLeave={() => setHover(null)}>
        <div className='right-4 absolute'>
        <FaRegHeart className='my-3'/>
        <HiEye />
    </div>
    <div className='flex justify-center pt-5'>
      <img className=' w-2/4 p-3 flex ' src={product.image} alt={product.title} />
    </div>
    {/* <div>
    <HiEye />
    <HiEye />
    </div> */}
      { isHover == key && <button className='absolute bottom-0 p-1 transition-all duration-300 bg-black w-full text-white'>Add to cart</button>}
  </div>
  <div className='p-3'>
  <p>{product.title.substring(0,22)}</p>
  <p className='text-slate-400'>${product.price}</p>
  </div>
  </Link>
  </div>
  )
}
