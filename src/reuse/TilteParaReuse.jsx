import React from "react";

const TilteParaReuse = ({
  heading1,
  heading2,
  heading3,
  heading4,
  heading5,
  heading6,
  para1,
  para2,
  para3,
  para4,
  para5,
  para6,
  para7,
  brk,
}) => {
  return (
    <div>
      <h1 className="md:text-6xl font-dancingFont text-5xl  text-center text-gray-500 mb-2">
        {heading1}
      </h1>

      <h2 className="text-4xl font-dancingFont font-semibold text-center text-gray-500 mb-2">
        {heading2}
      </h2>

      <h3 className="text-3xl text-center font-semibold mb-2">{heading3}</h3>

      <h4 className="text-lg font-bold ">{heading4}</h4>

      <h5 className="text-xl font-semibold  mb-2">{heading5}</h5>
      <h6 className="text-xl font-caveatFont font-thin  text-center text-blue-500 mb-2">
        {heading6}
      </h6>

      <br>{brk}</br>

      <p className="text-gray-600  leading-6 text-sm">{para1}</p>
      <p className="text-base text-justify leading-7 mb-2">{para2}</p>
      <p className="text-white font-bold mb-2  leading-7 text-justify">
        {para3}
      </p>
      <p className="text-3xl font-caveatFont text-center text-orange-500 md:w-[60%] w-full mx-auto">
        {para4}
      </p>
      <p className="text-base text-justify leading-7 mb-2">{para5}</p>
      <p className=" text-lg font-bold mb-2">{para7}</p>

      <p className="text-base text-justify leading-7 mb-2">{para6}</p>
    </div>
  );
};

export default TilteParaReuse;
