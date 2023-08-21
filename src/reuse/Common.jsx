import React from "react";

const Common = (props) => {
  return (
    <div className="overflow-hidden rounded-2xl shadow-lg relative group cursor-pointer">
      <img src={props.image} className="w-full h-auto object-cover" />

      <img src={props?.background1} className="w-full h-auto object-cover" />
      <img src={props?.background2} className="w-full h-auto object-cover" />
      <img src={props?.background3} className="w-full h-auto object-cover" />
      <img src={props?.background4} className="w-full h-auto object-cover" />

      <div className="p-4 opacity-0 group-hover:opacity-50 delay-75	absolute  inset-0 bg-slate-800 ">
        <h3 className="font-semibold bottom-2 left-4  absolute mb-2  text-white text-3xl">
          {props?.name}
        </h3>
      </div>
    </div>
  );
};

export default Common;
