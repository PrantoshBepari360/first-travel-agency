
import Slider from "./Slider";
import Intro from "./Intro";
import Explore from "./Explore";
import PopularTour from "./popularTour/PopularTour";
import Featured from "./featured/Featured";
import Reviews from "./reviews/Reviews";
// import TourPackages from "../../../pages/tours/tourPackages/TourPackages";

const Home = () => {
  return (
    <div>
      <Slider />
      <Intro />
      <Explore />
      {/* <TourPackages /> */}
      <PopularTour />
      <Featured />
      <Reviews />
    </div>
  );
};

export default Home;
