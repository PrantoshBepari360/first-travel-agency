import MapLocation from "./MapLocation";
import { Form } from "./Form";
import contactImg from "../../assets/about/blog.jpeg";
import Banner from "./Banner";

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
