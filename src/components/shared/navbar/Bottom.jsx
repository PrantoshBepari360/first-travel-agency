import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiMenu, HiOutlineClipboard, HiSearch } from "react-icons/hi";
import NavJson from "/public/Nav2.json";
import logo from "../../../../assets/logo/logo.png";

const Bottom = () => {
  const [showSubMenu, setShowSubMenu] = useState([]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const openMobileMenu = () => setIsMobileMenuOpen(true);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  };

  const onEnterHandler = (subMenuId) => {
    setShowSubMenu((prev) => {
      let arr = [...prev];
      arr[subMenuId] = true;
      return arr;
    });
  };

  const subMousLeaveHandle = (subMenuId) => {
    setShowSubMenu((prev) => {
      let arr = [...prev];
      arr[subMenuId] = false;
      return arr;
    });
  };

  return (
    <div className="w-full top-0 md:top-10 absolute drop-shadow-[0_1px_5px_rgba(193,193,193,0.4)]">
      <div className="w-full md:w-[90%] mx-auto flex justify-between bg-white p-5">
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

        <Link to="/" className="bg-black w-40">
          <img src={logo} alt="Travel Logo" />
        </Link>

        <div className="hidden md:flex justify-center items-center">
          <ul className="flex justify-center items-center">
            {NavJson?.map((item) => {
              if (!item.children) {
                return (
                  <li
                    key={item.id}
                    className="mr-5 text-gray-600 font-bold hover:text-[#00BDCA]"
                  >
                    <NavLink to={item.href}>
                      <span>{item.name}</span>
                    </NavLink>
                  </li>
                );
              }

              return (
                <li
                  key={item.id}
                  onMouseEnter={() => onEnterHandler(item.id)}
                  onMouseLeave={() => subMousLeaveHandle(item.id)}
                  className="relative cursor-pointer text-gray-600 mr-5 font-bold "
                >
                  <span>{item.name}</span>
                  <div
                    className="absolute pt-2 top-full w-32"
                    variants={variants}
                    animate={showSubMenu[item.id] ? "open" : "closed"}
                  >
                    {showSubMenu[item.id] &&
                      item.children?.map((Submenu) => {
                        return (
                          <li
                            key={Submenu.id}
                            className="w-full h-10 bg-gray-500"
                          >
                            <NavLink
                              to={Submenu.href}
                              target="_blank"
                              className="flex items-center w-full h-full pl-4 text-white border-b hover:bg-gray-400"
                            >
                              <span>{Submenu.name}</span>
                            </NavLink>
                          </li>
                        );
                      })}
                  </div>
                </li>
              );
            })}
          </ul>

          <ul className="flex justify-center space-x-5 text-gray-400">
            <li>
              <Link to="/">
                <HiOutlineClipboard className="absolute w-7 h-6" />
                <span className="relative text-white bg-menuColor font-light ml-4 rounded">
                  0
                </span>
              </Link>
            </li>
            <div className="border-r-2 h-5"></div>
            <li>
              <Link to="/" className="hover:text-menuColor">
                <HiSearch className="w-6 h-6" />
              </Link>
            </li>
            <div className="border-r-2 h-5"></div>
            <li>
              <Link to="/" className="hover:text-menuColor">
                <HiMenu className="w-6 h-6" />
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile menu */}
        <div
          className={`${
            isMobileMenuOpen
              ? "opacity-100 translate-x-0"
              : "opacity-0 pointer-events-none -translate-y-10"
          } duration-300 z-50 absolute top-0 inset-x-0 mt-14 transition transform md:hidden`}
        >
          <div className="shadow-lg bg-white divide-y ">
            <div className="px-3 py-8">
              <ul className="grid border">
                {NavJson?.map((el) => {
                  if (!el.children) {
                    return (
                      <li key={el?.id}>
                        <NavLink
                          onClick={closeMobileMenu}
                          to={el?.href}
                          className="flex p-3 hover:bg-gray-100 hover:text-lime-500 border-b text-sm"
                        >
                          <p className="flex items-center text-lime-500">
                            <i className={el?.icon} />
                          </p>
                          <span className="ml-5">{el?.name}</span>
                        </NavLink>
                      </li>
                    );
                  }

                  return (
                    <li
                      onMouseEnter={(e) => onEnterHandler(el?.id)}
                      onMouseLeave={(e) => subMousLeaveHandle(el?.id)}
                      key={el?.id}
                      className="relative cursor-pointer"
                    >
                      <span className="flex p-3 hover:bg-gray-100 border-b text-gray-800 text-base font-medium hover:text-lime-500">
                        <p className="flex items-center text-lime-500">
                          <i className={el?.icon} />
                        </p>
                        <span className="ml-5">{el?.name}</span>
                        <span className="ml-auto">
                          <i className="fa-solid fa-angle-right"></i>
                        </span>
                      </span>
                      <div
                        className="top-full w-full"
                        variants={variants}
                        animate={showSubMenu[el.id] ? "open" : "closed"}
                      >
                        {showSubMenu[el?.id] &&
                          el?.children.map((ele) => {
                            if (!ele?.children) {
                              return (
                                <li key={ele?.id} className="h-10 border-b">
                                  <NavLink
                                    onClick={closeMobileMenu}
                                    to={ele?.href}
                                    target="_blank"
                                    className="flex p-3 hover:bg-gray-100 hover:text-lime-500 text-sm"
                                  >
                                    <p className="flex items-center text-lime-500">
                                      <i className={ele?.icon} />
                                    </p>
                                    <span className="ml-5">{ele?.name}</span>
                                  </NavLink>
                                </li>
                              );
                            }

                            return (
                              <li
                                onMouseEnter={() => onEnterHandler(ele?.id)}
                                onMouseLeave={() => subMousLeaveHandle(ele?.id)}
                                key={ele?.id}
                                className="relative w-full h-10"
                              >
                                <div className="h-10 border-b">
                                  <NavLink
                                    to={ele?.href}
                                    target="_blank"
                                    className="flex p-3 hover:bg-gray-100 hover:text-lime-500 text-sm"
                                  >
                                    <p className="flex items-center text-lime-500">
                                      <i className={ele?.icon} />
                                    </p>
                                    <span className="ml-5">{ele?.name}</span>
                                  </NavLink>
                                </div>
                              </li>
                            );
                          })}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bottom;
