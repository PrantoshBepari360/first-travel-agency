import SpinnerLoader from "../../Share/Loader/SpinnerLoader";
import { useFetchData } from "../../hooks/useFetchData";
import { FaUser } from "react-icons/fa";
import PackagesCard from "../../reuse/PackagesCard";
import TilteParaReuse from "../../reuse/TilteParaReuse";

const TravelPackages = () => {
  const packages = useFetchData("/TravelPackages.json", (data) =>
    data.map((item) => ({
      id: item.id,
      title: item.title,
      visited: item.visited,
      image: item.image,
      name: item.name,
    }))
  );
  console.log(packages);
  return (
    <div className="container">
      <TilteParaReuse
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

export default TravelPackages;
