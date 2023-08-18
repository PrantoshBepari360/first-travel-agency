import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import ScrollToTopButton from "./ScrollToTopButton ";
import { Link } from "react-router-dom";

const inputStyle = {
  width: "100%",
  fontSize: "21px",
  backgroundColor: "white",
  padding: "15px",
  margin: "0px",
  border: "0px",
  outline: "0px",
};

const buttonStyle = {
  borderTop: "0px",
  borderRight: "0px",
  borderBottom: "0px",
  backgroundColor: "white",
  fontSize: "20px",
  cursor: "pointer",
  padding: "15px",
  margin: "0px",
  outline: "0px",
};

const Footer = () => {
  return (
    <div className="bg-footer text-white">
      <footer className="container">
        <div className="grid grid-cols-1 gap-4 py-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col px-3">
            <p className="mb-4">Travel Agency</p>
            <hr className="mb-2" />
            <Link to="/" className="mb-2 hover:underline">
              Awesome Road, New York, Usa
            </Link>
            <Link to="/" className="hover:underline mb-2 flex items-center">
              <BsFillTelephoneFill className="w-5 h-5 mr-2"></BsFillTelephoneFill>
              +1 (123) 456-7890
            </Link>
            <Link to="/" className="mb-2 hover:underline flex items-center">
              <MdLocationOn className="w-5 h-5 mr-2"></MdLocationOn>
              info@travelagency.com
            </Link>
          </div>
          <div className="flex flex-col px-3">
            <p className="mb-4">Top Destination</p>
            <hr className="mb-2" />
            <Link to="/pricing2" className="mb-2 hover:underline">
              New York
            </Link>
            <Link to="/pricing" className="mb-2 hover:underline">
              USA
            </Link>
            <Link to="/pricing4" className="mb-2 hover:underline">
              India
            </Link>
            <Link to="/pricing4" className="mb-2 hover:underline">
              Bangladesh
            </Link>
            <Link to="/pricing4" className="mb-2 hover:underline">
              Australia
            </Link>
          </div>
          <div className="flex flex-col px-3">
            <p className="mb-4">CUseful Links</p>
            <hr className="mb-2" />
            <p className="mb-2">About Us</p>
            <p className="mb-2">Company Profile</p>
            <a className="mb-2 flex items-center" href="tel:+8801518331287">
              {/ <i className="fa-solid fa-phone mr-2"></i>{" "} /}
              <span className="hover:underline">Team Members</span>
            </a>
            <a className="mb-2 flex items-center" href="tel:+8801518331287">
              <span className="hover:underline">Support</span>
            </a>
            <a className="mb-2 flex items-center" href="tel:+8801518331287">
              <span className="hover:underline">Career</span>
            </a>
          </div>
          <div className="flex flex-col px-3">
            <p className="mb-4">Newslette</p>
            <hr className="mb-2" />
            <a className="mb-2 flex items-center" href="tel:+8801833078059">
              <span className="hover:underline">Newsletter</span>
            </a>
            <a href="">
              <span className="hover:underline">updates.</span>
            </a>
            <a href="">
              <span className="hover:underline">
                Subscribe to our newsletter
              </span>
            </a>
          </div>
        </div>

        <div className="text-black w-1/2  flex items-end">
          <input type="email" style={inputStyle} />
          <button style={buttonStyle}>Subscribe</button>
        </div>

        <div className="text-white container pt-6 border-t-2">
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