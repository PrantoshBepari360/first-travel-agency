// import TravelPackagesCard from "./TravelPackagesCard";
import { FaStar, FaUser } from "react-icons/fa";

import { useFetchData } from "../../hooks/useFetchData";
import { Link } from "react-router-dom";


const TravelPackages = () => {
  const { packages } = useFetchData();

  return (
    <div className="container">
      <h2 className="lg:text-4xl text-xl text-center my-8 font-dancingFont text-orange-500 font-semibold  ">
        Travel Packages
      </h2>
      {packages?.length === 0 && (
        <h2 className="text-center text-4xl text-red-700">Loading...</h2>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {packages?.length > 0 &&
          packages?.map((item) => (
            <div className="border rounded  mb-3 p-2 cursor-pointer">
            <div className="group max-w-sm  relative max-h-full	mx-auto overflow-hidden">
              <img className="w-full h-auto " src={item.image} alt="" />
              <div className="absolute inset-0 bg-red-500 opacity-0 hover:opacity-40 transition duration-300"></div>
            </div>
            <div className="ps-2 pe-2">
              <div className="flex items-center justify-between pt-3 ">
                <h3 className="text-[26px]  text-[#FF6C3E] pb-3 font-semibold">
                  {item.name}
                </h3>
                <div className="flex items-center gap-2">
                  <FaUser className="h-4 w-4 text-[#FF6C3E]"></FaUser>
                  <p className="text-lg text-[#4A5151] font-bold">{item.visited}</p>
                </div>
              </div>
              <h2 className="text-[#4A5151] text-2xl font-bold pb-4 ">{item.title}</h2>
              <Link to={`/tourDetails/${item.id}`}>
                <button className="px-5 py-3 bg-[#FF6C3E] text-white rounded text-lg">
                  See Details
                </button>
              </Link>
            </div>
          </div>
          
          ))}
      </div>
    </div>
  );
};

export default TravelPackages;
