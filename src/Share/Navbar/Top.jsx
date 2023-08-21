import React from "react";
import LangDrop from "./LangDrop/LangDrop";
import { HiPhone } from "react-icons/hi";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiFillLinkedin,
  AiOutlineGithub,
  AiOutlineDribbbleSquare,
} from "react-icons/ai";
import { useAuth } from "../../hooks/useAuth";
import { Link } from "react-router-dom";

const Top = () => {
  const { user, logOut } = useAuth();
  return (
    <div className="bg-topColor">
      <div className="w-[90%] mx-auto hidden md:flex items-center justify-between pt-2 px-6 pb-14">
        <div className="flex">
          <h3 className="text-white mr-6 ">Follow us :</h3>
          <ul className="flex">
            <li>
              <a
                href="https://www.facebook.com/"
                className="text-white hover:text-black"
              >
                <AiOutlineFacebook className="w-6 h-6 mr-4 color-white " />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/"
                className="text-white hover:text-black"
              >
                <AiOutlineInstagram className="mr-4 w-6 h-6 " />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/"
                className="text-white hover:text-black"
              >
                <AiFillLinkedin className="mr-4 w-6 h-6" />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/PrantoshBepari360/first-travel-agency"
                className="text-white hover:text-black"
              >
                <AiOutlineGithub className="mr-4 w-6 h-6" />
              </a>
            </li>
            <li>
              <a
                href="https://dribbble.com/shots"
                className="text-white hover:text-black"
              >
                <AiOutlineDribbbleSquare className="mr-4 w-6 h-6" />
              </a>
            </li>
          </ul>

          <a
            href="tel:+880 1740-354026"
            className="text-white hover:text-black flex items-center cursor-pointer"
          >
            {<HiPhone className="mr-2" />}
            <span>+880 1740-354026</span>
          </a>
        </div>

        <div className="flex">
          <LangDrop />
          <div className="ml-3">
            {user?.email ? (
              <button
                onClick={logOut}
                className="text-base font-medium text-white hover:text-black"
              >
                Sign out
              </button>
            ) : (
              <Link to="/login">
                <button className="text-base font-medium text-white hover:text-black">
                  Sign in
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top;
