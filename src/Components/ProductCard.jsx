import Button from "./Button";
import { HiEye } from "react-icons/hi";
import { FaRegHeart } from "react-icons/fa";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../Contexts/AppContent";



export default function ProductCard({ product }) {
  const {addToCart} = useContext(AppContext); 
  const [isHover, setHover] = useState('');
  return (
    <div>
    {/* {`${product.id}`} */}
      <Link to='' className="">
        <div
          className=" shadow-xl relative h-3/4 bg-white hover:scale-105 hover:backdrop-blur-none duration-300 backdrop-blur transition-all ease-in-out"
          onMouseEnter={() => setHover(product.id)}
          onMouseLeave={() => setHover('')}
        >
          <div className="right-4 absolute text-primary ">
            <FaRegHeart className="my-3 hover:text-black" />
            <HiEye className="my-3 hover:text-black " />
          </div>
          <div className="flex justify-center pt-5">
            <img
              className=" w-2/5 p-3 flex "
              src={product.image}
              alt={product.title}
            />
          </div>
          {isHover == product.id && (
            <button 
               className="absolute bottom-0 p-1 transition-all duration-300 bg-black w-full text-white"
               onClick={() => addToCart(product)}
                >
              Add to cart
            </button>
          )}
        </div>
        <div className="p-3">
          <p>{product.title.substring(0, 22)}</p>
          <p className="text-slate-700">${product.price}</p>
        </div>
      </Link>
    </div>
  );
}


