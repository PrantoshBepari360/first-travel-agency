import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Review from "./Review";
import SpinnerLoader from "../../../Share/Loader/SpinnerLoader";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const url = `https://travel-agency-0dnf.onrender.com/review`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <>
      <div className="container">
        <div className="my-10 text-center">
          <h2 className="md:text-6xl font-dancingFont text-4xl  text-center text-orange-500 mb-2">
            Customer Reviews
          </h2>
          <p className="text-xl font-caveatFont text-center text-orange-500 md:w-[60%] w-full mx-auto">
            This Our Services from our valuable Customer, those who get from BD
            Travel agency. We every time provide best quality services to our
            cusotmer.
          </p>
        </div>
        <div>
          {reviews?.length === 0 ? (
            <SpinnerLoader />
          ) : (
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
              {reviews?.map((review) => (
                <SwiperSlide key={review?._id}>
                  <Review review={review} />
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      </div>
    </>
  );
};

export default Reviews;
