
import Slider from "./Slider";
import Intro from "./Intro";
import Explore from "./Explore";
import TourPackages from "../../../pages/tours/tourPackages/TourPackages";
import PopularTour from "./popularTour/PopularTour";
import Featured from "./featured/Featured";
import Reviews from "./reviews/Reviews";

const Home = () => {
  return (
    <div>
      <Slider />
      <Intro />
      <Explore />
      <TourPackages />
      <PopularTour />
      <Featured />
      <Reviews />
    </div>
  );
};

export default Home;
