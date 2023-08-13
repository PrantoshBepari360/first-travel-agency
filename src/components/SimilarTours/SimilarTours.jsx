import { Link, useParams } from "react-router-dom";
import { FaStar, FaUser } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useFetchData } from "../../hooks/useFetchData";

const SimilarTours = () => {
  const { id } = useParams();
  const { packages } = useFetchData();

  return (
    <div className="container">
      <h2 className="lg:text-4xl text-xl mb-6 mt-12 font-semibold text-[#4e5050] ">
        Similar Tours
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
        {packages?.map((item) => (
          <SwiperSlide key={item.id}>
            <Link to={`/tourDetails/${id}`}>
              <div className="border-0 shadow  mb-3 p-2 rounded cursor-pointer">
                <div className="group max-w-sm  relative max-h-full	mx-auto overflow-hidden rounded shadow-lg">
                  <img
                    className="w-full h-auto max-h-full  object-cover object-center   transform scale-100 group-hover:scale-105 transition-transform duration-300"
                    src={item.image}
                    alt=""
                  />
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                </div>
                <div className="ps-2 pe-2">
                  <div className="flex pt-3 items-center justify-between">
                    <h3 className="text-[26px]  text-[#3b3a3a] pb-3 font-semibold">
                      {item.name}
                    </h3>
                    <div className="flex items-center gap-2">
                      <FaUser className="h-4 w-4 text-cyan-600"></FaUser>
                      <p className="text-lg text-[#4A5151] font-bold">
                        {item.visited}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between border-t pt-2 pb-3">
                    <p className="text-[#4A5151] text-xl">
                      Start from ${item.price}
                    </p>
                    <div className="flex gap-1 items-center justify-end">
                      <FaStar className="h-5 w-5 pb-1 text-yellow-500"></FaStar>
                      <p className="font-bold"> {item.review}</p>
                      <p className="text-[#636667]">({item.reviewPeople})</p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SimilarTours;
