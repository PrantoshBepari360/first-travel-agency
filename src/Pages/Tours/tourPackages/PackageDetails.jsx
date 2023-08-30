import { Link, useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { MdStar } from "react-icons/md";
import detailImg from "../../../assets/about/about.jpeg";
import { useFetchData } from "../../../hooks/useFetchData";
import ComentForm from "./ComentForm";
import Slider from "../../../components/shared/common/Slider";

const PackageDetails = () => {
  const { id } = useParams();
  const packages = useFetchData("/TravelPackages.json");

  const details = packages.data?.find((pk) => pk.id === Number(id));

  return (
    <>
      <div>
        <div className="relative bg-cover -z-100">
          <img
            className="w-full object-cover h-80 lg:h-96"
            src={detailImg}
            alt="About Image"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>
          <h2 className="absolute top-0 left-0 w-full h-full flex items-center justify-center  text-3xl xl:text-5xl lg:text-4xl text-white font-bold ">
            Tour details....
          </h2>
        </div>

        <div className="bg-blue-100 ">
          <div className="container pt-8 pb-8 flex flex-col-reverse md:flex-row justify-between items-center">
            <div>
              <div className="ms-2 ">
                <h2 className="lg:text-4xl text-[23px] text-center md:text-left font-bold tracking-wide p-2">
                  Are You Still Intarested To Tour?
                </h2>
                <p className="lg:text-lg text-sm text-center md:text-left pb-4">
                  We Offer A Wide Range Of Procedures To Help You Get The
                  Perfect Smile
                </p>
              </div>

              <div className="container ">
                <div className="flex items-center  ">
                  <h2 className="text-3xl font-bold   mb-4">{details?.name}</h2>
                  <MdStar className="h-9 w-9 ms-10 lg:ms-8 pb-2  text-yellow-400"></MdStar>
                  <h2 className="font-bold text-lg  pb-2 ">
                    {details?.review}
                  </h2>
                  <h2 className="text-lg  pb-2 ps-4">
                    {" "}
                    ({details?.reviewPeople})
                  </h2>
                </div>
                <div className="text-[#4e5050]  mb-8 tracking-wider">
                  <span className="">StartFrom </span>
                  <span className="text-2xl font-bold text-black">
                    ${details?.price}
                  </span>
                  <span>/ Per Person</span>{" "}
                  <span className="text-lg font-bold text-black">
                    {" "}
                    {details?.visited}
                  </span>{" "}
                  <span>People</span>
                </div>
              </div>
            </div>
            <div>
              <Link to={`/tourBooking/${id}`}>
                <button className="w-full mt-2 p-2 font-semibold border rounded text-[#298280] border-[#00BDBB] hover:bg-[#3aa4a2] hover:text-white hover:border-none">
                  Book A Tour!
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container pt-10 pb-5">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 3000,
          }}
          modules={[Autoplay]}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
          }}
        >
          {details?.backgroundImg?.map((img) => (
            <SwiperSlide key={img}>
              <Slider
                name={img.name}
                background1={img.background1}
                background2={img.background2}
                background3={img.background3}
                background4={img.background4}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <h2 className="lg:text-4xl text-[26px] font-bold text-[#4e5050] pb-6">
          {details?.title}
        </h2>
        <p className="text-lg tracking-wide">{details?.tourdetails}</p>

        <ComentForm />
      </div>
    </>
  );
};

export default PackageDetails;
