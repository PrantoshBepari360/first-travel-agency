import React from "react";

const Slider = (props) => {
  return (
    <div className="overflow-hidden rounded-2xl shadow-lg group cursor-pointer">
      <img src={props.image} className="w-full h-auto object-cover" />

      <img src={props?.background1} className="w-full h-auto object-cover" />
      <img src={props?.background2} className="w-full h-auto object-cover" />
      <img src={props?.background3} className="w-full h-auto object-cover" />
      <img src={props?.background4} className="w-full h-auto object-cover" />

      <div className="absolute p-4 bg-slate-800 opacity-0 delay-75 inset-0 group-hover:opacity-50 group-hover:rounded-2xl ">
        <span className="text-white text-3xl font-semibold bottom-4 left-5 px-2 py-1 border rounded border-gray-400 bg-gray-900 ">
          {props?.name}
        </span>
        <span className="absolute text-white text-3xl font-semibold bottom-4 right-5 px-2 py-1 border rounded border-gray-400 bg-gray-900">
          {props.seedetails}
        </span>
      </div>
    </div>
  );
};

export default Slider;
