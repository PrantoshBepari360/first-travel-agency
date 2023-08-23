import React from "react";
import { Link } from "react-router-dom";

const PackagesCard = (props) => {
  const { image, name, visited, title, review, reviewPeople, id, price, user } =
    props;

    

  return (
    <div className="p-4 border border-gray-300 rounded-md hover:border-[#00BDBB] shadow-md hover:shadow-[#00BDBB]">
      <div>
        <img
          alt={name}
          className="object-cover object-center w-full h-full rounded-lg "
          src={image}
        />
      </div>

      <div className="mt-4 flex justify-between items-center mb-1">
        <h1 className=" text-lg font-bold">{name}</h1>
        {/* <TilteParaReuse heading3={name} /> */}

        <div className="flex gap-2 items-center justify-center ">
          {user}
          <p className="mt-1">{visited}</p>
          <p className=" text-lg font-bold">{reviewPeople}</p>
          <p className="mt-1">{review}</p>

          <p className="mt-1">{price}</p>
        </div>
      </div>
      <p className=" text-lg font-bold mb-2">{title}</p>
      {/* <TilteParaReuse heading4={title} /> */}
      <hr className="mb-1" />

      {visited || reviewPeople ? (
        <Link to={`/tourDetails/${id}`}>
          <button className="w-full mt-2 p-2 font-semibold border rounded text-[#298280] border-[#00BDBB] hover:bg-[#3aa4a2] hover:text-white hover:border-none ">
            See Details
          </button>
        </Link>
      ) : (
        <Link to={`/product/${id}`}>
          <button className="w-full mt-2 p-2 font-semibold border rounded text-[#298280] border-[#00BDBB] hover:bg-[#3aa4a2] hover:text-white hover:border-none ">
            Details
          </button>
        </Link>
      )}
    </div>
  );
};

export default PackagesCard;
