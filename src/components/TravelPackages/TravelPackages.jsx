import SpinnerLoader from "../../Share/Loader/SpinnerLoader";
import { useFetchData } from "../../hooks/useFetchData";
import PackagesCard from "./PackagesCard";
import { FaUser } from "react-icons/fa";

const TravelPackages = () => {
  const { packages } = useFetchData();

  return (
    <div className="container">
      <h2 className="lg:text-4xl text-xl text-center py-8 font-dancingFont text-orange-500 font-semibold">
        Travel Packages
      </h2>
      {packages?.length === 0 && <SpinnerLoader />}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {packages?.length > 0 &&
          packages?.map((item) => (
            <PackagesCard
              key={item.id}
              id={item.id}
              title={item.title}
              visited={item.visited}
              user={<FaUser />}
              image={item.image}
              name={item.name}
            />
          ))}
      </div>
    </div>
  );
};

export default TravelPackages;
