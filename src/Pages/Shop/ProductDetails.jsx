import React from "react";
import { useParams } from "react-router-dom";
import { useFetchData } from "../../hooks/useEffect";

const ProductDetails = () => {
  const { data } = useFetchData("/shop.json");

  const { id } = useParams();
  const details = data?.find((item) => item.id === Number(id));

  return (
    <>
      <div className="bg-[url('/src/assets/shop/shop.jpg')] bg-center bg-cover bg-no-repeat  h-96 bg-fixed mb-10 relative -z-10">
        <div className="py-10 lg:px-28 px-6 bg-slate-600 bg-opacity-80  h-96 text-center">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-10">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 ">
              Shop Details
            </h1>
            <p className="text-lg md:text-xl">Details About the product</p>
          </div>
        </div>
      </div>
      <section className="container">
        <div className="px-5 py-20">
          <div className="md:flex items-center gap-10">
            <div className="w-full">
              <img
                alt="ecommerce"
                className="w-full md:w-3/4 object-cover object-center rounded"
                src={details?.image}
              />
            </div>
            <div className="w-full">
              <h1 className="text-4xl font-bold py-5">{details?.name}</h1>
              <p className="text-gray-900 text-3xl title-font font-medium">
                $ {details?.price}
              </p>

              <div className="flex gap-5 py-5">
                <div>
                  <span className="mr-2"> - </span>
                  <input
                    type="number"
                    className="p-2 border border-rounded text-center w-16"
                  />
                  <span className="ml-2"> + </span>
                </div>

                <button className="p-2 font-semibold border rounded text-blue-800 border-blue-400 hover:bg-blue-500 hover:text-white hover:border-none">
                  Add to Cart
                </button>
              </div>

              <h3 className="mt-5 text-gray-400 text-xl title-font font-medium">
                category:{details?.category}
              </h3>
            </div>
          </div>
          <p className="mt-10">{details?.description}</p>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
