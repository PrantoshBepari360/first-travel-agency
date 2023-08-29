import TourPackages from "../Tours/tourPackages/TourPackages";
import Explore from "./Explore";
import Intro from "./Intro";
import Slider from "./Slider";
import Featured from "./featured/Featured";
import PopularTour from "./popularTour/PopularTour";
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
