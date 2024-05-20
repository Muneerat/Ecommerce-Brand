import React from "react";
import { useContext } from "react";
import { AppContext } from "../Contexts/AppContent";
import { Link, Navigate } from "react-router-dom";
import RemoveItem from "./removeItem";
import { GrCart } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import { FiTrash2 } from "react-icons/fi";
import Layouts from "./Layouts";

export default function Cart() {
  const navigate = useNavigate()
  const { cart,emptyCart,addToCart,increaseItem, decreaseItem,totalPrice } = useContext(AppContext);

  
 const navHome = () => {
  navigate('/')
 }

  return (
    <Layouts>

    <div className="mx-5 p-5 dark:bg-slate-950 dark:text-white">
    {cart.length < 1 ? <div className="flex justify-center h-[520px] items-center">
      <div className="text-center">
      <GrCart size={180}/>
      <h2 className="font-bold py-3 text-3xl">Your Cart is Empty</h2>
      <p>Add something to make me happy 🙂️</p>
      <button onClick={() => navHome()} className="p-1 my-4 transition-all duration-300 bg-primary w-full text-white rounded-md">Continue shopping</button>
      </div>
      </div> :
      <div>
      <div className="flex flex-col gap-y-2 py-4 h-[520px] lg:h-[610px] overflow-y-auto overflow-x-hidden border-b">
      <h1 className="text-xl font-semibold">My cart</h1>
      {cart.map((item, index) => {
        return (
          <div className="shadow-md md:p-3 flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light">
            <div
              className="w-full min-h-[150px] flex items-center gap-x-4"
              key={index}
            >
              
              <Link>
                <img
                  src={item?.image}
                  alt={item?.title}
                  className="max-w-[80px]"
                />
              </Link>
              <div className="flex flex-col w-full md:ml-4">
              <div className="flex justify-between mb-2">
              {/* <Link to={`/${item?.id}`}>{item?.title}</Link> */}
                <h2 className="">{item?.title}</h2>
              <RemoveItem product={item.id} />
              </div>
              <div className="flex ">
                <div className="flex flex-1">
                <button onClick={() => decreaseItem(item.id)} className="border bg-primary text-white py-1 px-3">-</button>
                <button className="border py-1 px-3">{item?.amount}</button>
                <button onClick={() => increaseItem(item.id)} className="border bg-primary text-white py-1 px-3">+</button>
                </div>
                <h2 className="flex-1 flex items-center justify-around">{item?.price}</h2>
              <h2 className="flex-1 flex items-center justify-around">{(item?.price * item?.amount).toFixed(2)}</h2>
              </div>
              </div>
             
            </div>
          </div>
        );
      })}
      </div>
      <div className="flex flex-col gap-y-3 py-4 mt-4">
        <div className="flex w-full justify-between justify-items-center">
         <div className="uppercase font-semibold">
           <span className="mr-2">Total:</span>${totalPrice.toFixed(2)}
         </div>
         <div onClick={emptyCart} className="cursor-pointer py-4 bg-red-500 text-white w-12 h-12 flex justify-center items-center text-xl">
          <FiTrash2 />
         </div>
        </div>
      </div>
      </div>
       }
      
     
    </div>
    </Layouts>
  );
}

