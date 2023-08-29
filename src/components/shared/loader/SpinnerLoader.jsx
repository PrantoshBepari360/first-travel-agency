import React from "react";
import "./Loader.css";
const SpinnerLoader = () => {
  return (
    <div className="flex justify-center items-center w-full py-5">
      <span className="loader"></span>
    </div>
  );
};

export default SpinnerLoader;
