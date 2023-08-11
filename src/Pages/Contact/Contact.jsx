import { MdEmail, MdLocationPin, MdPhone } from "react-icons/md";
import MapLocation from "./MapLocation";

const Contact = () => {
  return (
    <div>
      <div className=" relative bg-scroll	  bg-center bg-cover">
        <img
          className="w-full object-cover rounded h-[400px] min-h-full"
          src="https://img.freepik.com/free-photo/side-view-man-using-smartphone_23-2148793481.jpg?w=1380&t=st=1691402865~exp=1691403465~hmac=47fb748d15ec4e36f9305c48569b8642b509b0c0f8db4703f9ec0e07acd13f1c"
          alt=""
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black rounded opacity-40"></div>
        <div className="container">
          <h2 className="xl:text-5xl mx-auto text-center lg:text-4xl text-3xl absolute top-0 left-0 w-full h-full flex items-center justify-center   text-white font-bold ">
            Contact US....
          </h2>
        </div>
      </div>

      <div className="flex container pb-12 flex-col md:flex-row  gap-2 pt-36 px-5">
        <div className="lg:w-1/3 w-full lg:mt-8 mb-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-[60px] h-[60px] flex justify-center items-center bg-slate-600 rounded-full">
              <MdLocationPin className="h-6 w-6 text-white"></MdLocationPin>
            </div>
            <div>
              <p className="text-xl font-bold text-[#4e5050]">Location</p>
              <p className=" text-[#575757] ">20 Bordeshi, New York, Usa</p>
            </div>
          </div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-[60px] h-[60px] flex justify-center items-center bg-slate-600 rounded-full">
              <MdPhone className="h-6 w-6 text-white"></MdPhone>
            </div>
            <div>
              <p className="text-xl font-bold text-[#4e5050]">Phone</p>
              <p className=" text-[#575757] ">+123 456 789000</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-[60px] h-[60px] flex justify-center items-center bg-slate-600 rounded-full">
              <MdEmail className="h-6 w-6 text-white"></MdEmail>
            </div>
            <div>
              <p className="text-xl font-bold text-[#4e5050]">Email</p>
              <p className=" text-[#575757] ">hello@travilo.com</p>
            </div>
          </div>
        </div>
        <div className="lg:w-9/12	w-full">
          <div className="lg:w-full w-full">
            <form>
              <div className="flex flex-col md:flex-row gap-2">
                <div className="mb-4 lg:w-1/2 w-full">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    className="w-full px-3 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>
                <div className="mb-4 lg:w-1/2 w-full">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="subject"
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Email"
                    className="w-full px-3 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-2">
                <div className="mb-4 lg:w-1/2 w-full">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="name"
                  >
                    Phone
                  </label>
                  <input
                    type="number"
                    id="name"
                    name="name"
                    placeholder="Your Phone"
                    className="w-full px-3 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>
                <div className="mb-4 lg:w-1/2 w-full">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="subject"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Subject"
                    className="w-full px-3 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Start writing your message here"
                  className="w-full px-3 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                  rows="5"
                  required
                ></textarea>
              </div>
              <div className="flex">
                <button
                  type="submit"
                  className="px-4 py-3  bg-slate-800 text-white rounded"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <MapLocation />
    </div>
  );
};

export default Contact;
