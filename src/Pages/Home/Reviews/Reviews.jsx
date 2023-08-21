import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Review from "./Review";
import TilteParaReuse from "../../../reuse/TilteParaReuse";
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
          <TilteParaReuse
            heading2=" Customer Reviews"
            para4=" This Our Services from our valuable Customer, those who get from BD
            Travel agency. We every time provide best quality services to our
            cusotmer." />
        </div>
        <div className="pb-10">
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
