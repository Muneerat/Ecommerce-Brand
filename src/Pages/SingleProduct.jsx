import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import Layouts from "../Components/Layouts";
import Button from "../Components/Button";
import { AppContext } from "../Contexts/AppContent";
import { FaRegHeart } from "react-icons/fa";
import { HiEye } from "react-icons/hi";

export default function SingleProduct() {
  const [product, setProducts] = useState([]);
  const Params = useParams();
  const [ourProductsRandom, setOurProductsRandom] = useState([]);
  const { cart, addToCart, increaseItem, decreaseItem, totalPrice } =
    useContext(AppContext);
  const [isHover, setHover] = useState("");

  function shuffleArray(array) {
    for (let i = array.length - 1; i >= 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[i], array[j]];
    }
    return array;
  }

  //Get all products
  const getOurRandomProducts = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        const shuffleProduct = shuffleArray(res.data);
        setOurProductsRandom(shuffleProduct);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // useEffect(() => {
  //   getOurRandomProducts();
  // }, []);
  const SingleProduct = () => {
    axios
      .get(`https://fakestoreapi.com/products/${Params.id}`)
      .then((res) => {
        // console.log(res.data)
        setProducts(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  useEffect(() => {
    SingleProduct();
    getOurRandomProducts();
  }, [Params.id]);

  const handleProductClick = () => {
    const shuffleProduct = shuffleArray([...ourProductsRandom]);
    setOurProductsRandom(shuffleProduct);
    Navigate(`/products/${product.id}`);
  };

  const currentCartItem = cart.find((item) => item.id === product.id);
  return (
    <Layouts className=" p-0">
      <div className="md:h-screen flex flex-col md:flex-row justify-evenly p-6 bg-primary-light">
        <div className="h-1/6 p-3 md:w-2/4 flex justify-center bg-white">
          <img className="w-3/6" src={product.image} alt={product.title} />
        </div>
        <div className="p-3 md:w-2/5 bg-primary-light">
          <h1 className="font-bold text-2xl border-b py-3">{product?.title}</h1>
          <p className="text-lg py-3 border-b">{product.description}</p>
          <p className="py-3 text-lg capitalize border-b">
            Category: <span className="text-slate-400">{product.category}</span>
          </p>
          <p className=" py-3 text-lg border-b">
            Price: <span className="text-slate-400">${product.price}</span>
          </p>
          {/* <div className="h-1 w-full bg-slate-200 my-5 rounded-md"></div> */}
          <div className="flex my-3">
            <h2 className="py-1 pl-0 text-xl">Size:</h2>
            <button className="border-2 px-3 rounded-md mx-2 py-1 hover:bg-primary hover:text-white">
              S
            </button>
            <button className="border-2 px-3 rounded-md mx-2 py-1 hover:bg-primary hover:text-white">
              M
            </button>
            <button className="border-2 px-3 rounded-md mx-2 py-1 hover:bg-primary hover:text-white">
              L
            </button>
            <button className="border-2 px-3 rounded-md mx-2 py-1 hover:bg-primary hover:text-white">
              XL
            </button>
          </div>
          {currentCartItem ? (
            <div className="flex my-4">
              <button
                onClick={() => decreaseItem(currentCartItem.id)}
                className="border bg-primary text-white py-1 px-3"
              >
                -
              </button>
              <button className="border py-1 px-3">
                {currentCartItem.amount}
              </button>
              <button
                onClick={() => increaseItem(currentCartItem.id)}
                className="border bg-primary text-white py-1 px-3"
              >
                +
              </button>
            </div>
          ) : (
            <button
              className="transition-all rounded-md duration-300 bg-primary w-full text-white py-2 my-3"
              onClick={() => addToCart(product)}
            >
              Add to cart
            </button>
          )}
        </div>
        {/* { isHover == index && <button className='absolute bottom-0 p-1 transition-all duration-300 bg-black w-full text-white'>Add to cart</button>} */}
      </div>
      <div className="grid grid-cols-4 gap-10">
        {ourProductsRandom.slice(0,4).map((product) => (
          <div>
            <div
              className=" shadow-xl relative h-3/4 bg-white hover:scale-105 hover:backdrop-blur-none duration-300 backdrop-blur transition-all ease-in-out"
              onMouseEnter={() => setHover(product.id)}
              onMouseLeave={() => setHover("")}
            >
              <Link to={`/products/${product.id}`} className="">
                <div className="right-4 absolute text-primary ">
                  <FaRegHeart className="my-3 hover:text-black" />
                  <HiEye className="my-3 hover:text-black " />
                </div>
                <div className="flex justify-center pt-5 w-full h-full">
                  <img
                    className=" w-2/5 p-3 flex object-contain "
                    src={product.image}
                    alt={product.title}
                  />
                </div>
              </Link>
              {isHover == product.id && (
                <button
                  className="absolute bottom-0 p-1 transition-all duration-300 bg-primary w-full text-white"
                  onClick={() => addToCart(product.id)}
                >
                  Add to cart
                </button>
              )}
            </div>
            <div className="p-3 dark:text-white">
              <p>{product.title.substring(0, 22)}</p>
              <p className="text-slate-700 dark:text-white">${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </Layouts>
  );
}
