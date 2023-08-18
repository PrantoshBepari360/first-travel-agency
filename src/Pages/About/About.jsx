import React, { useEffect, useState } from "react";
import leftDown from "../../assets/about/tickets.jpg";
import leftUp from "../../assets/about/man-hiking-2.jpg";
import air from "../../assets/about/f-icon-1.png";
import calander from "../../assets/about/f-icon-2.png";
import yellow from "../../assets/about/yellow-3.png";
import pink from "../../assets/about/pink-4.png";

import ficon10 from "../../assets/about/f-icon-10.png";
import ficon11 from "../../assets/about/f-icon-11.png";
import ficon12 from "../../assets/about/f-icon-12.png";
import ficon13 from "../../assets/about/f-icon-13.png";

// import { FiArrowRight } from "react-icons/fi";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import { GiHiking } from "react-icons/gi";
import { MdOutlineTravelExplore } from "react-icons/md";
import { RiTeamLine } from "react-icons/ri";
import { FiCheckCircle } from "react-icons/fi";
import { useFetchData } from "../../hooks/useFetchData";
import { TbCalendarStats } from "react-icons/tb";
import { TbArmchair2 } from "react-icons/tb";
import { GiCaptainHatProfile } from "react-icons/gi";
import { FaUserShield } from "react-icons/fa";

const About = () => {
  const { popularTour } = useFetchData();

  return (
    <>
      <div className="relative overflow-hidden bg-stone-300 -z-100">
        <div className="bg-[url('/public/brooke.jpg')] relative top-0 left-0 w-full h-[600px] bg-cover bg-center bg-fixed ">
          <div className="absolute top-0 left-0 w-full h-[600px] bg-gray-700 bg-opacity-60"></div>
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Everything About Us
          </h1>
          <p className="text-lg md:text-xl">
            The best travel agency from the last two decades
          </p>
        </div>
      </div>

      <section className="bg-stone-200 ">
        <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center justify-center gap-32 max-w-screen-xl mx-auto p-8 ">
          <div>
            <h2 className="text-3xl font-semibold mb-2">About Us</h2>
            <p>
              This is Photoshop’s version of Lorem Ipsum. Proin gravida nibh vel
              velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum
              auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.
              Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.
              Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor
              a ornare odio. Sed non mauris vitae erat consequat auctor eu in
              elit. className aptent taciti sociosqu ad litora.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-semibold mb-2">Our Mission</h2>
            <p>
              This is Photoshop’s version of Lorem Ipsum. Proin gravida nibh vel
              velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum
              auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.
              Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.
              Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor
              a ornare odio. Sed non mauris vitae erat consequat auctor eu in
              elit. className aptent taciti sociosqu ad litora.
            </p>
          </div>
        </div>
      </section>

      <section className="grid bg-stone-200">
        <div className="grid p-5 md:grid-cols-2 lg:grid-cols-4 gap-20 max-w-screen-xl mx-auto mb-20">
          <div className="text-center flex flex-col items-center justify-center">
            <p className="text-8xl mb-1">
              <GiHiking className="text-teal-500" />
            </p>
            <h2 className="text-2xl font-bold mb-1">Our Journey</h2>
            <p>
              Follow our transformative journey, from inception to innovation,
              as we chart a course through challenges
            </p>
          </div>
          <div className="text-center flex flex-col items-center justify-center">
            <p className="text-8xl mb-1">
              <MdOutlineTravelExplore className="text-teal-500" />
            </p>
            <h2 className="text-2xl font-bold mb-1">Mission & Values</h2>
            <p>
              Follow our transformative journey, from inception to innovation,
              as we chart a course through challenges
            </p>
          </div>
          <div className="text-center flex flex-col items-center justify-center">
            <p className="text-8xl mb-1">
              <RiTeamLine className="text-teal-500" />
            </p>
            <h2 className="text-2xl font-bold mb-1">Exploring the Team</h2>
            <p>
              Follow our transformative journey, from inception to innovation,
              as we chart a course through challenges
            </p>
          </div>
          <div className="text-center flex flex-col items-center justify-center">
            <p className="text-8xl mb-1">
              <FiCheckCircle className="text-teal-500" />
            </p>
            <h2 className="text-2xl font-bold mb-1">Why Choose Us</h2>
            <p>
              Follow our transformative journey, from inception to innovation,
              as we chart a course through challenges
            </p>
          </div>
        </div>
      </section>

      <div className="w-full flex justify-between mb-20 ">
        <div className="flex justify-between  mx-auto w-[78rem] mt-40 h-full ">
          <div className="w-[50rem] ">
            <div className="absolute flex ">
              <div>
                <img
                  src={yellow}
                  alt=""
                  className="w-full animate-spin align-[-0.125em] "
                />
              </div>

              <img
                src={leftDown}
                className="w-full rotate-[15deg] rounded-md"
                alt="tour"
              />
            </div>

            <div className="relative flex">
              <img
                src={leftUp}
                className="rotate-[-10deg] mt-[200px] rounded-md border-8"
                alt="tour"
              />
            </div>
            <div className="ml-60">
              <img src={pink} alt="" />
            </div>
          </div>

          <div className=" w-[40rem] h-[40rem]">
            <h5 className="  text-4xl text-left text-orange-500">
              Lets Explore the World
            </h5>
            <h2 className=" text-4xl text-black  font-bold mt-2">
              We Make Your Travel More Enjoyable
            </h2>
            <p className=" w-full leading-7 mt-10">
              Our dedicated team is committed to providing you with exceptional
              experiences, personalized itineraries, and expert guidance,
              ensuring your journey is filled with unforgettable moments.
            </p>

            <div className="flex gap-6 mt-6">
              <div className="flex gap-3  items-center">
                <img src={air} className="w-16" alt="" />
                <h2 className="font-bold">
                  Award winning tour & travel arranger
                </h2>
              </div>
              <div className="flex gap-3  items-center">
                <img src={calander} className="w-16" alt="" />
                <h2 className="font-bold">
                  Most popular booking solution provider
                </h2>
              </div>
            </div>

            <div className="mt-8">
              <ul className="leading-10">
                <li className="">Inspiring travel experiences</li>
                <li>Expertly curated itineraries</li>
                <li>Personalized guidance and support</li>
              </ul>
            </div>

            <button className="border rounded bg-orange-500 border-orange-500 p-4 mt-4 text-white hover:bg-white hover:text-orange-500 ">
              Read More
            </button>
          </div>
        </div>
      </div>

      <div className="w-full  flex justify-between ">
        <div className="flex justify-between  mx-auto w-[78rem] mt-10 mb-20 h-full ">
          <div className="w-[50rem] ">
            <div className=" w-[33rem] h-[40rem] ">
              <h5 className="  text-4xl text-left text-orange-500">
                Our Speciality
              </h5>
              <h2 className=" text-5xl leading-snug text-black font-bold mt-2">
                Your Trusted Travel Partner
              </h2>
              <div className="">
                <p className=" w-full  mt-10 mb-10 leading-7">
                  At our travel website, our speciality lies in curating
                  unforgettable experiences that cater to the unique preferences
                  of each traveler. From family vacations to solo adventures,
                  romantic getaways to group escapades, we take pride in
                  offering a diverse range of handpicked destinations and
                  carefully crafted itineraries.
                </p>
                <p className="mb-10 leading-7">
                  Our team of travel experts is dedicated to staying ahead of
                  the curve, ensuring that we bring you the latest travel trends
                  and hidden gems to explore. Whether it's seeking out
                  off-the-beaten-path activities or securing exclusive deals
                  with our trusted partners, our commitment to excellence
                  ensures that every trip planned through our platform is a
                  journey of a lifetime.
                </p>
                <p className="leading-7">
                  Our 24/7 customer service team is always at your disposal,
                  ready to address any queries or assist with last-minute
                  changes.
                </p>
              </div>
            </div>
          </div>
          <div className=" w-[40rem] h-[40rem]">
            <div className="flex mb-16 leading-7">
              <div className=" items-center">
                <img src={ficon10} className="w-16 mb-5" alt="" />
                <h2 className="font-bold  mb-5">Innovative Tour Plans</h2>
                <p>
                  Experience our innovative tour plans designed to take you off
                  the beaten path and uncover hidden gems.
                </p>
              </div>
              <div className=" items-center ml-5">
                <img src={ficon11} className="w-16 mb-5" alt="" />
                <h2 className="font-bold  mb-5">Expert Travel Guide</h2>
                <p>
                  Embark on your journey with confidence, guided by our expert
                  travel guides who share their local expertise and insider
                  knowledge.
                </p>
              </div>
            </div>
            <div className="flex gap-6 mt-6">
              <div className=" items-center leading-7">
                <img src={ficon12} className="w-16 mb-5" alt="" />
                <h2 className="font-bold mb-5">Flexible Payment Policy</h2>
                <p>
                  Travel stress-free with our flexible payment policy that
                  accommodates your needs and preferences.
                </p>
              </div>
              <div className=" items-center">
                <img src={ficon13} className="w-16 mb-5" alt="" />
                <h2 className="font-bold mb-5">High Quality Management</h2>
                <p>
                  Rest assured that your travel experience is in capable hands
                  with our high-quality management and attention to every
                  detail.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section>
        <div className="mb-10">
          <h2 className="text-3xl text-center font-bold">Our Benefit</h2>
          <hr className="bg-red-900 h-[2px] w-36  mx-auto" />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-20 max-w-screen-xl mx-auto mb-20">
          <div className="text-center flex flex-col items-center justify-center">
            <p className="text-6xl mb-1">
              <TbCalendarStats className="text-teal-500" />
            </p>
            <h2 className="text-2xl font-bold mb-1">Personal Schedule</h2>
            <p>
              The point of using Lorem Ipsum is that it has a more-or-less
              normal distribution of letters
            </p>
          </div>
          <div className="text-center flex flex-col items-center justify-center">
            <p className="text-6xl mb-1">
              <TbArmchair2 className="text-teal-500" />
            </p>
            <h2 className="text-2xl font-bold mb-1">Luxury Interiors</h2>
            <p>
              The point of using Lorem Ipsum is that it has a more-or-less
              normal distribution of letters
            </p>
          </div>
          <div className="text-center flex flex-col items-center justify-center">
            <p className="text-6xl mb-1">
              <GiCaptainHatProfile className="text-teal-500" />
            </p>
            <h2 className="text-2xl font-bold mb-1">Safe & Confidential</h2>
            <p>
              The point of using Lorem Ipsum is that it has a more-or-less
              normal distribution of letters
            </p>
          </div>
          <div className="text-center flex flex-col items-center justify-center">
            <p className="text-6xl mb-1">
              <FaUserShield className="text-teal-500" />
            </p>
            <h2 className="text-2xl font-bold mb-1">Professional Crew</h2>
            <p>
              The point of using Lorem Ipsum is that it has a more-or-less
              normal distribution of letters
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
