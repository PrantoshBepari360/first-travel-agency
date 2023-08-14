import React from "react";
import leftDown from '../../assets/about/tickets.jpg'
import leftUp from '../../assets/about/man-hiking-2.jpg'
import air from '../../assets/about/f-icon-1.png'
import calander from '../../assets/about/f-icon-2.png'
import yellow from '../../assets/about/yellow-3.png'
import pink from '../../assets/about/pink-4.png'

// import { FiArrowRight } from "react-icons/fi";






const About = () => {
  return (
    // sm:w-11/12 md:w-10/12 lg:w-9/12
    <div className="w-full  flex justify-between border-t-2 ">

      <div className="flex justify-between  mx-auto w-[78rem] mt-40 h-full ">
        <div className="w-[50rem] ">
          {/* <div className="mr-20">
            <img src={yellow} alt="" />
          </div> */}
          {/* h-auto rounded-lg */}
          <div className="absolute flex ">
            <div>
            <img src={yellow} alt="" className="w-full animate-spin align-[-0.125em] " />
            </div>
           
            <img src={leftDown} className="w-full rotate-[15deg] rounded-md" alt="tour" />
          </div>

          <div className="relative flex">
            <img src={leftUp} className=" mt-[98px] rotate-[-10deg] mt-[200px] rounded-md border-8" alt="tour" />

           
          </div>
          <div className="ml-60">
              <img src={pink} alt="" />
            </div>

        </div>



        <div className=" w-[40rem] h-[40rem]">
          {/* w-full sm:w-1/2 lg:w-3/5 */}
          <h5 className="  text-4xl text-left text-orange-500">
            {/* md:text-4xl */}
            Lets Explore the World
          </h5>
          <h2 className=" text-4xl text-black  font-bold mt-2">
            We Make Your Travel More Enjoyable
          </h2>
          <p className=" w-full leading-7 mt-10">
            {/* text-lg text-justify */}
            Our dedicated team is committed to providing you with exceptional experiences,
            personalized itineraries, and expert guidance,
            ensuring your journey is filled with unforgettable moments.
          </p>



          <div className="flex gap-6 mt-6">
            <div className="flex gap-3  items-center">
              <img src={air} className="w-16" alt="" />
              <h2 className="font-bold">Award winning tour & travel arranger</h2>
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


          <button className="border bg-orange-500  p-4 mt-10  hover:bg-white border-orange-500 text-orange-500">Read More</button>
            {/* border-orange-500  */}
        </div>
      </div>
    </div>
  );
};

export default About