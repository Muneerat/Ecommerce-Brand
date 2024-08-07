import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import electronics from "../assets/electronics.png";
import Logo from "../assets/logo.png";
import jewelery from "../assets/Jewelery.png";
import Men from "../assets/men.png";
import Women from "../assets/Women.png";
import TextHeader from "./textHeader";
import { AppContext } from "../Contexts/AppContent";

export default function Categories() {
  const {categories} = useContext(AppContext);

  const imgCategories = {
    electronics: electronics,
    jewelery: jewelery,
    "women's clothing": Women,
    "men's clothing": Men,
  };

  return (
    <div>
      <TextHeader text="Browse By Category" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 cursor-pointer items-center justify-center">
        {categories.map((category, index) => {
          return (
            <div
              key={index}
              className="bg-white border border-slate-300 w-4/6 h- items-center justify-center text-center p-3 hover:bg-primary hover:scale-90 shadow-md duration-300 m-auto"
            >
              <img
                src={imgCategories[category]}
                alt={category}
                className="w-10 h-10 flex justify-center items-center m-auto"
              />
              <h1 className="p-2 capitalize">{category}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
}
