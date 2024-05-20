import React from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import Layouts from "./Layouts";
import { useContext } from "react";
import { AppContext } from "../Contexts/AppContent";
import { useNavigate } from "react-router-dom";
import Links from "./Links";

const currentYear = new Date().getFullYear();



export default function Footer() {
   const {scrollToTop} = useContext(AppContext);
  const navigate = useNavigate()
  const handleHomes = () => {
    navigate('/')
    console.log('clicked')
    // setNotice({ message: "You are on the home page", type: "success" });
  }
  return (
    <div className="bg-white dark:bg-slate-950 dark:text-white">
      <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-3 p-8  items-center md:justify-items-center">
        <div>
        <Link onClick={scrollToTop} to="/">
          <img src={Logo} alt="Logo" />
        </Link>
          <p className="my-1 py-3">
            Best information about the company.
          </p>
          <div className="flex gap-2">
          
            <Link to="">
              <FaFacebookSquare />
            </Link>
            <Link to="">
              <FaXTwitter />
            </Link>
            <Link to="">
              <FaSquareInstagram />
            </Link>
            <Link to="">
              <FaLinkedin />
            </Link>
          </div>
        </div>
        <div>
          <h2 className="font-bold text-xl">Quick Link</h2>
          <div className="flex flex-col my-3">
            <Link onClick={scrollToTop} to="/" className="py-1 hover:translate-x-3 transition-all duration-200">
              Home
            </Link>
            <Link onClick={scrollToTop} to="/about" className="py-1 hover:translate-x-3 transition-all duration-200">
              About
            </Link>
            <Link onClick={scrollToTop} to="/products/allProducts" className="py-1 hover:translate-x-3 transition-all duration-200">
              Product
            </Link>
          </div>
        </div>
        <div>
          <h2 className="font-bold text-xl">Account</h2>
          <div className="flex flex-col my-3">
            <Link onClick={scrollToTop} to="/signup" className="py-1 hover:translate-x-3 transition-all duration-200">
              Login / Register
            </Link>
            <Link onClick={scrollToTop} to="/cart" className="py-1 hover:translate-x-3 transition-all duration-200">
              Cart
            </Link>
            <Link to="" className="py-1 hover:translate-x-3 transition-all duration-200">
              Products
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-primary-light dark:bg-slate-950 p-2 text-center ">
        <p>© {currentYear} Ecommerce. All right reserved. Design by munie.</p>
      </div>
    </div>
  );
}
