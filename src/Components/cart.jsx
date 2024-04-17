import React from "react";
import { useContext } from "react";
import { AppContext } from "../Contexts/AppContent";
import { Link } from "react-router-dom";
export default function Cart() {
  const { cart } = useContext(AppContext);
  // const {id,title} = product;
  return (
    <div className="mx-5 my-10 p-5">
      <h2 className="py-4">Cart</h2>
      <div className="grid grid-cols-4 item-center justify-items-center shadow-md p-5 my-10 bg-white justify-center ">
        <h2 className="">Product</h2>
        <h2>price</h2>
        <h2>Quantity</h2>
        <h2>Subtotal</h2>
      </div>
      {cart.map((item, index) => {
        return (
          <div
            className="grid grid-cols-4 justify-items-center shadow-md p-5 my-10 bg-white"
            key={index}
          >
            <div className="flex justify- items-">
              <img src={item?.image} alt={item?.title} className="w-12 h-12" />
              <h2 className="p-2">{item.title.substring(0,20)}</h2>
            </div>
            <h2>{item?.price}</h2>
            <h2>{item?.amount}</h2>
            <h2>{item?.price * item?.amount}</h2>
          </div>
        );
      })}
    </div>
  );
}
