const Intro = () => {
  return (
    <div className="flex flex-col gap-6 sm:flex-row sm:gap-6 justify-center items-center mb-20">
      <div
        className=" w-full border shadow-md sm:w-1/2 lg:w-1/4 hover:shadow-blue-200  hover:shadow-xl p-3 rounded-xl"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <div className="text-center">
          <img
            src="https://jufailitech.com/envatoitems/travilo/html/images/resource/intro-1.png"
            className="w-24 mx-auto mb-3"
            alt=""
          />
          <h2 className="text-2xl font-bold mb-5">Most Popular Destination</h2>
          <p className="text-gray-400 text-sm">
            Sectetur adipisicing elised do eiusmod tempor incidid unt ut labore
            et dolore magna aliqua enim ad minim veniam, quis nostrud.
          </p>
        </div>
      </div>

      <div
        className=" w-full border shadow-md sm:w-1/2 lg:w-1/4 hover:shadow-orange-200  hover:shadow-xl p-3 rounded-xl"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <div className="text-center">
          <img
            src="https://jufailitech.com/envatoitems/travilo/html/images/resource/intro-2.png"
            className="w-24 mx-auto mb-3"
            alt=""
          />
          <h2 className="text-2xl font-bold mb-5">Budget Friendly Packages</h2>
          <p className="text-gray-400 text-sm">
            Sectetur adipisicing elised do eiusmod tempor incidid unt ut labore
            et dolore magna aliqua enim ad minim veniam, quis nostrud.
          </p>
        </div>
      </div>

      <div
        className=" w-full border shadow-md sm:w-1/2 lg:w-1/4 hover:shadow-green-200  hover:shadow-xl p-3 rounded-xl"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <div className="text-center">
          <img
            src="https://jufailitech.com/envatoitems/travilo/html/images/resource/intro-3.png"
            className="w-24 mx-auto mb-3"
            alt=""
          />
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
