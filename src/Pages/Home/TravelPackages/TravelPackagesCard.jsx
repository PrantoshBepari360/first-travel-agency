import React from "react";
import { FaStar, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const TravelPackagesCard = ({ item }) => {
  const { image, name, price, visited, review, reviewPeople } = item;
  return (
    <Link to="package">
      <div className="border-0 shadow  mb-3 p-2 rounded cursor-pointer">
        <div className="group max-w-sm  relative max-h-full	mx-auto overflow-hidden rounded shadow-lg">
          <img
            className="w-full h-auto max-h-full  object-cover object-center   transform scale-100 group-hover:scale-105 transition-transform duration-300"
            src={image}
            alt=""
          />
          <div class="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
        </div>
        <div className="ps-2 pe-2">
          <div className="flex pt-3 items-center justify-between">
            <h3 className="text-[26px]  text-[#3b3a3a] pb-3 font-semibold">
              {name}
            </h3>
            <div className="flex items-center gap-2">
              <FaUser className="h-4 w-4 text-cyan-600"></FaUser>
              <p className="text-lg text-[#4A5151] font-bold">{visited}</p>
            </div>
          </div>
          <div className="flex items-center justify-between border-t pt-2 pb-3">
            <p className="text-[#4A5151] text-xl">Start from ${price}</p>
            <div className="flex gap-1 items-center justify-end">
              <FaStar className="h-5 w-5 pb-1 text-yellow-500"></FaStar>
              <p className="font-bold"> {review}</p>
              <p className="text-[#636667]">({reviewPeople})</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default TravelPackagesCard;
