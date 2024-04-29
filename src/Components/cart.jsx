import React from "react";
import { useContext } from "react";
import { AppContext } from "../Contexts/AppContent";
import { Link, Navigate } from "react-router-dom";
import RemoveItem from "./removeItem";
import { GrCart } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
export default function Cart() {
  const navigate = useNavigate()
  const { cart,setCart,addToCart,increaseItem, decreaseItem } = useContext(AppContext);

  
 const navHome = () => {
  navigate('/')
 }

  return (
    <div className="mx-5 my-10 p-5">
    {cart.length < 1 && <div className="flex justify-center ">
      <div className="text-center">
      <GrCart size={180}/>
      <h2 className="font-bold py-3 text-3xl">Your Cart is Empty</h2>
      <p>Add something to make me happy 🙂️</p>
      <button onClick={() => navHome()} className="p-1 my-4 transition-all duration-300 bg-primary w-full text-white rounded-md">Continue shopping</button>
      </div>
      </div> }
      
    {cart.length > 0 &&   <div className="grid grid-cols-4 item-center justify-items-center shadow-md p-5 my-10 bg-white justify-center ">
        <h2 className="">Product</h2>
        <h2>price</h2>
        <h2>Quantity</h2>
        <h2>Subtotal</h2>
      </div>}

      {cart.map((item, index) => {
        return (
          <div className="shadow-md my-10 p-3">
            <div
              className="grid grid-cols-4 justify-items-center p-2  bg-white"
              key={index}
            >
              <div className="flex justify- items-">
                <img
                  src={item?.image}
                  alt={item?.title}
                  className="w-12 h-12"
                />
                <h2 className="p-2">{item.title.substring(0, 20)}</h2>
              </div>
              <h2>{item?.price}</h2>
              <div>
                <button onClick={() => increaseItem(item.id)} className="border bg-primary text-white py-1 px-3">+</button>
                <button className="border py-1 px-3">{item?.amount}</button>
                <button onClick={() => decreaseItem(item.id)} className="border bg-primary text-white py-1 px-3">-</button>
              </div>
              {/* <h2>{item?.amount}</h2> */}
              <h2>{(item?.price * item?.amount).toFixed(2)}</h2>
            </div>
            <RemoveItem product={item.id} />
          </div>
        );
      })}
    </div>
  );
}
