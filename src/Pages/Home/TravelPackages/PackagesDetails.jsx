import React, { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link, useParams } from "react-router-dom";
import "../PopularTour/Popular.css";
import { Autoplay } from "swiper";
import { MdStar } from "react-icons/md";
import CommentForm from "./CommentForm";
import SimilarTours from "./SimilarTours/SimilarTours";
const PackagesDetails = () => {
  const { id } = useParams();
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    fetch("/TravelPackages.json")
      .then((res) => res.json())
      .then((data) => setPackages(data));
  }, []);

  const details = packages?.find((pk) => pk.id === Number(id));

  return (
    <>
      <div className="relative  rounded bg-center bg-cover">
        <img
          className="w-full object-cover h-[400px] min-h-full"
          src="https://img.freepik.com/free-photo/caribbean-beach-with-palm-trees-blue-sky_268835-1810.jpg?w=1800&t=st=1691395742~exp=1691396342~hmac=9996f0b3deb7f321e933a17971405a1b67d02fef9afe0e155aa00559f369d5c1"
          alt=""
        />
        <div className="absolute top-0 rounded left-0 w-full h-full bg-black opacity-40"></div>
        <div className="container">
          <h2 className="xl:text-5xl mx-auto text-center lg:text-4xl text-3xl absolute top-0 left-0 w-full h-full flex items-center justify-center   text-white font-bold">
            Tour Packages Details....
          </h2>
        </div>
      </div>
      <div className="bg-gray-100 py-12 flex flex-col md:flex-row justify-between items-center">
        <div className="ms-2">
          <h2 className="lg:text-[40px] text-[23px] text-center md:text-left font-bold tracking-wide">
            Are You Still Intarested To Tour?
          </h2>
          <p className="lg:text-lg text-sm text-center md:text-left pb-2">
            We Offer A Wide Range Of Procedures To Help You Get The Perfect
            Smile
          </p>
        </div>
        <div>
          <Link to="/tourBooking">
            <button className="booking_btn">Book A Tour!</button>
          </Link>
        </div>
      </div>
      <div className="flex flex-col   md:flex-row gap-6 pt-12 ">
        <div className="lg:w-8/12	 w-full	">
          <div className="flex flex-wrap  md:flex-row items-center lg:justify-between gap-1">
            <div className="flex items-center  ">
              <h2 className="text-3xl font-bold text-[#4e5050]  mb-4">
                {details?.name}
              </h2>
              <MdStar className="h-9 w-9 ms-10 lg:ms-8 pb-2  text-yellow-400"></MdStar>
              <h2 className="font-bold text-lg  pb-2 ">{details?.review}</h2>
              <h2 className="text-lg  pb-2 ps-4"> ({details?.reviewPeople})</h2>
            </div>
            <div>
              <h2 className="text-lg"> {details?.visited} People</h2>
            </div>
          </div>
          <div className="text-[#4e5050]  mb-4 tracking-wider">
            {" "}
            <span className="">StartFrom </span>{" "}
            <span className="text-2xl font-bold">${details?.price}</span>{" "}
            <span>/ Per Person</span>
          </div>
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 2000 }}
            pagination={{ clickable: true }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 0,
              },
              768: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 1,
                spaceBetween: 30,
              },
            }}
          >
            {details?.backgroundImg?.map((i) => (
              <SwiperSlide key={i}>
                <div className="overflow-hidden max-h-96	 rounded relative group cursor-pointer">
                  <img src={i?.background1} className="w-full  object-cover" />
                  <img src={i?.background2} className="w-full   object-cover" />
                </div>
                <div className="mb-1 lg:w-1/2 w-full">
                  <label
                    className="block text-gray-700 text-sm font-bold "
                    htmlFor="subject"
                  >
                    Last Name <span className="text-red-600 text-lg">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Last Name"
                    className="w-full px-3 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <h2 className="lg:text-4xl text-[26px] font-bold text-[#4e5050] pb-6">
            {details?.title}
          </h2>
          <div>
            <h2 className="text-3xl font-bold mb-4">Tour Details</h2>
            <p className="text-lg tracking-wide">{details?.tourDetails}</p>
          </div>
          <CommentForm></CommentForm>
        </div>
        <div className="border-2 h-80 mt-14 rounded lg:w-1/3 w-full	"></div>
      </div>
      <SimilarTours></SimilarTours>
    </>
  );
};

export default PackagesDetails;
