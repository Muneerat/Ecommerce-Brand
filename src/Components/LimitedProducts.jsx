import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { AppContext } from "../Contexts/AppContent";
import Loading from "./Loading";

export default function LimitedProducts() {
  const [limitProduct, setLimitProduct] = useState([]);
  const [isHover, setHover] = useState(null);
  const [loading, setLoading] = useState(false);
  // const {loading, setLoading} = useContext(AppContext);

  const getLimitProduct = () => {
    setLoading(true);
    axios
      .get("https://fakestoreapi.com/products?limit=5")
      .then((res) => {
        setLimitProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      })
  };
  useEffect(() => {
    getLimitProduct();
  },[]);

  return (
    <div>
      {loading && <Loading />}
      { !loading && 
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-5 m-5">
          {limitProduct.map((product, index) => {
            return (
              <ProductCard product={product} key={index} />
              /* <div>
              <div key={product} className=' shadow-xl relative h-3/4'
              onMouseEnter={() => setHover(index)}
                onMouseLeave={() => setHover(null)}>
                  <div className='right-4 absolute'>
                  <FaRegHeart className='my-3'/>
                  <HiEye />
              </div>
              <div className='flex justify-center pt-5'>
                <img className=' w-2/4 p-3 flex ' src={product.image} alt={product.title} />
              </div>
           
                { isHover == index && <button className='absolute bottom-0 p-1 transition-all duration-300 bg-black w-full text-white'>Add to cart</button>}
            </div>
            <div className='p-3'>
            <p>{product.title.substring(0,22)}</p>
            <p className='text-slate-400'>${product.price}</p>
            </div>
          
            </div> */
            );
          })}
        </div>
      }
    </div>
  );
}
