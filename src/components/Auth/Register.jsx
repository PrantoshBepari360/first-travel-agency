import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../useProvider/useAuth";

const Register = () => {
  const { isLoading, registerUser, signInWidthGoogle, authError, user } =
    useAuth();
  const [showPassConfirm, setShowPassConfirm] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const [Input, setInput] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (Input.password === Input.confirmPassword) {
      alert("Wow password matched!");
      registerUser(
        Input?.email,
        Input?.password,
        Input?.displayName,
        location,
        navigate
      );
      event.target.reset();
    } else {
      alert("Oops! password dosen't match");
    }
  };

  return (
    <div>
      <div className="rounded-lg overflow-hidden grid">
        <div className="w-full md:w-11/12 lg:w-9/12 xl:w-8/12 2xl:w-7/12 mx-auto py-20 mt-10">
          <div className="flex flex-col justify-start items-start mb-10">
            <h1 className="text-gray-900 font-bold text-3xl font-title pl-4">
              Create an account
            </h1>
          </div>
          <div className="rounded-lg px-4">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="displayName"
                    className="block text-lg text-gray-900"
                  >
                    Full name<span className="text-red-500">*</span>
                  </label>
                </div>
                <div className="mt-1">
                  <input
                    name="displayName"
                    type="text"
                    required
                    onChange={(event) => {
                      setInput({ ...Input, displayName: event.target.value });
                    }}
                    placeholder="John doe"
                    className="appearance-none bg-transparent block w-full px-3 py-2 border border-gray-300  rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="email"
                    className="block text-lg text-gray-900 "
                  >
                    Email address<span className="text-red-500">*</span>
                  </label>
                </div>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    onChange={(event) => {
                      setInput({ ...Input, email: event.target.value });
                    }}
                    placeholder="example@gmail.com"
                    className="appearance-none bg-transparent block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
                    id="password"
                    name="password"
                    type={showPass ? "text" : "password"}
                    required
                    onChange={(event) => {
                      setInput({ ...Input, password: event.target.value });
                    }}
                    placeholder="********"
                    className="appearance-none bg-transparent block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="confirmPass"
                    className="block text-lg text-gray-900"
                  >
                    Retype Password<span className="text-red-500">*</span>
                  </label>
                  <button
                    type="button"
                    className="mr-2"
                    onClick={() => setShowPassConfirm(!showPassConfirm)}
                  >
                    {showPassConfirm ? (
                      <i className="fa-solid fa-eye"></i>
                    ) : (
                      <i className="fa-solid fa-eye-slash"></i>
                    )}
                  </button>
                </div>
                <div className="mt-1">
                  <input
                    id="confirmPass"
                    name="confirmPass"
                    type={showPassConfirm ? "text" : "password"}
                    required
                    onChange={(event) => {
                      setInput({
                        ...Input,
                        confirmPassword: event.target.value,
                      });
                    }}
                    placeholder="********"
                    className="appearance-none bg-transparent block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-lg lg:text-xl font-medium  text-white bg-black hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-black "
                >
                  {isLoading ? "Loading..." : "Register"}
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

              <div className="mt-6">
                <div>
                  <button
                    onClick={() => signInWidthGoogle(location, navigate)}
                    className="w-full inline-flex justify-center items-center py-2 px-4 rounded-md shadow-sm  bg-black text-lg lg:text-xl font-medium text-white focus:outline-none focus:ring-2 focus:ring-black hover:bg-opacity-80"
                  >
                    <i className="fa-brands fa-google mr-2"></i>Sign in with
                    Google
                  </button>
                </div>
              </div>
              <p className="mt-6 text-center text-base lg:text-lg font-medium text-gray-900">
                Have an account?
                <Link
                  to="/login"
                  className="text-indigo-500 hover:text-indigo-600 font-medium"
                >
                  &nbsp;Sign in
                </Link>
              </p>
              {user?.email && <div className="">User Created successfully</div>}
              <br />
              {authError && <div className="">{authError}</div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
