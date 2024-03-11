import React from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-4 gap-x-2.5 p-8  ">
        <div>
          <img src={Logo} alt="Logo" />
          <p className="my-1 pr-3">
            Best information about the company gies here but now lorem ipsum is
          </p>
          <div className="flex">
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
            <Link to="" className="py-1">
              Home
            </Link>
            <Link to="" className="py-1">
              About
            </Link>
            <Link to="" className="py-1">
              Contact
            </Link>
          </div>
        </div>
        <div>
          <h2 className="font-bold text-xl">Account</h2>
          <div className="flex flex-col my-3">
            <Link to="" className="py-1">
              Login / Register
            </Link>
            <Link to="" className="py-1">
              Cart
            </Link>
            <Link to="" className="py-1">
              Products
            </Link>
          </div>
        </div>
        <div>
          <h2 className="font-bold text-xl">Support</h2>
          <div className="flex flex-col my-3">
            <Link to="" className="py-1">
              Login / Register
            </Link>
            <Link to="" className="py-1">
              Cart
            </Link>
            <Link to="" className="py-1">
              Products
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-primary-light p-2 text-center ">
        <p>© {currentYear} Ecommerce. All right reserved. Design by munie.</p>
      </div>
    </>
  );
}
