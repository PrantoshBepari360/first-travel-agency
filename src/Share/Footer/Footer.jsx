import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import ScrollToTopButton from "./ScrollToTopButton ";

const Footer = () => {
  return (
    <div className="w-11/12 mx-auto sm:w-11/12 md:w-10/12 lg:w-9/12">
      <footer className="py-8">
        <div className="mx-auto pb-8 flex flex-wrap justify-between">
          <div className="w-full sm:w-1/2 md:w-1/4">
            <h3 className="footer_title">Travel Agency</h3>
            <ul className="">
              <li className=" flex items-center gap-2">
                <MdLocationOn className="h-5 w-5"></MdLocationOn>{" "}
                <span className="text-[18px] text-[#575757]">
                  Awesome Road, New York, Usa
                </span>
              </li>

              <li className="text-[16px] flex items-center   gap-2 pt-3">
                <BsFillTelephoneFill className="h-4 w-4"></BsFillTelephoneFill>{" "}
                <span className="text-[18px] text-[#575757]">
                  +1 (123) 456-7890
                </span>{" "}
              </li>

              <li className="text-[16px] flex items-center cursor-pointer gap-2 pt-3">
                {" "}
                <MdEmail className="h-5 w-5"></MdEmail>
                <span className="text-[18px] text-[#575757]">
                  info@travelagency.com
                </span>
              </li>

              <div className="flex gap-3 cursor-pointer mt-4">
                <li className="h-[40px] w-[40px] rounded-sm bg-slate-800  flex items-center justify-center">
                  <FaFacebookF className="h-5 w-5 text-white"></FaFacebookF>
                </li>
                <li className="h-[40px] w-[40px] rounded-sm bg-slate-800  flex items-center justify-center">
                  <FaInstagram className="h-5 w-5 text-white"></FaInstagram>
                </li>
                <li className="h-[40px] w-[40px] rounded-sm bg-slate-800  flex items-center justify-center">
                  <FaTwitter className="h-5 w-5 text-white"></FaTwitter>
                </li>
                <li className="h-[40px] w-[40px] rounded-sm bg-slate-800  flex items-center justify-center">
                  <FaYoutube className="h-5 w-5 text-white"></FaYoutube>
                </li>
              </div>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4 lg:ps-6">
            <h3 className="footer_title">Top Destination</h3>
            <ul className="">
              <li>
                <a className="footer_small_title" href="#">
                  New York
                </a>
              </li>
              <li className="pt-1">
                <a className="footer_small_title" href="#">
                  USA
                </a>
              </li>
              <li className="pt-1">
                <a className="footer_small_title" href="#">
                  India
                </a>
              </li>
              <li className="pt-1">
                <a className="footer_small_title" href="#">
                  Bangladesh
                </a>
              </li>
              <li className="pt-1">
                <a className="footer_small_title" href="#">
                  Australia
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4">
            <h3 className="footer_title">Useful Links</h3>
            <ul className="text-gray-400">
              <li>
                <a className="footer_small_title" href="#">
                  About Us
                </a>
              </li>
              <li className="pt-1">
                <a className="footer_small_title" href="#">
                  Company Profile
                </a>
              </li>
              <li className="pt-1">
                <a className="footer_small_title" href="#">
                  Team Members
                </a>
              </li>
              <li className="pt-1">
                <a className="footer_small_title" href="#">
                  Support
                </a>
              </li>
              <li className="pt-1">
                <a className="footer_small_title" href="#">
                  Career
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4">
            <h3 className="footer_title">Newsletter</h3>
            <p className="footer_small_title ">
              Subscribe to our newsletter for the latest updates.
            </p>
          </div>
        </div>
        <div className="text-black container pt-6 border-t-2">
          <div className="mx-auto text-center lg:text-lg">
            <p>&copy; 2023 By Travel Agency. All rights reserved.</p>
          </div>
        </div>
        <ScrollToTopButton />
      </footer>
    </div>
  );
};

export default Footer;
