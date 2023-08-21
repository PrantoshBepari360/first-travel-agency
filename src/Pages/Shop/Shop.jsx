import React from "react";
import { useFetchData } from "../../hooks/useEffect";
import Product from "./Product";
import PackagesCard from "../../components/TravelPackages/PackagesCard";

const Shop = () => {
  const{data}=useFetchData('/shop.json');

  return (
    <>
      <div className="bg-[url('/src/assets/shop/shop.jpg')] bg-center bg-cover bg-no-repeat  h-96 bg-fixed mb-10 relative">
        <div className="py-10 lg:px-28 px-6 bg-slate-600 bg-opacity-80  h-96 text-center">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-10">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 ">
              Welcome to our shop
            </h1>
            <p className="text-lg md:text-xl">
              TO make your journey easier with our Special Products
            </p>
          </div>
        </div>
      </div>

      <section className="max-w-screen-xl mx-auto">
        <div className="p">
          <h2 className="text-center text-orange-900 text-4xl">SHOP</h2>
          <hr className="w-28 mx-auto h-1 bg-blue-500" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {data.map(shop => (
            // <Product key={shop.id} shop={shop} />
             <PackagesCard key={shop.id} id={shop.id} name={shop.name} price={ `$ ${shop.price} `} image={shop.image} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Shop;
