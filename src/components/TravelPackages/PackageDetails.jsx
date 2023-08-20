import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper";
import { MdStar } from "react-icons/md";
import detailImg from "../../assets/about/about.jpeg";

import CommentForm from "../TravelPackages/CommentForm";
import { useFetchData } from "../../hooks/useEffect";
import Common from "../../Pages/Common";


const PackageDetails = () => {
  const { id } = useParams();
  const { data: packages } = useFetchData("/TravelPackages.json");

  const details = packages.find((pk) => pk.id === Number(id));

  if (!details) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <>
        <div className="relative bg-cover -z-100">
          <img
            className="w-full object-cover h-80 lg:h-96"
            src={detailImg}
            alt="About Image"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>
          <h2 className="absolute top-0 left-0 w-full h-full flex items-center justify-center  text-3xl xl:text-5xl lg:text-4xl text-white font-bold ">
            Tour detailss details....
          </h2>
        </div>

        <div className="bg-slate-300 ">
          <div className="container pt-8 pb-8 flex flex-col md:flex-row justify-between items-center">
            <div className="ms-2 ">
              <h2 className="lg:text-[40px] text-[23px] text-center md:text-left font-bold tracking-wide">
                Are You Still Intarested To Tour?
              </h2>
              <p className="lg:text-lg text-sm text-center md:text-left pb-2">
                We Offer A Wide Range Of Procedures To Help You Get The Perfect
                Smile
              </p>
            </div>
            <div>
              <Link to={`/tourBooking/${id}`}>
                <button
                  className=" px-4 py-3 rounded border-2 border-orange-400 bg-white
               text-orange-400 font-semibold text-xl hover:text-white hover:border-white duration-100  hover:bg-orange-400"
                >
                  Book A Tour!
                </button>
              </Link>
            </div>
          </div>
          <div className="container pb-6">
            <div className="flex items-center  ">
              <h2 className="text-3xl font-bold text-[#4e5050]  mb-4">
                {details?.name}
              </h2>
              <MdStar className="h-9 w-9 ms-10 lg:ms-8 pb-2  text-yellow-400"></MdStar>
              <h2 className="font-bold text-lg  pb-2 ">{details?.review}</h2>
              <h2 className="text-lg  pb-2 ps-4"> ({details?.reviewPeople})</h2>
            </div>
            <div className="text-[#4e5050]  mb-8 tracking-wider">
              <span className="">StartFrom </span>
              <span className="text-2xl font-bold">${details?.price}</span>
              <span>/ Per Person</span>{" "}
              <span className="text-lg font-bold"> {details?.visited}</span>{" "}
              <span>People</span>
            </div>
          </div>
        </div>

        <div className="container pt-10">
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
            {details?.backgroundImg?.map((img) => (
              <SwiperSlide key={img}>
                <Common
                  name={img.name}
                  background1={img.background1}
                  background2={img.background2}
                  background3={img.background3}
                  background4={img.background4}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <h2 className="lg:text-4xl text-[26px] font-bold text-[#4e5050] pb-6">
            {details?.title}
          </h2>
          <p className="text-lg tracking-wide">{details?.tourdetails}</p>

          <CommentForm />
        </div>
      </>
    </div>
  );
};

export default PackageDetails;
