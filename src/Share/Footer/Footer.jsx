import React from "react";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import ScrollToTopButton from "./ScrollToTopButton ";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const Footer = () => {
  const { user } = useAuth();
  return (
    <div className="bg-footer text-white">
      <footer className="container">
        <div className="grid grid-cols-1 gap-4 py-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col px-3">
            <p className="mb-4">Travel Agency</p>
            <hr className="mb-2" />
            <span className="mb-2">Uttora Road Dhaka</span>
            <span className="mb-2">Bangladesh-1200</span>
            <Link
              rel="noopener noreferrer"
              target="_blank"
              to="https://api.whatsapp.com/send?phone=8801833078059"
              className="hover:underline mb-2 flex items-center"
            >
              <BsFillTelephoneFill className="w-5 h-5 mr-2"></BsFillTelephoneFill>
              +880 1833-078059
            </Link>
            <Link
              rel="noopener noreferrer"
              target="_blank"
              to="https://mail.google.com"
              className="mb-2 hover:underline flex items-center"
            >
              <MdEmail className="w-5 h-5 mr-2"></MdEmail>
              bepariprantosh@gmail.com
            </Link>
          </div>
          <div className="flex flex-col px-3">
            <p className="mb-4">Top Destination</p>
            <hr className="mb-2" />
            <Link to="/" className="mb-2 hover:underline">
              Bangladesh
            </Link>
            <Link to="/" className="mb-2 hover:underline">
              New York
            </Link>
            <Link to="/" className="mb-2 hover:underline">
              USA
            </Link>
            <Link to="/" className="mb-2 hover:underline">
              India
            </Link>
          </div>
          <div className="flex flex-col px-3">
            <p className="mb-4">CUseful Links</p>
            <hr className="mb-2" />
            <Link to="/" className="mb-2 flex items-center">
              <span className="hover:underline">About Us</span>
            </Link>
            <Link to="/" className="mb-2 flex items-center">
              <span className="hover:underline">Company Profile</span>
            </Link>
            <Link to="/" className="mb-2 flex items-center">
              <span className="hover:underline">Team Members</span>
            </Link>
            <Link to="/" className="mb-2 flex items-center">
              <span className="hover:underline">Support</span>
            </Link>
          </div>
          <div className="flex flex-col px-3">
            <p className="mb-4">Newslette</p>
            <hr className="mb-2" />
            <Link to="/" className="mb-2 flex items-center">
              <span className="hover:underline">Newsletter</span>
            </Link>
            <Link to="/" className="mb-2 flex items-center">
              <span className="hover:underline">New Places</span>
            </Link>
            <Link to="/" className="mb-2 flex items-center">
              <span className="hover:underline">updates</span>
            </Link>
            <Link to="/" className="mb-2 flex items-center">
              <span className="hover:underline">
                Subscribe to our newsletter
              </span>
            </Link>
          </div>
        </div>

        <div className="text-black w-full md:w-3/4 lg:w-1/2 mx-auto flex">
          <input
            type="email"
            placeholder={user?.email ? user?.email : "jhondo@gmail.com"}
            className="w-full text-xl bg-white px-3 py-3 outline-none border-r-2 border-gray-400 rounded-l-md"
          />
          <button className="text-xl bg-white px-3 py-3 outline-none border-r-2 rounded-r-md ">
            Subscribe
          </button>
        </div>

        <div className="text-white container pt-6 ">
          <div className="mx-auto text-center lg:text-lg">
            <p>&copy; 2023 By Travel Agency. All rights reserved.</p>
          </div>
        </div>

        <ScrollToTopButton />
      </footer>{" "}
      *
    </div>
  );
};

export default Footer;