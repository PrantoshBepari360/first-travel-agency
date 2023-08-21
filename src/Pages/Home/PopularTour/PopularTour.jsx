import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import TilteParaReuse from "../../../reuse/TilteParaReuse";
import Modal from "./Modal";
import Common from "../../../reuse/Common";
import { useFetchData } from "../../../hooks/useFetchData";
import SpinnerLoader from "../../../Share/Loader/SpinnerLoader";

const PopularTour = () => {
  const { popularTour } = useFetchData();
  const [tour, setPopularTour] = useState({});

  // show the modal
  const [modal, setModel] = useState(false);

  const getPopularTour = (tour) => {
    setPopularTour(tour);
    setModel(true);
  };

  return (
    <div className="py-8">
      <div className="container">
        <div className="mb-9">
          <TilteParaReuse
            heading2="Popular Destinations"
            heading6=" ------ Discover ------"
          />
        </div>
        {popularTour.length === 0 && <SpinnerLoader />}
        {popularTour?.length > 0 && (
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
              <SwiperSlide onClick={() => getPopularTour(tour)} key={tour.id}>
                {modal && (
                  <div className="fixed top-0 right-0 bottom-0 left-0 bg-black opacity-70 rounded-2xl"></div>
                )}
                <Common
                  image={tour.image}
                  name={tour.name}
                  seedetails={"See Details"}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
        {modal && <Modal tour={tour} closeModal={() => setModel(false)} />}
      </div>
    </div>
  );
};

export default PopularTour;
