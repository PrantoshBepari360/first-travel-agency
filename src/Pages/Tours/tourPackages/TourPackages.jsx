import { useFetchData } from "../../../hooks/useFetchData";
import { FaUser } from "react-icons/fa";
import PackagesCard from "../../../components/shared/common/PackagesCard";
import Heading from "../../../components/shared/common/Heading"
import SpinnerLoader from "../../../components/shared/loader/SpinnerLoader";

const TourPackages = () => {
  const packages = useFetchData("/TravelPackages.json", (data) =>
    data.map((item) => ({
      id: item.id,
      title: item.title,
      visited: item.visited,
      image: item.image,
      name: item.name,
    }))
  );

  return (
    <div className="container">
      <Heading
        heading2="Travel Packages"
        heading6="------Packages------"
      />
      {packages.loading && <SpinnerLoader />}
      {packages.error && <h3>{packages.error}</h3>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {packages.data?.map((item) => (
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

export default TourPackages;
