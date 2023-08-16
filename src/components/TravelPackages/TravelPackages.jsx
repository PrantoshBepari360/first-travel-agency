import TravelPackagesCard from "./TravelPackagesCard";
import { useFetchData } from "../../hooks/useFetchData";

const TravelPackages = () => {
  const { packages } = useFetchData();

  return (
    <div className="container">
      <h2 className="lg:text-4xl text-xl text-center my-8 font-semibold text-[#4e5050] ">
        Travel Packages
      </h2>
      {packages?.length === 0 && (
        <h2 className="text-center text-4xl text-red-700">Loading...</h2>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {packages?.length > 0 &&
          packages?.map((item) => (
            <TravelPackagesCard key={item?.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default TravelPackages;
