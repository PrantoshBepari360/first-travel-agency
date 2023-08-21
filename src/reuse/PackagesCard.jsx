import React from "react";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import TilteParaReuse from "./TilteParaReuse";

const PackagesCard = (props) => {
  const { image, name, visited, title,review, reviewPeople ,id} = props
  return (
    <div className="border rounded mb-3 p-2 cursor-pointer">
      <div className="group max-w-sm relative max-h-full mx-auto overflow-hidden">
        <img className="w-full h-auto" src={image} alt="Card Image" />
        <div className="absolute inset-0 bg-red-500 opacity-0 hover:opacity-40 transition duration-300"></div>
      </div>
      <div className="ps-2 pe-2">
        <div className="flex items-center justify-between pt-3 ">
          <h3 className=" text-[#FF6C3E]">
            <div className="">
            <TilteParaReuse  heading3= {name} />
            </div>
        
          </h3>
          <div className="flex items-center gap-2 ">
            <FaUser className="h-4 w-4 text-[#FF6C3E]"></FaUser>
            <p className="text-lg text-[#4A5151] font-bold">{visited}</p>
            <p className="text-lg text-[#4A5151] font-bold">{review}</p>
            <p className="text-lg text-[blue] font-bold">{reviewPeople}</p>

          </div>
        </div>
        <TilteParaReuse  heading4={title}/>
       

        <Link to={`/tourDetails/${id}`}>
          <button className="px-5 py-3 bg-[#FF6C3E] text-white rounded text-lg">
            See Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PackagesCard;
