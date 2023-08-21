import React from "react";

const Banner = (props) => {
  return (
    <div className="relative bg-cover -z-100">
      <img
        className="w-full object-cover h-80 lg:h-96"
        src={props.image}
        alt="Contact Image"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>
      <h2 className="absolute top-0 left-0 w-full h-full flex items-center justify-center  text-3xl xl:text-5xl lg:text-4xl text-white font-bold ">
        {props.name}
      </h2>
    </div>
  );
};

export default Banner;
