import React from "react";
import TravelPackages from "../../components/TravelPackages/TravelPackages";
import contactImg from "../../assets/about/blog.jpeg";
import Banner from "../Contact/banner";

const Tours = () => {
  return (
    <>
      <Banner image={contactImg} name={"Tours...."} />
      <div className="container -z-100">
        <TravelPackages />
      </div>
    </>
  );
};

export default Tours;
