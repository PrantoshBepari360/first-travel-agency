import  { useEffect, useState } from "react";

export const useFetchData = () => {
  const [loading, setLoading] = useState(false);
  const [packages, setPackages] = useState([]);


  useEffect(() => {
    setLoading(true);
    fetch("/TravelPackages.json")
      .then((res) => res.json())
      .then((data) => setPackages(data))
      .finally(() => setLoading(false));
  }, []);

  return {
    loading,
    packages,
  };
};
