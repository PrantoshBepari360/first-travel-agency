import { useParams } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";
import { useFetchData } from "../../../hooks/useFetchData";
import bookingImg from "../../../assets/about/flat-design.jpeg";
import { useState } from "react";

const TourBooking = () => {
  const { user } = useAuth();
  const { id } = useParams();

  const packages = useFetchData("/TravelPackages.json");
  const details = packages.data?.find((pk) => pk?.id === Number(id));

  const initial = {
    destination: "",
    checkIn: "",
    checkOut: "",
    guests: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    district: "",
    town: "",
    address: "",
  };

  const initialFocus = {
    destination: false,
    checkIn: false,
    checkOut: false,
    guests: false,
    firstName: false,
    lastName: false,
    email: false,
    phone: false,
    country: false,
    district: false,
    town: false,
    address: false,
  };

  const [formValue, setFormValue] = useState({ ...initial });
  const [errors, setErrors] = useState({ ...initial });
  const [focus, setFocus] = useState({ ...initialFocus });

  const handleChange = (e) => {
    {
      !formValue.email &&
        setFormValue((prev) => ({
          ...prev,
          email: user.email,
        }));
    }

    setFormValue((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
      destination: details.name,
    }));

    const key = e.target.name;
    const { errors } = checkValidity(formValue);

    if (!errors[key]) {
      setErrors((prev) => ({
        ...prev,
        [key]: "",
      }));
    }
  };

  const checkValidity = (formValue) => {
    const errors = {};

    const {
      checkIn,
      checkOut,
      guests,
      firstName,
      lastName,
      email,
      phone,
      country,
      district,
      town,
      address,
    } = formValue;

    if (!checkIn) {
      errors.checkIn = "Invalid checkIn";
    }
    if (!checkOut) {
      errors.checkOut = "Invalid checkOut";
    }
    if (!guests) {
      errors.guests = "Invalid guests";
    }
    if (!firstName) {
      errors.firstName = "Invalid firstName";
    }
    if (!lastName) {
      errors.lastName = "Invalid lastName";
    }
    if (!email) {
      errors.email = "Invalid email";
    }
    if (!phone) {
      errors.phone = "Invalid phone";
    }
    if (!country) {
      errors.country = "Invalid country";
    }
    if (!district) {
      errors.district = "Invalid district";
    }
    if (!town) {
      errors.town = "Invalid town";
    }
    if (!address) {
      errors.address = "Invalid address";
    }

    return {
      errors,
      isValid: Object.keys(errors).length === 0,
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { isValid, errors } = checkValidity(formValue);

    if (isValid) {
      setErrors({ ...errors });
    } else {
      setErrors({ ...errors });
    }

    // console.log(formValue);
    // setFormValue({ ...initialValue });
  };

  const handleFocus = (e) => {
    setFocus((prev) => ({
      ...prev,
      [e.target.name]: true,
    }));
  };

  const handleBlur = (e) => {
    const key = e.target.name;
    const { errors } = checkValidity(formValue);

    if (errors[key] && focus[key]) {
      setErrors((prev) => ({
        ...prev,
        [key]: errors[key],
      }));
    } else {
      setErrors((prev) => ({
        ...prev,
        [key]: "",
      }));
    }
  };

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
        <form onSubmit={handleSubmit} className="px-4">
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
                name="destination"
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
                name="checkIn"
                className="w-full border-2 rounded py-3 px-3 focus:outline-none "
                required
                value={formValue.checkIn}
                onChange={handleChange}
                error={errors.checkIn}
                onFocus={handleFocus}
                onBlur={handleBlur}
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
                name="checkOut"
                className="w-full border-2 rounded py-3 px-3 focus:outline-none "
                required
                value={formValue.checkOut}
                onChange={handleChange}
                error={errors.checkOut}
                onFocus={handleFocus}
                onBlur={handleBlur}
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
                name="guests"
                placeholder="Guests"
                className="w-full border-2 rounded py-3 px-3 focus:outline-none "
                required
                value={formValue.guests}
                onChange={handleChange}
                error={errors.guests}
                onFocus={handleFocus}
                onBlur={handleBlur}
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
                name="firstName"
                placeholder="Your Name"
                className="w-full px-3 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                required
                value={formValue.firstName}
                error={errors.firstName}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
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
                name="lastName"
                placeholder="Last Name"
                className="w-full px-3 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                required
                value={formValue.lastName}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
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
                name="email"
                placeholder={user?.email}
                className="w-full px-3 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                required
                value={formValue.email}
                onChange={handleChange}
                error={errors.email}
                onFocus={handleFocus}
                onBlur={handleBlur}
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
                name="phone"
                placeholder="Billing Mobile Number *"
                className="w-full px-3 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                required
                value={formValue.phone}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
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
                name="country"
                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                value={formValue.country}
                onChange={handleChange}
                error={errors.country}
                onFocus={handleFocus}
                onBlur={handleBlur}
              >
                <option value="">Selact a country</option>
                <option value="Bangladesh">Bangladesh</option>
                <option value="India">India</option>
                <option value="Australia">Australia</option>
                <option value="Canada">Canada</option>
                <option value="London">London</option>
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
                name="district"
                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                value={formValue.district}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
              >
                <option value="">Selact a district</option>
                <option value="Dhaka">Dhaka</option>
                <option value="Faridpur">Faridpur</option>
                <option value="Madaripur">Madaripur</option>
                <option value="Gopalganj">Gopalganj</option>
                <option value="Gazipur">Gazipur</option>
                <option value="Jamalpur">Jamalpur</option>
                <option value="Kishoreganj">Kishoreganj</option>
                <option value="Tangail">Tangail</option>
                <option value="Bogura">Bogura</option>
                <option value="Rajshahi">Rajshahi</option>
                <option value="Rangpur">Rangpur</option>
                <option value="Jhenaidah">Jhenaidah</option>
                <option value="Kushtia">Kushtia</option>
                <option value="Khulna">Khulna</option>
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
                name="town"
                placeholder="Town / City Name"
                className="w-full px-3 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                required
                value={formValue.town}
                onChange={handleChange}
                error={errors.town}
                onFocus={handleFocus}
                onBlur={handleBlur}
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
                name="address"
                placeholder="House number and street number *"
                className="w-full px-3 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                required
                value={formValue.address}
                onChange={handleChange}
                error={errors.address}
                onFocus={handleFocus}
                onBlur={handleBlur}
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
