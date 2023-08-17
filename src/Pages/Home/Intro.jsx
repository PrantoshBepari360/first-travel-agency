import logo from "../../assets/logo/intro-1.png";
import logo1 from "../../assets/logo/intro-2.png";
import logo2 from "../../assets/logo/intro-3.png";

const Intro = () => {
  return (
    <div className="container flex flex-col gap-6 justify-center items-center md:flex-row mb-20">
      <div className="w-full border py-4 shadow-md hover:shadow-blue-200  hover:shadow-xl rounded-xl">
        <div className="text-center">
          <img src={logo} className="w-24 mx-auto mb-3" alt="" />
          <h2 className="text-2xl font-bold mb-5">Most Popular Destination</h2>
          <p className="text-gray-400 text-sm">
            Sectetur adipisicing elised do eiusmod tempor incidid unt ut labore
            et dolore magna aliqua enim ad minim veniam, quis nostrud.
          </p>
        </div>
      </div>

      <div className="w-full border py-4 shadow-md hover:shadow-orange-200  hover:shadow-xl rounded-xl">
        <div className="text-center">
          <img src={logo1} className="w-24 mx-auto mb-3" alt="" />
          <h2 className="text-2xl font-bold mb-5">Budget Friendly Packages</h2>
          <p className="text-gray-400 text-sm">
            Sectetur adipisicing elised do eiusmod tempor incidid unt ut labore
            et dolore magna aliqua enim ad minim veniam, quis nostrud.
          </p>
        </div>
      </div>

      <div className=" w-full py-4 border shadow-md hover:shadow-green-200  hover:shadow-xl rounded-xl">
        <div className="text-center">
          <img src={logo2} className="w-24 mx-auto mb-3" alt="" />
          <h2 className="text-2xl font-bold mb-5">Satisfaction Guarranted</h2>
          <p className="text-gray-400 text-sm">
            Sectetur adipisicing elised do eiusmod tempor incidid unt ut labore
            et dolore magna aliqua enim ad minim veniam, quis nostrud.
          </p>
        </div>
      </div>
      {/* <div className="intro-block ">
						<div className="inner-box wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms" style="visibility: visible; animation-duration: 1500ms; animation-delay: 300ms; animation-name: fadeInUp;">
							<div className="icon">
								<span><img src={logo} alt=""/></span>
							</div>
							<h4>Budget Friendly Packages</h4>
							<p className="travilo-text">Travel doesn't have to break the bank! Explore our curated selection
								of
								budget-friendly packages, where you can experience incredible adventures without
								compromising on
								quality. Embrace wanderlust without the financial worry.</p>
						</div>
					</div> */}
    </div>
  );
};

export default Intro;
