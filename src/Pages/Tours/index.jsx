import React from "react";
// import contactImg from "../../../assets/about/blog.jpeg";
// import Banner from "../contacts/Banner";
import TourPackages from "./tourPackages/TourPackages";

const Tours = () => {
  return (
    <>
      {/* <Banner image={contactImg} name={"Tours...."} /> */}
      <div className="container -z-100 pb-16">
        <TourPackages />
      </div>
    </>
  );
};

export default Tours;
