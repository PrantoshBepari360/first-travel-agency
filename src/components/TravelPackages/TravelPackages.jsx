import { useFetchData } from "../../hooks/useFetchData";
import PackagesCard from "./PackagesCard";

const TravelPackages = () => {
  const { packages } = useFetchData();

  return (
    <div className="container">
      <h2 className="lg:text-4xl text-xl text-center py-8 font-dancingFont text-orange-500 font-semibold">
        Travel Packages
      </h2>
      {packages?.length === 0 && (
        <h2 className="text-center text-4xl text-red-700">Loading...</h2>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {packages?.length > 0 &&
          packages?.map((item) => (
            <PackagesCard
              key={item.id}
              image={item.image}
              name={item.name}
              visited={item.visited}
              title={item.title}
              id={item.id}
            />
          ))}
      </div>
    </div>
  );
};

export default TravelPackages;
