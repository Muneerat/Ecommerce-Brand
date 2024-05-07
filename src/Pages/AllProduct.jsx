import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../Contexts/AppContent";
import ProductCard from "../Components/ProductCard";
import { IoFilterOutline } from "react-icons/io5";
import { FaSortAmountUp } from "react-icons/fa";
import AllPro from '../assets/AllPro.jpg'
import AboutImg from '../assets/about.png'
import axios from "axios";

export default function AllProduct() {
  const { ourProducts, categories } = useContext(AppContext);
  const [loading, setLoading] = useState(false);
  const [sortsItem, setSortsItem] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSort, setSelectedSort] = useState("");
  const [filters, setFilters] = useState(false);

  const getItemSort = () => {
    axios
      .get("https://fakestoreapi.com/products?sort=desc")
      .then((res) => {
        setSortsItem(res.data);
        // console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getItemSort();
  }, []);
  const handleCategoryChange = (e) => {
    setFilters(true);
    setSelectedCategory(e.target.value);
  };
  const handleSortChange = (e) => {
    selectedSort();
  };
  return (
    <div>
         <div
        className="bg-cover max-h-full h-[55vh] bg-center md:bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.5)), url(${AllPro})`,
        }}
      >
        <div className="p-10 flex justify-center align-middle items-center pt-36 ">
          <h1 className="flex py-4 text-base md:text-6xl font-bold text-center my-auto  text-[#fff]">All Products </h1>
        </div> 
      </div>
    <div className="flex flex-col md:flex-row max-wl dark:bg-black">
      <div className=" shadow-md md:w-2/12 m-3 p-3">
        <div className="flex my-3">
          <IoFilterOutline size={22} className="p-1 " />
          <p>Filter</p>
        </div>
        <div>
        <select
          className="p-2 outline-none w-full rounded capitalize"
          onChange={handleCategoryChange}
        >
          <option>By category</option>
          {categories.map((category, index) => {
            return (
              <option key={index} value={category} className="p-2">
                {category}
              </option>
            );
          })}
        </select>
        <div className="md:flex border border-slate-300 my-6 hidden "></div>
        <img src={AboutImg} alt="" className="hidden md:flex h-56" />
        </div>
        <div className="flex border border-slate-300 my-6"></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-5 m-5 w-11/12">
        {(filters
          ? ourProducts.filter((product) =>
              selectedCategory ? product.category === selectedCategory : true
            )
          : ourProducts
        ).map((ourProduct, index) => (
          <ProductCard product={ourProduct} key={index} />
        ))}
      </div>
    </div>

    </div>
  );
}
