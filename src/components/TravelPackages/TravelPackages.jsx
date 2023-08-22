import SpinnerLoader from "../../Share/Loader/SpinnerLoader";
import { useFetchData } from "../../hooks/useFetchData";
import { FaUser } from "react-icons/fa";
import PackagesCard from "../../reuse/PackagesCard";
import TilteParaReuse from "../../reuse/TilteParaReuse";

const TravelPackages = () => {
  const { packages } = useFetchData();

  return (
    <div className="container">
      <TilteParaReuse heading2={"Travel Packages"}/>
      {packages?.length === 0 && <SpinnerLoader />}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {packages?.length > 0 &&
          packages?.map((item) => (
            <PackagesCard
              key={item.id}
              id={item.id}
              title={item.title}
              visited={item.visited}
              user={<FaUser className="text-blue-600" />}
              image={item.image}
              name={item.name}
            />
          ))}
      </div>
    </div>
  );
};

export default TravelPackages;
