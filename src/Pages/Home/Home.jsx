import PopularTour from "../../components/PopularTour/PopularTour";
import TravelPackages from "../../components/TravelPackages/TravelPackages";
import Explore from "./Explore";
import Featured from "./Featured/Featured";
import Intro from "./Intro";
import Reviews from "./Reviews/Reviews";
import Slider from "./Slider";

const Home = () => {
  return (
    <div>
      <Slider />
      <Intro />
      <Explore />
      <TravelPackages />
      <PopularTour />
      <Featured />
      <Reviews />
    </div>
  );
};

export default Home;
