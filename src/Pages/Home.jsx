import React from "react";
import Categories from "../Components/Categories";
import Layouts from "../Components/Layouts";
import BgImg from "../assets/Banner-img.webp";
import Button from "../Components/Button";
import Tabs from "../Components/Tabs";
import LimitedProducts from "../Components/LimitedProducts";
import phone from "../assets/phone.png";
import TextHeader from "../Components/textHeader";
import OurProduct from "../Components/OurProduct";
import Featured from "../Components/Featured";
import Delivery from "../assets/icon-delivery.svg";
import IconCustomer from "../assets/Icon-Customer.svg";
import IconSecure from "../assets/Icon-secure.svg";
import ps5 from "../assets/ps5.svg";
import womanWear from "../assets/woman-wear.svg";
import Speaker from "../assets/Speaker.svg";
import perfume from "../assets/perfume.svg";
import { Link } from "react-router-dom";
import TextOnImg from "../Components/TextOnImg";
import { useRef } from "react";
import { useEffect } from "react";
import Typed from "typed.js";

export default function () {
   // Create reference to store the DOM element containing the animation
   const el = useRef(null);

   useEffect(() => {
     const typed = new Typed(el.current, {
       strings: ['Unlock Your Style', ],
       typeSpeed: 150,
       backSpeed: 150,
       showCursor: false,
       startDelay: 300,
       backDelay: 300,
       smartBackspace: true,
       shuffle: true,
     });
 
     return () => {
       // Destroy Typed instance during cleanup to stop animation
       typed.destroy();
     };
   }, []);
 
  //  useEffect(() => {
  //   const options = {
  //     strings: ['Hello, World!', 'Welcome to my website!'],
  //     typeSpeed: 50,
  //     backSpeed: 50,
  //     loop: true
  //   };
  
  //   const typed = new Typed(typeRef.current, options);
  
  //   return () => {
  //     typed.destroy();
  //   };
  // }, []);
  return (
    <>
      <div
        className="bg-cover max-h-full h-[70vh] bg-center md:bg-top"
        style={{
          backgroundImage: `url(${BgImg})`,
        }}
      >
        <div className="p-10 md:pl-20 flex flex-col my-auto justify-center align-middle pt-32 ">
          <h1 className="flex py-4 text-2xl font-light text-[#0f1235]">Introducing </h1>
          <h2 className="font-bold py-5 text-3xl md:text-8xl text-[#0f1235]" ref={el}></h2>
          <Link to="/allProducts">
          <Button text="Explore" className="text-white bg-primary hover:text-white" />
          </Link>
         
        </div> 
      </div>
    <Layouts>
      {/* <Categories /> */}
      <div className="pt-5">
        <Tabs text="Today's" />
        <LimitedProducts />
        {/* <Categories /> */}
      </div>
      <div className="mt-5">
        <Tabs text="Categories" />
        <Categories />
      </div>
      <div>
        <Tabs text="Our Products" />
        <TextHeader text="Explore Our Products" />
        <OurProduct />
      </div>
      <div>
        <Tabs text="Our Featured" />

        <div className="grid grid-cols-1 md:grid-cols-2 content-center mx-auto my-8 place-content-center gap-3 text-white ">
          <TextOnImg
            img={ps5}
            text="Black and White version of the PS5 coming out on sale."
            header="PlayStation 5"
          />
          <div className="grid grid-cols-1 gap-4">
            <TextOnImg
              img={womanWear}
              text="Featured woman collections that give you another vibe."
              header="Women’s Collections"
              className="h-[40vh]"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 bg- gap-4">
              <TextOnImg
              img={Speaker}
              text="Amazon wireless speakers"
              header="Speakers"
              className='h-[45vh]'
            />
              <TextOnImg
              img={perfume}
              text="GUCCI INTENSE OUD EDP"
              header="Perfume"
              className='h-[45vh]'
            />
            </div>
          </div>
        </div>

        <div className="flex md:flex-row flex-col justify-around my-12">
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

        {/* <TextHeader text='Explore Our Products'/>
        <OurProduct /> */}
      </div>

      {/* <div className='w-full flex bg-black'>
        <div className='w-3/6 text-white'>Hello Neerat</div>
        <div className='h-[70vh] bg-cover bg-center w-3/6' style={{ backgroundImage: `url(${phone})` }}></div>
      </div> */}
    </Layouts>

    </>
  );
}
