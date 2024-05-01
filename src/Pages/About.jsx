import React from "react";
import AboutImg from '../assets/about.png'
import Featured from "../Components/Featured";
import Delivery from "../assets/icon-delivery.svg";
import IconCustomer from "../assets/Icon-Customer.svg";
import IconSecure from "../assets/Icon-secure.svg";
import ps5 from "../assets/ps5.svg";
import Layouts from "../Components/Layouts";

export default function About() {
  return (
    <Layouts className="bg-white">
      <div className="flex flex-col md:flex-row justify-between m-4">
        <div className="flex flex-1 flex-col text-xl justify-center px-6">
          <h1 className="text-3xl font-semibold">Our Story</h1>
          <p className="py-4">
            Launched in 2015, Exclusive is South Asia’s premier online shopping
            marketplace with an active presence in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sellers and 300 brands and serves 3 millions customers
            across the region.
          </p>
          <p className="py-4">
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assortment in categories
            ranging from consumer.
          </p>
        </div>
        <div className="flex flex-1">
          <img src={AboutImg} alt="" />
        </div>
      </div>
      <div className="flex md:flex-row flex-col justify-around my-14">
          <Featured
            img={Delivery}
            header="FREE AND FAST DELIVERY"
            text="Free delivery for all orders over $140"
          />
          <Featured
            img={IconCustomer}
            header="24/7 CUSTOMER SERVICE"
            text="Friendly 24/7 customer support"
          />
          <Featured
            img={IconSecure}
            header="MONEY BACK GUARANTEE"
            text="We return money within 30 days"
          />
        </div>
    </Layouts>
  );
}
