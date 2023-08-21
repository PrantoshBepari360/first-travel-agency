import React from "react";
import featuredImg from "../../../assets/book/caleb.jpg";

const FeatureDetails = () => {
  return (
    <div className="container pt-20">
      <section className="mb-9">
        <h4 className="md:text-6xl text-4xl text-center text-orange-500 mb-2">
          We choose travel
        </h4>
        <h5 className="text-2xl text-center text-orange-500">
          -----to let our memories live------
        </h5>
      </section>
      <div className="bg-[url('/public/hill.jpg')] bg-center bg-cover bg-no-repeat bg-fixed h-72 mb-10">
        <div className="lg:flex justify-center items-center gap-8 py-10 lg:px-28 px-6 bg-slate-600 h-full bg-opacity-60">
   
            <p className="text-white font-bold mb-2 text-justify">
            Why we choose travel! We are dedicated to providing exceptional
            fitness solutions tailored to your needs. Our experienced trainers,
            state-of-the-art facilities, and personalized programs will help
            you achieve your fitness goals and embark on a journey of improved
            health and well-being.
            </p>
           
        </div>
      </div>
      <div className="bg-[url('/public/women.jpg')] bg-center bg-cover bg-no-repeat bg-fixed h-72 mb-10">
        <div className="lg:flex justify-center items-center gap-8 py-10 lg:px-28 px-6 bg-slate-600 h-full bg-opacity-60">
         
            <p className="text-white font-bold mb-2 text-justify">
              Welcome to our website! We are dedicated to providing exceptional
              fitness solutions tailored to your needs. Our experienced
              trainers, state-of-the-art facilities, and personalized br
              programs will help you achieve your fitness goals and embark on a
              journey of improved health and well-being.
            </p>
         
        </div>
      </div>
      <div className="bg-[url('/public/road.jpg')] bg-center bg-cover bg-no-repeat bg-fixed mb-10 h-72">
        <div className="lg:flex justify-center items-center gap-8 py-10 lg:px-28 px-6 bg-slate-600 h-full bg-opacity-60">
     
            <p className="text-white font-bold mb-2 text-justify">
            Why we choose travel! We are dedicated to providing exceptional
            fitness solutions tailored to your needs. Our experienced trainers,
            state-of-the-art facilities, and personalized programs will help
            you achieve your fitness goals and embark on a journey of improved
            health and well-being.
            </p>
        
        </div>
      </div>
    </div>
  );
};

export default FeatureDetails;
