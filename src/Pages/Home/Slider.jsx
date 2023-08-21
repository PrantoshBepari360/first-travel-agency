import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import img1 from "../../assets/slider/diego.jpg";
import img2 from "../../assets/slider/daniela.jpg";
import img3 from "../../assets/slider/diego.jpg";
// import Common from "../Common";

const homeBanner = [
  {
    image: img1,
    welcome: "Welcome to our Travel Agency",
    discover: "Discover the world with us. Book your dream vacation now!",
  },
  {
    image: img2,
    welcome: "Welcome to our Travel Agency",
    discover: "Discover the world with us. Book your dream vacation now!",
  },
  {
    image: img3,
    welcome: "Welcome to our Travel Agency",
    discover: "Discover the world with us. Book your dream vacation now!",
  },
];

const Slider = () => {
  return (
    <div className="relative mb-10 -z-100">
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{
          delay: 3000,
        }}
        modules={[Autoplay]}
        className="w-full h-[450px] md:h-[650px]"
      >
        {homeBanner?.map((banner, index) => (
          <SwiperSlide key={index}>
            <img
              src={banner?.image}
              className="w-full h-[450px] md:h-[650px] bg-center bg-cover bg-no-repeat object-cover absolute top-0 left-0 z-0 blur-sm"
              alt="Banner Image"
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-white">
              <h2 className="lg:text-6xl md:text-3xl text-2xl text-center font-bold mb-4">
                {banner?.welcome}
              </h2>
              <p className="lg:text-lg text-center">{banner?.discover}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
