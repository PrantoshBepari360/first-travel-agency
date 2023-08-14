import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import img1 from "../../assets/slider/diego.jpg";
import img2 from "../../assets/slider/daniela.jpg";
import img3 from "../../assets/slider/diego.jpg";

const Slider = () => {
  return (
    <div className="relative mb-20 -z-100">
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{
          delay: 3000,
        }}
        modules={[Autoplay]}
      >
        <SwiperSlide>
          <div className="w-full h-[650px] relative">
            <img
              src={img1}
              className="w-full h-full object-cover absolute top-0 left-0 z-0 blur-sm "
              alt=""
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 p-6 text-white">
              <h2 className="lg:text-6xl md:text-3xl text-center font-bold mb-4">
                Welcome to our Travel Agency
              </h2>
              <p className="lg:text-lg text-center">
                Discover the world with us. Book your dream vacation now!
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-[650px] relative">
            <img
              src={img2}
              className="w-full h-full object-cover absolute top-0 left-0 z-0 blur-sm"
              alt=""
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 p-6 text-white">
              <h2 className="lg:text-6xl md:text-3xl text-center font-bold mb-4">
                Explore New Destinations
              </h2>
              <p className="lg:text-lg text-center">
                Experience adventure like never before!
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-[650px] relative">
            <img
              src={img3}
              className="w-full h-full object-cover absolute top-0 left-0 z-0 blur-sm"
              alt=""
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 p-6 text-white">
              <h2 className="lg:text-6xl md:text-3xl text-center font-bold mb-4">
                Plan Your Perfect Getaway
              </h2>
              <p className="lg:text-lg text-center">
                Relax and unwind in the most beautiful destinations.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
