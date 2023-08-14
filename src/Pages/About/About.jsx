import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { GiHiking } from "react-icons/gi";
import { MdOutlineTravelExplore } from "react-icons/md";
import { RiTeamLine } from "react-icons/ri";
import { FiCheckCircle } from "react-icons/fi";
import "./About.css";

const About = () => {
  const [popularTour, setPopularTour] = useState([]);

  useEffect(() => {
    fetch("PopularDestinations.json")
      .then((res) => res.json())
      .then((data) => setPopularTour(data));
  }, []);
  return (
    <div className="w-11/12 mx-auto sm:w-11/12 md:w-10/12 lg:w-9/12">
      <h2>This is About page</h2>
    </div>
  );
};

export default About;
