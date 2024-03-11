import React from "react";

export default function Featured({ img, header, text }) {
  return (
    <div className="text-center flex flex-col items-center m-3 hover:-translate-y-4 duration-300 transition-all">
      <div className="bg-slate-300 rounded-full p w-16 h-16 flex items-center justify-center text-center">
        <div className="bg-black rounded-full h-12 m- w-12 flex justify-center p-2">
          <img className="" src={img} alt={header} />
        </div>
      </div>

      <h2 className="py-1">{header}</h2>
      <p>{text}</p>
    </div>
  );
}
