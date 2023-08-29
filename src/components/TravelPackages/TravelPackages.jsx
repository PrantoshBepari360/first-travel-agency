// import TravelPackagesCard from "./TravelPackagesCard";
import { FaStar, FaUser } from "react-icons/fa";

import { useFetchData } from "../../hooks/useFetchData";
import { Link } from "react-router-dom";
import H2P2Ruse from '../../reuse/Heading2'
import PackagesCard from "../../reuse/PackagesCard";
import ColorPera from "../../reuse/ColPera";


const TravelPackages = () => {
  const { packages } = useFetchData();

  return (
    <div className="container">
       <div className="mb-9 text-4xl">

       <H2P2Ruse  heading2 ="  Travel Packages" />
       <ColorPera para4=" ------Packages------"/>
       </div>
    
      {   console.log(packages)}
      {packages?.length === 0 && (
  
        <h2 className="text-center text-4xl text-red-700">Loading...</h2>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        {packages?.length > 0 &&
          packages?.map((item) => (
           <PackagesCard  
           key={item.id}
           name={item.name}
           id={item.id}
            title={item.title} 
            visited={item.visited} 
            image={item.image}/>
          
          ))}
      </div>
    </div>
  );
};

export default TravelPackages;
