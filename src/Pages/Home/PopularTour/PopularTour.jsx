import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import TilteParaReuse from "../../../reuse/TilteParaReuse";
import Common from "../../../reuse/Common";
import './Popular.css'

const PopularTour = () => {
  const [popularTour, setPopularTour] = useState([]);

  useEffect(() => {
    fetch("PopularDestinations.json")
      .then((res) => res.json())
      .then((data) => setPopularTour(data));
  }, []);

  return (
    <div className="py-8">
      <div className="container">
        <div className="mb-9">
        <TilteParaReuse  heading2 ="Popular Destinations"  heading6=" ------ Discover ------" />
        </div>
     

     

     

        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 3000,
          }}
          modules={[Autoplay]}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
          }}
        >
          {popularTour?.map((tour) => (
            <SwiperSlide key={tour.id}>
              <Common image={tour.image} name={tour.name} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default PopularTour;
