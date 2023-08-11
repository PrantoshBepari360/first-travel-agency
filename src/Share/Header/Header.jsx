import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo/logo.png";
import { useAuth } from "./../../components/useProvider/useAuth";

const Header = () => {
  // Fetch data
  const [Navlinks, setData] = useState();
  useEffect(() => {
    (async function () {
      const res = await fetch("./Nav.JSON");
      res
        .json()
        .then((data) => setData(data))
        .catch((err) => {
          console.log(err);
        });
    })();
  }, []);

  const [showSubMenu, setShowSubMenu] = useState([]);
  const { user, logOut } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const openMobileMenu = () => setIsMobileMenuOpen(true);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  };

  const subMenuOnMouseEventHandler = (subMenuId) => {
    setShowSubMenu((prev) => {
      let arr = [...prev];
      arr[subMenuId] = true;
      return arr;
    });
  };

  const subMenuOnMouseLeaveHandler = (subMenuId) => {
    setShowSubMenu((prev) => {
      let arr = [...prev];
      arr[subMenuId] = false;
      return arr;
    });
  };

  return (
    <div className="w-full mx-auto bg-white z-[100] drop-shadow-[0_1px_5px_rgba(193,193,193,0.3)]">
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

          <ul className="hidden md:flex items-center py-5">
            {Navlinks?.map((el) => {
              if (!el?.children) {
                return (
                  <li key={el?.id}>
                    <Link
                      to={el?.href}
                      className="mr-6 text-gray-800 text-base font-medium hover:text-lime-500 md:mr-4 lg:mr-5 xl:mr-6"
                    >
                      <span>{el?.name}</span>
                    </Link>
                  </li>
                );
              }

              return (
                <li
                  onMouseEnter={(e) => subMenuOnMouseEventHandler(el?.id)}
                  onMouseLeave={(e) => subMenuOnMouseLeaveHandler(el?.id)}
                  key={el?.id}
                  className="relative cursor-pointer"
                >
                  <span className="mr-6 text-gray-800 text-base font-medium hover:text-lime-500 md:mr-4 lg:mr-5 xl:mr-6">
                    {el?.name}
                  </span>
                  <div
                    className="absolute top-full w-36"
                    variants={variants}
                    animate={showSubMenu[el.id] ? "open" : "closed"}
                  >
                    {showSubMenu[el?.id] &&
                      el?.children.map((ele) => {
                        if (!ele?.children) {
                          return (
                            <li
                              key={ele?.id}
                              className="w-full h-10 bg-gray-500"
                            >
                              <NavLink
                                to={ele?.href}
                                target="_blank"
                                className="flex items-center w-full h-full pl-4 text-white border-b hover:bg-gray-400"
                              >
                                <span>{ele?.name}</span>
                              </NavLink>
                            </li>
                          );
                        }

                        return (
                          <li
                            onMouseEnter={() =>
                              subMenuOnMouseEventHandler(ele?.id)
                            }
                            onMouseLeave={() =>
                              subMenuOnMouseLeaveHandler(ele?.id)
                            }
                            key={ele?.id}
                            className="relative w-full h-10 bg-gray-500"
                          >
                            <span className="flex items-center w-full h-full pl-4 text-white border-b hover:bg-gray-400">
                              <NavLink to={ele?.href} target="_blank">
                                <span>{ele?.name}</span>
                              </NavLink>
                            </span>
                          </li>
                        );
                      })}
                  </div>
                </li>
              );
            })}
          </ul>

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
                <ul className="grid border">
                  {Navlinks?.map((el) => {
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
                        onMouseEnter={(e) => subMenuOnMouseEventHandler(el?.id)}
                        onMouseLeave={(e) => subMenuOnMouseLeaveHandler(el?.id)}
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
                                  onMouseEnter={() =>
                                    subMenuOnMouseEventHandler(ele?.id)
                                  }
                                  onMouseLeave={() =>
                                    subMenuOnMouseLeaveHandler(ele?.id)
                                  }
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
    </div>
  );
};

export default Header;
