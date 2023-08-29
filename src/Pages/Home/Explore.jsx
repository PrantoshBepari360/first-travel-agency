import img from "../../assets/about/aboutBg.jpg"; // Import the image
import logo from "../../assets/logo/f-icon-1.png";
import logo1 from "../../assets/logo/f-icon-2.png";
import H2P2Ruse from '../../reuse/Heading2'
import ColorPera from "../../reuse/ColPera";
const Explore = () => {
  return (
    <div className="container mb-20">
      <section className="mb-9 ">



        <h1 className="md:text-6xl font-dancingFont text-4xl  text-center text-gray-500">Lets Explore the world</h1>
        <ColorPera  para4="  -----With fun & Joy------"/>

      </section>

      <section className="lg:flex flex-col gap-20 sm:flex-row sm:gap-10">
        <div className="w-full">
          <img src={img} className="rounded-lg" alt="tour" />
        </div>
        <div className="w-full md:mt-10 lg:mt-0">
          <H2P2Ruse para2="  Welcome to our travel agency!
           We are passionate about creating
            memorable travel experiences for our clients. Our mission is to
            provide you with exceptional service and tailor-made itineraries
            that suit your preferences and interests. Our team of experienced
            travel experts is dedicated to helping you discover the worlds most
            captivating destinations."/>


          <div className="flex gap-6 mb-4">
            <div className="flex gap-3  items-center">
              <img src={logo} className="w-10" alt="" />
              <h2 className="font-bold">Best travel tour agency & company</h2>
            </div>
            <div className="flex gap-3  items-center">
              <img src={logo1} className="w-10" alt="" />
              <h2 className="font-bold">
                Most popular booking solution provider
              </h2>
            </div>
          </div>
          <H2P2Ruse para2="  Welcome to our travel agency!
           We are passionate about creating
            memorable travel experiences for our clients. Our mission is to
            provide you with exceptional service and tailor-made itineraries
            that suit your preferences and interests. Our team of experienced
            travel experts is dedicated to helping you discover the worlds most
            captivating destinations."/>
        </div>
      </section>
    </div>
  );
};

export default Explore;
