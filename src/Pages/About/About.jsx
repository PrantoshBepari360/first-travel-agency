import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import { GiHiking } from "react-icons/gi";
import { MdOutlineTravelExplore } from "react-icons/md";
import { RiTeamLine } from "react-icons/ri";
import { FiCheckCircle } from "react-icons/fi";
import { TbCalendarStats } from "react-icons/tb";
import { TbArmchair2 } from "react-icons/tb";
import { GiCaptainHatProfile } from "react-icons/gi";
import { FaUserShield } from "react-icons/fa";
import "./About.css";

const About = () => {
  const [popularTour, setPopularTour] = useState([]);

  useEffect(() => {
    fetch("PopularDestinations.json")
      .then((res) => res.json())
      .then((data) => setPopularTour(data));
  }, []);
  return (
    <>
      <div className="parallax-co relative overflow-hidden bg-stone-300 -z-100">
        <div className="parallax-image absolute top-0 left-0 w-full h-[600px] bg-cover bg-center z-0 bgImg bg-fixed">
          <div className="overlay"></div> {/* Color overlay */}
        </div>
        <div className="parallax-content absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Everything About Us
          </h1>
          <p className="text-lg md:text-xl">
            The best travel agency from the last two decades
          </p>
        </div>
      </div>

      <section className="bg-stone-300 mb-20 ">
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

      <section>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-20 max-w-screen-xl mx-auto mb-20">
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

      <section className="mb-9  max-w-screen-xl mx-auto">
        <h2 className="md:text-3xl text-2xl font-bold mb-2">
          Recommended travel for you
        </h2>
        <h2 className="text-xl  ">-----Best places of the world------</h2>

        <div>
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
            {popularTour?.map((destination) => (
              <SwiperSlide key={destination?.id}>
                <div className="overflow-hidden relative group cursor-pointer rounded-xl">
                  <img
                    src={destination.image}
                    className="w-full h-auto object-cover"
                  />
                  <div className="p-4 opacity-0 group-hover:opacity-50 delay-75	absolute  inset-0 bg-slate-800 ">
                    <h3 className="font-semibold bottom-2 left-4  absolute mb-2  text-white text-3xl">
                      {destination.name}
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <section>
        <div className="mb-10">
          <h2 className="text-3xl text-center font-bold">Our Benefit</h2>
          <hr className="bg-red-900 h-2 w-20  mx-auto" />
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
