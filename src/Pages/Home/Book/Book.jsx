import { Link, useLoaderData } from "react-router-dom";
import img from "../../../assets/book/brooke-bell-Houd_MDFMcU-unsplash.jpg";
import Marquee from "react-fast-marquee";

const Book = () => {
  const place = useLoaderData();
  const { title, image, description, cost, travel } = place;
  return (
    <div className="mb-20 mt-20 ">
      <div className="relative">
        <img
          src={img}
          className="h-96 w-full object-cover bg-slate-50"
          alt=""
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white font-bold lg:text-4xl md:text-2xl">
          Explore and Know About This World
        </div>
      </div>
      <section className="mb-9 mt-10">
        <h4 className="md:text-6xl text-4xl text-center text-orange-500 mb-2">
          More details for you
        </h4>
        <h5 className="text-2xl text-center text-orange-500">
          -----to know everything------
        </h5>
      </section>

      <section className="flex flex-col gap-10 sm:flex-row sm:gap-32 justify-center items-center bg-slate-50 rounded-xl p-4">
        <div className="w-full sm:w-1/2 lg:w-2/5" data-aos="fade-right">
          <img src={image} className="w-full h-auto rounded-lg mb-2" alt="tour" />
          <p className="mb-4 text-lg">{description}</p>
        </div>
        <div className="w-full  sm:w-1/2 lg:w-3/5" data-aos="fade-left">
          <h6 className="text-2xl text-orange-700 mb-2">Name of the Place:
          <span className="font-bold text-black"> {title}</span></h6>
          <h6 className="text-2xl text-orange-700 mb-2">what is the cost:
          <span className="font-bold text-black"> {cost}$</span></h6>
          <h6 className="text-2xl text-orange-700 mb-2">Who is the guide:
          <span className="font-bold text-black"> {travel}</span></h6>

          <Link>
          <button className="btn btn-outline bg-gray-400 border-0  border-b-4 border-orange-400 mt-4">Book Now</button>
          </Link>
        </div>
      </section>
    <div className="bg-gray-300 p-2">
      <Marquee speed={50} className="text-md">
        Trusted by thousands of people all over the world.Most trusted agency to enjoy your vacation with less money than any other company..
      </Marquee>
    </div>
    </div>
  );
};

export default Book;
