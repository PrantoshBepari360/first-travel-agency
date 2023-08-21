import MapLocation from "./MapLocation";
import { Form } from "./Form";
import Banner from "./banner";
import contactImg from "../../assets/about/blog.jpeg";

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
