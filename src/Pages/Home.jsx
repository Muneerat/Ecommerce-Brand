import React from "react";
import Categories from "../Components/Categories";
import Layouts from "../Components/Layouts";
import BgImg from "../assets/Banner-img.png";
import Button from "../Components/Button";
import Tabs from "../Components/Tabs";
import LimitedProducts from "../Components/LimitedProducts";
import phone from "../assets/phone.png";
import TextHeader from "../Components/textHeader";
import OurProduct from "../Components/OurProduct";
import Featured from "../Components/Featured";
import Delivery from "../assets/icon-delivery.svg";
import ps5 from "../assets/ps5.svg";
import womanWear from "../assets/woman-wear.svg";
import Speaker from "../assets/Speaker.svg";
import perfume from "../assets/perfume.svg";
import { Link } from "react-router-dom";
import TextOnImg from "../Components/TextOnImg";

export default function () {
  return (
    <Layouts>
      {/* <div className='h-1 w-full bg-slate-200'></div> */}
      {/* <Categories /> */}
      <div
        className="bg-cover bg-center max-h-full h-[60vh]"
        style={{
          backgroundImage: `url(${BgImg})`,
        }}
      >
        <div className="p-10 pl-20 flex flex-col my-auto">
          <h1 className="pt-4 text-4xl ">Latest trending</h1>
          <h2 className="font-bold pt-3  text-7xl ">Electronic items</h2>

          <Button text="Learn more" className="text-primary bg-white " />
        </div>
      </div>
      <div className="mt-5">
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

        <div className="grid grid-cols-1 md:grid-cols-2 content-center mx-auto place-content-center gap-3 text-white ">
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
              {/* <div className="bg-black relative">
                <img
                  src={Speaker}
                  alt="Woman Wear"
                  className="w-4/6 flex justify-center mx-auto  "
                />
                <div className="absolute bottom-0 top- text">
                  <h1>PlayStation 5</h1>
                  <p>Black and White version of the PS5 coming out on sale.</p>
                  <Link to="">Shop now</Link>
                </div>
              </div> */}
              {/* <div className="bg-black">
                <img
                  src={perfume}
                  alt="Woman Wear"
                  className="w-4/6 flex justify-center mx-auto"
                />
              </div> */}
            </div>
          </div>
        </div>

        <div className="flex justify-around">
          <Featured
            img={Delivery}
            header="FREE AND FAST DELIVERY"
            text="Free delivery for all orders over $140"
          />
          <Featured
            img={Delivery}
            header="FREE AND FAST DELIVERY"
            text="Free delivery for all orders over $140"
          />
          <Featured
            img={Delivery}
            header="FREE AND FAST DELIVERY"
            text="Free delivery for all orders over $140"
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
  );
}
