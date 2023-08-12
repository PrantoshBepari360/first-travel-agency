import MapLocation from "./MapLocation";
import { Form } from "./Form";

const Contact = () => {
  return (
    <div>
      <div className="relative bg-scroll bg-center bg-cover">
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

      <Form/>
      <MapLocation />
    </div>
  );
};

export default Contact;
