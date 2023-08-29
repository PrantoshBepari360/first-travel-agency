import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Review from "./Review";
import H2P2Ruse from '../../../reuse/Heading2'
import ColorPera from "../../../reuse/ColPera";

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
          <H2P2Ruse
            heading2=" Customer Reviews"
            />
        </div>
        <ColorPera para4=" This Our Services from our valuable Customer, those who get from BD
            Travel agency. We every time provide best quality services to our
            cusotmer."/>

        <div>
          {reviews?.length === 0 ? (
            <div className="text-center text-4xl text-red-700">Loading...</div>
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
