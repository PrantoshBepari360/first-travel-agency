import logo from "../../assets/logo/logos.png";

const Intro = () => {
  return (
    <div className="container flex flex-col gap-6 justify-center items-center md:flex-row mb-20">
      <div className="w-full border shadow-md hover:shadow-blue-200  hover:shadow-xl rounded-xl">
        <div className="text-center">
          <img src={logo} className="w-24 mx-auto mb-3" alt="" />
          <h2 className="text-2xl font-bold mb-5">Most Popular Destination</h2>
          <p className="text-gray-400 text-sm">
            Sectetur adipisicing elised do eiusmod tempor incidid unt ut labore
            et dolore magna aliqua enim ad minim veniam, quis nostrud.
          </p>
        </div>
      </div>

      <div className="w-full border shadow-md hover:shadow-orange-200  hover:shadow-xl rounded-xl">
        <div className="text-center">
          <img src={logo} className="w-24 mx-auto mb-3" alt="" />
          <h2 className="text-2xl font-bold mb-5">Budget Friendly Packages</h2>
          <p className="text-gray-400 text-sm">
            Sectetur adipisicing elised do eiusmod tempor incidid unt ut labore
            et dolore magna aliqua enim ad minim veniam, quis nostrud.
          </p>
        </div>
      </div>

      <div className=" w-full border shadow-md hover:shadow-green-200  hover:shadow-xl rounded-xl">
        <div className="text-center">
          <img src={logo} className="w-24 mx-auto mb-3" alt="" />
          <h2 className="text-2xl font-bold mb-5">Satisfaction Guarranted</h2>
          <p className="text-gray-400 text-sm">
            Sectetur adipisicing elised do eiusmod tempor incidid unt ut labore
            et dolore magna aliqua enim ad minim veniam, quis nostrud.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Intro;
