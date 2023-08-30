import React from "react";

const Modal = ({ tour, closeModal }) => {
  return (
    <>
      <div className="fixed top-0 right-0 bottom-0 left-0 bg-black opacity-70"></div>
      <div className="container fixed top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-100">
        <div className="w-full grid grid-cols-12">
          <div className="col-span-12 md:col-span-6">
            <img
              className="w-full h-full md:rounded-l-2xl"
              src={tour.image}
              alt="Modal Image"
            />
          </div>
          <div className="col-span-12 md:col-span-6 px-5 bg-gray-300 md:rounded-r-2xl">
            <div className="flex py-5">
              <h1 className="text-xl font-bold">{tour.name}</h1>
              <button
                className="ml-auto px-2 py-1 border rounded border-gray-400 bg-gray-400 text-gray-800 hover:border-gray-500 hover:bg-gray-500 hover:text-gray-300"
                onClick={closeModal}
              >
                close
              </button>
            </div>
            <p className="text-justify pb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              dolorem, nisi corrupti corporis sit inventore id quisquam enim
              laboriosam voluptatibus vel placeat iste unde? Fugit accusamus
              aliquid ratione minus assumenda? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Incidunt dolorem, nisi corrupti
              corporis sit inventore id quisquam enim laboriosam voluptatibus
              vel placeat iste unde? Fugit accusamus aliquid ratione minus
              assumenda?
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
