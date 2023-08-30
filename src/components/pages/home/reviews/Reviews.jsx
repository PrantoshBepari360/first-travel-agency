import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useFetchData } from "../../../../hooks/useFetchData";
import Heading from "../../../shared/common/Heading";
import SpinnerLoader from "../../../shared/loader/SpinnerLoader";
import Review from "./Review";

const Reviews = () => {
  const reviews = useFetchData(
    "https://travel-agency-0dnf.onrender.com/review"
  );

  return (
    <div className="container">
      <div className="my-10 text-center">
        <Heading
          heading2=" Customer Reviews"
          para4=" This Our Services from our valuable Customer, those who get from BD
            Travel agency. We every time provide best quality services to our
            cusotmer."
        />
      </div>
      <div className="pb-10">
        {reviews.loading && <SpinnerLoader />}
        {reviews.error && <h3>{reviews.error}</h3>}

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
          {reviews.data?.map((review) => (
            <SwiperSlide key={review?._id}>
              <Review review={review} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Reviews;
