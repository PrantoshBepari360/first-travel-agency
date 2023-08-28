import { useParams } from "react-router-dom";
import { useAuth } from "./../../hooks/useAuth";
import { useFetchData } from "../../hooks/useFetchData";
import bookingImg from "../../assets/about/flat-design.jpeg";

const TourBooking = () => {
  const { user } = useAuth();
  const { id } = useParams();

  const packages = useFetchData("/TravelPackages.json");
  const details = packages.data?.find((pk) => pk?.id === Number(id));

  return (
    <>
      <div className="relative bg-cover -z-100">
        <img
          className="w-full object-cover h-80 lg:h-96"
          src={bookingImg}
          alt="Booking Image"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>
        <h2 className="absolute top-0 left-0 w-full h-full flex items-center justify-center  text-3xl xl:text-5xl lg:text-4xl text-white font-bold ">
          Booking...
        </h2>
      </div>
      <div className="w-full mx-auto z-50 rounded py-5 border-none lg:w-10/12">
        <h2 className="text-center text-3xl font-bold">Billing Details</h2>
        <form className="px-4">
          <div className="p-6 bg-slate-100 flex flex-col md:flex-row justify-between flex-wrap gap-2 shadow rounded">
            <div className="mb-4">
              <label
                htmlFor="destination"
                className="block text-gray-700 font-bold mb-2"
              >
                Destination
              </label>
              <input
                type="text"
                id="destination"
                placeholder={details?.name}
                className="w-full border-2 rounded py-3 px-3 focus:outline-none "
                required
                disabled
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="checkIn"
                className="block text-gray-700 font-bold mb-2"
              >
                Check in
              </label>
              <input
                type="date"
                id="checkIn"
                className="w-full border-2 rounded py-3 px-3 focus:outline-none "
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="checkOut"
                className="block text-gray-700 font-bold mb-2"
              >
                Check out
              </label>
              <input
                type="date"
                id="checkOut"
                className="w-full border-2 rounded py-3 px-3 focus:outline-none "
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="guests"
                className="block text-gray-700 font-bold mb-2"
              >
                Guests
              </label>
              <input
                type="number"
                id="guests"
                placeholder="Guests"
                className="w-full border-2 rounded py-3 px-3 focus:outline-none "
                required
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row pt-6 items-center justify-between gap-4">
            <div className="mb-1  lg:w-1/2 w-full">
              <label
                className="block text-gray-700 text-sm font-bold "
                htmlFor="firstName"
              >
                First Name <span className="text-red-600 text-lg">*</span>
              </label>
              <input
                type="text"
                id="firstName"
                placeholder="Your Name"
                className="w-full px-3 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-1 lg:w-1/2 w-full">
              <label
                className="block text-gray-700 text-sm font-bold "
                htmlFor="lastName"
              >
                Last Name <span className="text-red-600 text-lg">*</span>
              </label>
              <input
                type="text"
                id="lastName"
                placeholder="Last Name"
                className="w-full px-3 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                required
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row  items-center justify-between gap-4">
            <div className="mb-1 lg:w-1/2 w-full">
              <label
                className="block text-gray-700 text-sm font-bold"
                htmlFor="email"
              >
                Billing Email <span className="text-red-600 text-lg">*</span>
              </label>
              <input
                type="text"
                id="email"
                placeholder={user?.email}
                className="w-full px-3 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                required
                disabled
              />
            </div>
            <div className="mb-1 lg:w-1/2 w-full">
              <label
                className="block text-gray-700 text-sm font-bold "
                htmlFor="phone"
              >
                Billing Mobile Number{" "}
                <span className="text-red-600 text-lg">*</span>
              </label>
              <input
                type="number"
                id="phone"
                placeholder="Billing Mobile Number *"
                className="w-full px-3 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                required
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row  items-center justify-between gap-4">
            <div className="mb-1 lg:w-1/2 w-full">
              <label
                className="block text-gray-700 text-sm font-bold "
                htmlFor="country"
              >
                Country <span className="text-red-600 text-lg">*</span>
              </label>
              <select
                id="country"
                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              >
                <option value="country1">Bangladesh</option>
                <option value="country2">India</option>
                <option value="country3">Australia</option>
                <option value="country4">Canada</option>
                <option value="country5">London</option>
              </select>
            </div>

            <div className="mb-1 lg:w-1/2 w-full">
              <label
                className="block text-gray-700 text-sm font-bold "
                htmlFor="district"
              >
                District <span className="text-red-600 text-lg">*</span>
              </label>
              <select
                id="district"
                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              >
                <option value="country1">Dhaka</option>
                <option value="country2">Faridpur</option>
                <option value="country3">Madaripur</option>
                <option value="country4">Gopalganj</option>
                <option value="country5">Gazipur</option>
                <option value="country6">Jamalpur</option>
                <option value="country7">Kishoreganj</option>
                <option value="country8">Tangail</option>
                <option value="country9">Bogura</option>
                <option value="country10">Rajshahi</option>
                <option value="country11">Rangpur</option>
                <option value="country12">Jhenaidah</option>
                <option value="country13">Kushtia</option>
                <option value="country14">Khulna</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col md:flex-row  items-center justify-between gap-4">
            <div className="mb-1 lg:w-1/2 w-full">
              <label
                className="block text-gray-700 text-sm font-bold"
                htmlFor="town"
              >
                Town / City <span className="text-red-600 text-lg">*</span>
              </label>
              <input
                type="text"
                id="town"
                placeholder="Town / City Name"
                className="w-full px-3 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-1 lg:w-1/2 w-full">
              <label
                className="block text-gray-700 text-sm font-bold "
                htmlFor="address"
              >
                Street address <span className="text-red-600 text-lg">*</span>
              </label>
              <input
                type="text"
                id="address"
                placeholder="House number and street number *"
                className="w-full px-3 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                required
              />
            </div>
          </div>

          <div className="flex">
            <button
              type="submit"
              className=" py-4 w-full mt-5 bg-[#22a5c3] font-bold text-xl text-white rounded"
            >
              Proceed To Book
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default TourBooking;
