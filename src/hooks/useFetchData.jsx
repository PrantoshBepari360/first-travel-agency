import React, { useEffect, useState } from "react";

export const useFetchData = () => {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    fetch("/TravelPackages.json")
      .then((res) => res.json())
      .then((data) => setPackages(data));
  }, []);

  return {
    packages,
  };
};
