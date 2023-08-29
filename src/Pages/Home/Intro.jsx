import logo from "../../../assets/logo/intro-1.png";
import logo1 from "../../../assets/logo/intro-2.png";
import logo2 from "../../../assets/logo/intro-3.png";
import Heading from "../../components/shared/common/Heading";

const Intro = () => {
  return (
    <div className="container flex flex-col gap-6 justify-center items-center md:flex-row mb-20" >
      <div className="w-full border py-4 shadow-md hover:shadow-blue-200  hover:shadow-xl rounded-xl">
        <div className="text-center">
          <img src={logo} className="w-24 mx-auto mb-3" alt="" />

          <Heading
            heading4="Most Popular Destination"
            para1=" Sectetur adipisicing elised do eiusmod tempor incidid unt ut labore
          et dolore magna aliqua enim ad minim veniam, quis nostrud."
          />
        </div>
      </div>

      <div className="w-full border py-4 shadow-md hover:shadow-orange-200  hover:shadow-xl rounded-xl" >
        <div className="text-center">
          <img src={logo1} className="w-24 mx-auto mb-3" alt="" />
          <Heading
            heading4="Budget Friendly Packages"
            para1=" Sectetur adipisicing elised do eiusmod tempor incidid unt ut labore
            et dolore magna aliqua enim ad minim veniam, quis nostrud."
          />
        </div>
      </div>

      <div className=" w-full py-4 border shadow-md hover:shadow-green-200  hover:shadow-xl rounded-xl">
        <div className="text-center">
          <img src={logo2} className="w-24 mx-auto mb-3" alt="" />
          <Heading
            heading4="Satisfaction Guarranted"
            para1=" Sectetur adipisicing elised do eiusmod tempor incidid unt ut labore
            et dolore magna aliqua enim ad minim veniam, quis nostrud."
          />
        </div>
      </div>
  
    </div>
  );
};

export default Intro;
