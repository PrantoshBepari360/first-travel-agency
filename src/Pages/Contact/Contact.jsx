import MapLocation from "./MapLocation";
import { Form } from "./Form";
import contactImg from "../../assets/about/blog.jpeg";

const Contact = () => {
  return (
    <div>
      <div className="relative bg-cover -z-100">
        <img
          className="w-full object-cover h-80 lg:h-96"
          src={contactImg}
          alt="Contact Image"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>
        <h2 className="absolute top-0 left-0 w-full h-full flex items-center justify-center  text-3xl xl:text-5xl lg:text-4xl text-white font-bold ">
          Contact US....
        </h2>
      </div>

      <Form />
      <MapLocation />
    </div>
  );
};

export default Contact;
