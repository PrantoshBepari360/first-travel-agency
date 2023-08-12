import React, { useState } from "react";

const TravelForm = ({ details }) => {
  return (
    <div className="py-4">
      <form className="bg-slate-100 flex flex-col md:flex-row justify-between flex-wrap gap-2 shadow rounded py-6 px-6">
        <div className="mb-4">
          <label
            htmlFor="destination"
            className="block text-gray-700 font-bold mb-2"
          >
            Destination
          </label>
          <input
            type="text"
            id="destination"
            placeholder={details}
            className="w-full border-2 rounded py-3 px-3 focus:outline-none "
            required
            disabled
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="checkIn"
            className="block text-gray-700 font-bold mb-2"
          >
            Check in
          </label>
          <input
            type="date"
            id="checkIn"
            className="w-full border-2 rounded py-3 px-3 focus:outline-none "
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="checkOut"
            className="block text-gray-700 font-bold mb-2"
          >
            Check out
          </label>
          <input
            type="date"
            id="checkOut"
            className="w-full border-2 rounded py-3 px-3 focus:outline-none "
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="guests"
            className="block text-gray-700 font-bold mb-2"
          >
            Guests
          </label>
          <input
            type="number"
            id="guests"
            placeholder="Guests"
            className="w-full border-2 rounded py-3 px-3 focus:outline-none "
            required
          />
        </div>
      </form>
    </div>
  );
};

export default TravelForm;
