// import TravelPackagesCard from "./TravelPackagesCard";
import { FaStar, FaUser } from "react-icons/fa";

import { useFetchData } from "../../hooks/useFetchData";
import { Link } from "react-router-dom";
import PackagesCard from "./PackagesCard";


const TravelPackages = () => {
  const { packages } = useFetchData();

  return (
    <div className="container">
      <h2 className="lg:text-4xl text-xl text-center my-8 font-dancingFont text-orange-500 font-semibold  ">
        Travel Packages
      </h2>
      {   console.log(packages)}
      {packages?.length === 0 && (
  
        <h2 className="text-center text-4xl text-red-700">Loading...</h2>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {packages?.length > 0 &&
          packages?.map((item) => (
           <PackagesCard id={item.id} title={item.title} visited={item.visited} image={item.image}/>
          
          ))}
      </div>
    </div>
  );
};

export default TravelPackages;
