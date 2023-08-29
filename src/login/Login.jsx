import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "./../hooks/useAuth";
import { FaGoogle } from "react-icons/fa";
import img from '../assets/logo/252455-P4R9RT-971.jpg'
const Login = () => {
  const { isLoading, loginUser, signInWidthGoogle, authError } = useAuth();
  const [showPass, setShowPass] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const [Input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    loginUser(Input.email, Input.password, location, navigate);
    event.target.reset();
  };

  return (
    <div>
      <div className="rounded-lg  grid md:grid-cols-2 ">
        <div className="w-full md:w-11/12 lg:w-9/12 xl:w-8/12 2xl:w-7/12 mx-auto py-20 mt-10">
          <div className="flex flex-col justify-start items-start mb-10">
            <h1 className="text-gray-900 font-bold text-3xl font-title pl-4">
              Sign in
            </h1>
          </div>
          <div className="rounded-lg px-4 card border w-96 mx-auto p-2 shadow-md shadow-[#298280] ">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="email"
                    className="block text-lg text-gray-900 "
                  >
                    Email address
                    <span className="text-red-500">*</span>
                  </label>
                </div>
                <div className="mt-1">
                  <input
                    name="email"
                    type="email"
                    placeholder="example@gmail.com"
                    required
                    onChange={(event) => {
                      setInput({ ...Input, email: event.target.value });
                    }}
                    className="appearance-none bg-transparent block w-full px-3 py-2 border border-gray-300  rounded-md shadow-sm placeholder-gray-400  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-lg text-gray-900"
                  >
                    Password<span className="text-red-500">*</span>
                  </label>
                  <button
                    type="button"
                    className="mr-2"
                    onClick={() => setShowPass(!showPass)}
                  >
                    {showPass ? (
                      <i className="fa-solid fa-eye"></i>
                    ) : (
                      <i className="fa-solid fa-eye-slash"></i>
                    )}
                  </button>
                </div>
                <div className="mt-1">
                  <input
                    name="password"
                    type={showPass ? "text" : "password"}
                    placeholder="********"
                    required
                    onChange={(event) => {
                      setInput({ ...Input, password: event.target.value });
                    }}
                    className="appearance-none bg-transparent block w-full px-3 py-2 border border-gray-300  rounded-md shadow-sm placeholder-gray-400  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full py-2 px-4  rounded-md  text-lg lg:text-xl font-semibold hover:text-white  text-black bg-[#34c5c2] hover:bg-[#246463]"
                >
                  {isLoading ? "Loading..." : "Sign in"}
                </button>
              </div>
            </form>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-gray-50 text-gray-900  font-medium">
                    Or
                  </span>
                </div>
              </div>

              <div className="mt-6 w-full text-center">
                  <button
                    onClick={() => signInWidthGoogle(location, navigate)}
                    className=" border-2 p-2 rounded-full shadow-sm hover:shadow-teal-400  "
                  >
                    <FaGoogle className=" text-teal-500"></FaGoogle>
                  </button>
              </div>

              <p className="mt-6 text-center text-base lg:text-sm font-medium text-gray-900">
                New to Travel Agency?
                <Link
                  to="/register"
                  className="text-indigo-500 hover:text-indigo-600 font-medium"
                >
                  &nbsp;&nbsp;Sign up
                </Link>
              </p>
              <br />
              {authError && <div className="text-red-500">{authError}</div>}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center">
         <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;
