import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "../PopularTour/Popular.css";
import { Autoplay } from "swiper";

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
    <div>
      <div className="relative rounded bg-center bg-cover">
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
      <div className="flex flex-col  md:flex-row gap-12 mt-12 ">
        <div className="lg:w-8/12	 w-full	">
          <div>
            <h2 className="text-3xl font-bold text-[#4e5050] mb-4">{name}</h2>
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
                <div className="overflow-hidden h-[400px] rounded relative group cursor-pointer">
                  <img src={i?.background1} className="w-full  object-cover" />
                  <img src={i?.background2} className="w-full   object-cover" />
                  <img src={i?.background3} className="w-full   object-cover" />
                  <img src={i?.background4} className="w-full   object-cover" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="container">
            <h2>Review {details?.review}</h2>
            <h2>Review People {details?.reviewPeople}</h2>
            <h2>Visited {details?.visited}</h2>
          </div>
        </div>
        <div
          style={{ boxShadow: "rgba(0, 0, 0, 0.25) 0px 25px 50px -12px" }}
          className="lg:w-4/12	me-4 w-full z-50 mt-[-120px] rounded bg-[#FFFFFF]  pb-8 border-none"
        >
          <div className="bg-[#22a5c3] py-14 rounded border-none">
            <h2 className="text-white text-center text-2xl font-bold">
              Start From <span className="text-3xl"> {details?.price}</span>$/
              Per Person
            </h2>
          </div>
          <form className="px-4">
            <div className="flex pt-6 items-center justify-between gap-2">
              <div className="mb-1  lg:w-1/2 w-full">
                <label
                  className="block text-gray-700 text-sm font-bold "
                  htmlFor="name"
                >
                  First Name <span className="text-red-600 text-lg">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  className="w-full px-3 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                  required
                />
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
            </div>
            <div className="mb-1">
              <label
                className="block text-gray-700 text-sm font-bold "
                for="country"
              >
                Country <span className="text-red-600 text-lg">*</span>
              </label>
              <select
                id="country"
                name="country"
                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              >
                <option value="country1">Bangladesh</option>
                <option value="country2">India</option>
                <option value="country3">Australia</option>
                <option value="country4">Canada</option>
                <option value="country5">London</option>
              </select>
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold"
                htmlFor="name"
              >
                Phone <span className="text-red-600 text-lg">*</span>
              </label>
              <input
                type="number"
                id="name"
                name="name"
                placeholder="Your Phone"
                className="w-full px-3 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold "
                htmlFor="subject"
              >
                Subject <span className="text-red-600 text-lg">*</span>
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Subject"
                className="w-full px-3 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                required
              />
            </div>

            <div className="flex">
              <button
                type="submit"
                className="px-4 py-3  bg-[#22a5c3] font-bold text-white rounded"
              >
                Proceed To Book
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PackagesDetails;
