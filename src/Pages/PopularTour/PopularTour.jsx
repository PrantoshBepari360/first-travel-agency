import React, { useEffect, useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
// import {  Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import "../PopularTour/Popular.css"
const PopularTour = () => {
 const [popularTour,setPopularTour] = useState([])

 useEffect( () => {
        fetch("PopularDestinations.json")
        .then(res =>res.json())
        .then(data => setPopularTour(data))
 } ,[] )
    return (
        <div className="py-8">
      <div className="container">
        <h2 className="lg:text-4xl text-xl text-center mb-12 font-semibold text-[#4e5050] ">Popular Destinations</h2>
        <Swiper
          // modules={[Pagination,Autoplay]} 
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
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                1024: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
          }}
        >
          {popularTour.map((destination,index) => (
            <SwiperSlide key={index}>
              <div className="overflow-hidden  rounded relative group cursor-pointer">
                <img
                  src={destination.image}
                  className="w-full h-auto object-cover"
                  
                />
                <div className="p-4 opacity-0 group-hover:opacity-50 delay-75	absolute  inset-0 bg-slate-800 ">
                  <h3 className="font-semibold bottom-2 left-4  absolute mb-2  text-white text-3xl">{destination.name}</h3>
               
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
    );
};

export default PopularTour;