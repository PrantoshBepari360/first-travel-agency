import React from "react";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import H2P2Ruse from './Heading2'
import Heading3Ruse from "./Heading3";


const PackagesCard = (props) => {
  const { image, name, visited, title,review, reviewPeople ,id} = props
  return (
    <div className="border rounded mb-3 p-2 cursor-pointer">
      <div className="group max-w-sm relative max-h-full mx-auto overflow-hidden">
        <img className="w-full h-auto" src={image} alt="Card Image" />
        <div className="absolute inset-0 bg-red-500 opacity-0 hover:opacity-40 transition duration-300"></div>
      </div>
      <div className="">
        <div className="flex justify-between mt-2  ">
         
            <div className=" text-[#FF6C3E] ">
            <Heading3Ruse heading3= {name} />
            </div>
        
       
          <div className="flex  gap-2 ">
            <FaUser className="h-4 w-4 text-[#FF6C3E] mt-2"></FaUser>
            <p className="text-lg text-[#4A5151] m-1">{visited}</p>
            <p className="text-lg text-[#4A5151] font-bold">{review}</p>
            <p className="text-lg text-[blue] font-bold">{reviewPeople}</p>

          </div>
        </div>
        <Heading3Ruse  heading3={title}/>
       

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
