import React from "react";
import { Link } from "react-router-dom";

export default function TextOnImg({
  text,
  header,
  img,
  style,
  className,
  ...props
}) {
  return (
    // <div
    //   className={`bg-black bg-cover relative object-cover w-full  ${className}`}
    //   style={{ backgroundImage: `url(${style})` }}
    // >
    //   <div className="absolute bottom-6 left-4">
    //     <h1>{header}</h1>
    //     <p>{text}</p>
    //     <Link to="">Shop now</Link>
    //   </div>
    // </div>
    <div className="bg-black relative hover:scale-95 duration-300 dark:border">
      <img
        src={img}
        className="md:w-4/6 w-5/6 flex justify-center mx-auto  "
      />
      <div className="absolute bottom-5 left-5 w-3/5 text">
        <h1 className="text-xl">{header}</h1>
        <p className="py-1 text-xs">{text}</p>
        <Link to="" className="border-b-2">Shop now</Link>
      </div>
    </div>
  );
}
