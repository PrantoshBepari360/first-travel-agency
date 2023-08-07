import { useEffect, useState } from "react";
import PopularPlacesCard from "./PopularPlacesCard";

const PopularPlace = () => {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    fetch('place.json')
      .then(res => res.json())
      .then(data => setPlaces(data));
  }, []);

  return (
    <div className="mb-20">
      <section className="mb-9">
        <h4 className="md:text-6xl text-4xl text-center text-orange-500 mb-2">
          Most Popular Place
        </h4>
        <h5 className="text-2xl text-center text-orange-500">
          -----Visited by people------
        </h5>
      </section>

      <div className="grid md:grid-cols-3 gap-10">
        {places.map(place => (
          <PopularPlacesCard key={place._id} place={place} />
        ))}
      </div>
    </div>
  );
};

export default PopularPlace;
