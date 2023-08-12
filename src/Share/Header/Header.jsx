import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo/logo.png";
import { useAuth } from "./../../components/useProvider/useAuth";

const Navlinks = [
  {
    id: "1",
    href: "/home",
    label: "Home",
  },
  {
    id: "2",
    href: "/about",
    label: "About",
  },
  {
    id: "3",
    href: "/services",
    label: "Services",
  },
  {
    id: "4",
    href: "/blog",
    label: "Blog",
  },
  {
    id: "5",
    href: "/contact",
    label: "Contact",
  },
  {
    id: "5",
    href: "/explore",
    label: "Explore",
  },
];

const Header = () => {
  const { user, logOut } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const openMobileMenu = () => setIsMobileMenuOpen(true);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <div className="w-11/12 mx-auto sm:w-11/12 md:w-10/12 lg:w-9/12">
      <div className="flex items-center justify-between p-2 md:block md:py-5 lg:p-2 lg:flex">
        <div className="md:hidden">
          {isMobileMenuOpen ? (
            <button
              onClick={closeMobileMenu}
              className="whitespace-nowrap text-xl md:text-xl p-2.5 flex gap-1.5 items-center justify-between rounded-full border hover:bg-gray-100 bg-transparent"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 16 16"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1 12v-1h9v1H1zm0-5h14v1H1V7zm11-4v1H1V3h11z"></path>
              </svg>
            </button>
          ) : (
            <button
              onClick={openMobileMenu}
              className="whitespace-nowrap text-xl md:text-xl p-2.5 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 16 16"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1 12v-1h9v1H1zm0-5h14v1H1V7zm11-4v1H1V3h11z"></path>
              </svg>
            </button>
          )}
        </div>

        <Link to="/" className="w-40 sm:w-40 md:w-40 mr-2 flex">
          <img src={logo} alt="Travel Logo" />
        </Link>

        <div className="hidden md:flex items-center py-5">
          {Navlinks?.map((navlink) => (
            <NavLink
              to={navlink?.href}
              key={navlink?.id}
              className="mr-6 text-gray-800 text-base font-medium hover:text-lime-500 md:mr-4 lg:mr-5 xl:mr-6"
            >
              <span>{navlink.label}</span>
            </NavLink>
          ))}
        </div>

        <div className="flex text-left">
          {user?.email ? (
            <button
              onClick={logOut}
              className="text-gray-800 text-base font-medium hover:text-lime-500"
            >
              Sign out
            </button>
          ) : (
            <Link to="/login">
              <button className="text-gray-800 text-base font-medium hover:text-lime-500">
                Sign in
              </button>
            </Link>
          )}
        </div>

        {/* Mobile menu */}
        <div
          className={`${
            isMobileMenuOpen
              ? "opacity-100 translate-x-0"
              : "opacity-0 pointer-events-none -translate-y-10"
          } duration-300 z-50 absolute top-0 inset-x-0 mt-14 transition transform md:hidden`}
        >
          <div className="shadow-lg bg-white divide-y">
            <div className="px-3 py-8">
              <nav className="grid border">
                {Navlinks?.map((navlink) => (
                  <NavLink
                    onClick={closeMobileMenu}
                    to={navlink?.href}
                    key={navlink?.id}
                    className="flex p-3 hover:bg-gray-100 hover:text-lime-500 border-b text-sm"
                  >
                    <span className="ml-5">{navlink.label}</span>
                  </NavLink>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
