import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ shop }) => {
  const { id, name, price, image } = shop;

  return (
    <div className="p-4 border border-gray-300 rounded-md hover:border-blue-400 shadow-md hover:shadow-blue-400">
      <Link to={`/product/${id}`} className="block">
        {/* Wrap the entire card with the Link */}
        <div className="  rounded">
          <img alt={name} className="object-cover object-center w-full h-full " src={image} />
        </div>
        <div className="mt-4 flex justify-between">
          <h2 className="text-gray-900 text-lg font-bold">{name}</h2>
          <p className="mt-1">${price.toFixed(2)}</p>
        </div>
        <hr />
    
      </Link>
      <button className="w-full mt-2 p-2 font-semibold border rounded text-blue-800 border-blue-400 hover:bg-blue-500 hover:text-white hover:border-none z-">
          Add to Cart
        </button>
    </div>
  );
};

export default Product;
