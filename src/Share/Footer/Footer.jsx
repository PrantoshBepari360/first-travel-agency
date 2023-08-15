import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import ScrollToTopButton from "./ScrollToTopButton ";

const Footer = () => {
  return (
    <div className="bg-footer  ">

      <footer className=" ">
        <div className="w-[78rem]  text-white mx-auto ">
          <div className="flex justify-between  text-white mx-auto ">
            <div className="">
              <h2 className="text-2xl  mb-5">Travel Agency</h2>

              <ul className="list-none">
                <li className="mb-5">Awesome Road, New York, Usa</li>  

                <div className="flex mb-5">
                  <BsFillTelephoneFill className="w-5 h-5"></BsFillTelephoneFill><li className="ml-4">+1 (123) 456-7890</li>
                </div>


                <div className="flex mb-5">
                  <MdLocationOn  className="w-5 h-5" ></MdLocationOn><li className=" ml-4">info@travelagency.com</li>
                </div>


                <div className="flex list-none mb-5">
                  <li> <FaFacebookF className=" text-white rounded-3xl bg-blue-600 w-[3rem] h-[3rem]  ml-3"></FaFacebookF></li>
                  <li><FaInstagram className="text-white rounded-3xl bg-red-800  w-[3rem] h-[3rem] ml-3"></FaInstagram></li>
                  <li><FaTwitter className="text-white rounded-3xl bg-blue-800   w-[3rem] h-[3rem] ml-3"></FaTwitter></li>
                  <li><FaYoutube className="text-white rounded-3xl bg-red-600  w-[3rem] h-[3rem] ml-3"></FaYoutube></li>

                </div>

              </ul>
            </div>

            <div className="">
              <h2 className="text-2xl  mb-5 ">Top Destination</h2>
              <h3>New York</h3>
              <h3>USA</h3>
              <h3>India</h3>
              <h3>Bangladesh</h3>
              <h3>Australia</h3>
            </div>


            <div className="mr-0">
              <h2 className="text-2xl  mb-5"> Useful Links</h2>
              <h3>About Us</h3>
              <h3>Company Profile</h3>
              <h3>Team Members</h3>
              <h3>Support</h3>
              <h3>Career</h3>

            </div>
            <div className="">
              <h2 className="text-2xl mb-5">Newslette</h2>
              <p>Newsletter</p>
              <p>
                Subscribe to our newsletter for the latest updates.
              </p>


            </div>



          </div>


          {/* <div className="w-full">
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



          <div className="w-full">
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


          <div className="w-full">
            <h3 className="footer_title">Newsletter</h3>
            <p className="footer_small_title ">
              Subscribe to our newsletter for the latest updates.
            </p>
          </div>  */}
        </div>


        <div className="text-white container pt-6 border-t-2">
          <div className="mx-auto text-center lg:text-lg">
            <p>&copy; 2023 By Travel Agency. All rights reserved.</p>
          </div>
        </div>


        <ScrollToTopButton />
      </footer> *
    </div>
  );
};

export default Footer;




// <div className=" ">
//           <h3 className="footer_title">Travel Agency</h3>
//           <ul className="">
//             <li className=" ">
//               <MdLocationOn className=""></MdLocationOn>{" "}
//               <span className="text-[18px] text-[#575757]">
//                 Awesome Road, New York, Usa
//               </span>
//             </li>

//             <li className="text-[16px]">
//               <BsFillTelephoneFill className=""></BsFillTelephoneFill>{" "}
//               <span className="text-[18px] text-[#575757]">
//                 +1 (123) 456-7890
//               </span>{" "}
//             </li>

//             <li className="text-[16px] ">
//               {" "}
//               <MdEmail className=""></MdEmail>
//               <span className="text-[18px] text-[#575757]">
//                 info@travelagency.com
//               </span>
//             </li>

//             <div className="flex gap-3 cursor-pointer mt-4">
//               <li className="h-[40px] w-[40px] rounded-3xl bg-slate-800  flex items-center justify-center">
//                 <FaFacebookF className=" text-white"></FaFacebookF>
//               </li>
//               <li className="h-[40px] w-[40px] rounded-3xl bg-slate-800  flex items-center justify-center">
//                 <FaInstagram className="text-white"></FaInstagram>
//               </li>
//               <li className="h-[40px] w-[40px] rounded-3xl bg-slate-800  flex items-center justify-center">
//                 <FaTwitter className="text-white"></FaTwitter>
//               </li>
//               <li className="h-[40px] w-[40px] rounded-3xl bg-slate-800  flex items-center justify-center">
//                 <FaYoutube className="text-white"></FaYoutube>
//               </li>
//             </div>
//           </ul>
//         </div>



