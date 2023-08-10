import React from "react";

const BackgroundVideo = () => {
  return (
    <div className="relative  h-screen">
      <video
        className="absolute rounded top-0 left-0 object-cover w-full h-full"
        autoPlay
        loop
        muted
      >
        <source src="BackgroundImage.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 rounded bg-black opacity-50"></div>
      <div className="absolute inset-0  px-5 flex flex-col justify-center items-center text-white">
        <h1 className="lg:text-7xl text-4xl font-bold mb-4">
          WelCome To The Travel
        </h1>
        <p className="text-xl">
          Embrace the journey; Travel with passion and purpose.
        </p>
      </div>
    </div>
  );
};

export default BackgroundVideo;
