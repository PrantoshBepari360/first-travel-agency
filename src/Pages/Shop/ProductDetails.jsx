import React from "react";
import { useParams } from "react-router-dom";
import { useFetchData } from "../../hooks/useEffect";

const ProductDetails = () => {
  const { data } = useFetchData("/shop.json");

  const { id } = useParams();
  const details = data?.find((item) => item.id === Number(id));

  return (
    <>
      <div className="bg-[url('/src/assets/shop/shop.jpg')] bg-center bg-cover bg-no-repeat  h-96 bg-fixed mb-10 relative">
        <div className="py-10 lg:px-28 px-6 bg-slate-600 bg-opacity-80  h-96 text-center">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-10">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 ">
              Shop Details
            </h1>
            <p className="text-lg md:text-xl">Details About the product</p>
          </div>
        </div>
      </div>
      <section className=" container overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src={details?.image}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-4xl font-bold mb-2">{details?.name}</h2>
              <h3 className="text-gray-900 text-3xl title-font font-medium mb-1">
                ${details?.price}
              </h3>

              <div className="lg:mt-10 m-5">
                <span className="mr-2">-</span>
                <input
                  type="number"
                  className="p-2 border border-rounded text-center w-10 "
                  value="1"
                />
                <span className="ml-2">+</span>

                <button className="w-40 ml-10 p-2 font-semibold border rounded text-blue-800 border-blue-400 hover:bg-blue-500 hover:text-white hover:border-none z-">
                  Add to Cart
                </button>
              </div>
              <h3 className="text-gray-400 mt-5 lg:mt-10 text-xl title-font font-medium mb-1">
                category:{details?.category}
              </h3>
            </div>
          </div>
          <p className="mt-5">{details?.description}</p>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
