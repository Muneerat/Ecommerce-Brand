import React from "react";
import { useContext } from "react";
import { AppContext } from "../Contexts/AppContent";
import { Link } from "react-router-dom";
import RemoveItem from "./removeItem";
export default function Cart() {
  const { cart,setCart } = useContext(AppContext);
 
  const addItem = (id ) => {
    console.log('here')
    // let existingProduct = cart.find((prod) => prod.id === id)
    const cartItem = cart.find((item) => {
        return item.id === id;
      });
      //if cart item is already in cart
      if (cartItem) {
        //increase the quantity
        const newCart = [...cart].map(item => {
          if(item.id === id) {
            return {...item, amount: cartItem.amount + 1}
           
          } else {
            return item;
          }
        })
        setCart(newCart);
    }
    // if(existingProduct) {
    //     let index = cart.findIndex((prod) => prod.id === prod.id)
    //     let newCart = [...cart]
    //     newCart[index].qty = cart.amount + 1
    //     setCart(newCart)
    //     console.log(newCart)
    // }
    // return {...item, amount: cart.amount + 1}

  }
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
                <button onClick={() => addItem(item)} className="border bg-primary text-white py-1 px-3">+</button>
                <button className="border py-1 px-3">{item?.amount}</button>
                <button className="border bg-primary text-white py-1 px-3">-</button>
              </div>
              {/* <h2>{item?.amount}</h2> */}
              <h2>{item?.price * item?.amount}</h2>
            </div>
            <RemoveItem product={item} />
          </div>
        );
      })}
    </div>
  );
}
