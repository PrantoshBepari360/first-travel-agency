import React, { useEffect, useState } from "react";
import TravelPackagesCard from "./TravelPackagesCard";


const TravelPackages = () => {
  const [packages, setPackages] = useState([]);
  useEffect(() => {
    fetch("TravelPackages.json")
      .then((res) => res.json())
      .then((data) => setPackages(data));
  }, []);
  
  return (
    <div className="container">
      <h2 className="lg:text-4xl text-xl text-center mb-12 font-semibold text-[#4e5050] ">
        Travel Packages
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {packages.map((item) => (
          <TravelPackagesCard key={item.id} item={item}></TravelPackagesCard>
        ))}
      </div>
    </div>
  );
};

export default TravelPackages;
