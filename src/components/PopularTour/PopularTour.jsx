import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper";
import { useFetchData } from "../../hooks/useEffect";

const PopularTour = () => {
  const { data: popularTour } = useFetchData("PopularDestinations.json"); 

  return (
    <div className="py-8">
      <div className="container">
        <h2 className="lg:text-4xl text-xl text-center mb-12 font-semibold font-dancingFont text-orange-500">
          Popular Destinations
        </h2>
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          // autoplay={{
          //   delay: 3000,
          // }}
          // modules={[Autoplay]}
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
          {popularTour?.map((destination) => (
            <SwiperSlide key={destination?.id}>
              <div className="overflow-hidden rounded-2xl shadow-lg relative group cursor-pointer">
                <img
                  src={destination?.image}
                  className="w-full h-auto object-cover"
                />
                <div className="p-4 opacity-0 group-hover:opacity-50 delay-75	absolute  inset-0 bg-slate-800 ">
                  <h3 className="font-semibold bottom-2 left-4  absolute mb-2  text-white text-3xl">
                    {destination?.name}
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default PopularTour;
