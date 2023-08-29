import Banner from "./Banner";
import Form from "./Form";
import MapLocation from "./MapLocation";
import contactImg from "../../../assets/about/blog.jpeg";

const Contact = () => {
  return (
    <div>
      <Banner image={contactImg} name={"Contact US...."} />
      <Form />
      <MapLocation />
    </div>
  );
};

export default Contact;
