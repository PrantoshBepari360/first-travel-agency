import React, { useEffect, useState } from "react";

export const useFetchData = () => {
  const [packages, setPackages] = useState([]);
  const [popularTour, setPopularTour] = useState([]);

  useEffect(() => {
    fetch("/TravelPackages.json")
      .then((res) => res.json())
      .then((data) => setPackages(data));
  }, []);

  useEffect(() => {
    fetch("PopularDestinations.json")
      .then((res) => res.json())
      .then((data) => setPopularTour(data));
  }, []);

  return {
    packages,
    popularTour,
  };
};
