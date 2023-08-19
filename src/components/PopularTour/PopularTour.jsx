import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Common from "../../Pages/Common";

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
        <h2 className="lg:text-4xl text-xl text-center mb-12 font-semibold font-dancingFont text-orange-500">
          Popular Destinations
        </h2>
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
