import React from "react";
import LangDrop from "./LangDrop/LangDrop";
import { HiPhone } from "react-icons/hi";
import { useAuth } from "../../hooks/useAuth";
import { Link } from "react-router-dom";
import SocialMedia from "../../reuse/SocialMedia";


const Top = () => {
  const { user, logOut } = useAuth();
  return (
    <div className="bg-topColor">
      <div className="w-[90%] mx-auto hidden md:flex items-center justify-between pt-2 px-6 pb-14">
        <div className="flex">
          <h3 className="text-white mr-6 ">Follow us :</h3>

          <SocialMedia className="w-10 h10"/>

          <p className="text-white hover:text-black flex items-center cursor-pointer">
            {<HiPhone className="mr-2" />}
            <span>+880 1740-354026</span>
          </p>
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
