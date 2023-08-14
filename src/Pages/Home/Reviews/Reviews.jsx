import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Review from "./Review";

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
          <h2>Customer Reviews</h2>
          <p>
            This Our Services from our valuable Customer, those who get from BD
            Travel agency. We every time provide best quality services to our
            cusotmer.
          </p>
        </div>
        <div>
          {reviews?.length === 0 ? (
            <div className="flex justify-center items-center">
              <span className="">Loading...</span>
            </div>
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
                  <Review review={review}></Review>
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
