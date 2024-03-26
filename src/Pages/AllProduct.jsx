import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../Contexts/AppContent";
import ProductCard from "../Components/ProductCard";
import { IoFilterOutline } from "react-icons/io5";
import { FaSortAmountUp } from "react-icons/fa";
import axios from "axios";

export default function AllProduct() {
  const { ourProducts, categories } = useContext(AppContext);
  const [loading, setLoading] = useState(false);
  const [sortsItem, setSortsItem] = useState([]);

  const getItemSort = () => {
    axios
      .get("https://fakestoreapi.com/products?sort=desc")
      .then((res) => {
        setSortsItem(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getItemSort();
  }, []);
  return (
    <div className="flex max-wl">
      <div className=" shadow-md w-6/12 m-3 p-3">
        <div className="flex my-3">
          <IoFilterOutline size={22} className="p-1 " />
          <p>Filter</p>
        </div>
        <select className="p-2 outline-none w-full rounded capitalize">
          <option>By category</option>
          {categories.map((category, index) => {
            return (
              <option key={index} value={category} className=" ">
                {category} className="p-2"
              </option>
            );
          })}
        </select>
        <div className="flex border border-slate-300 my-6"></div>
        <div className="flex my-3">
          <FaSortAmountUp size={22} className="p-1 " />
          <p>Sort</p>
          {/* <select className="p-2 outline-none w-full rounded capitalize">
            <option>By Sort</option>
            {sortsItem.map((sortItem, index) => {
              return (
                <option key={index} value={sortItem} className=" ">
                  {sortItem}
                </option>
              );
            })}
          </select> */}
        </div>
        <select className="p-2 outline-none w-full rounded capitalize"  >
            <option>Descending</option>
            <option>Ascending</option>
          </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-5 m-5">
        {ourProducts.map((ourProduct, index) => {
          return <ProductCard product={ourProduct} key={index} />;
        })}
      </div>
    </div>
  );
}
