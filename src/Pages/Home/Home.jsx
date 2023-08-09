
import Slider from "./Slider/Slider";
import Intro from "./Intro/Intro";
import Explore from "./Explore/Explore";
import TravelPackages from "./TravelPackages/TravelPackages";
import PopularTour from "./PopularTour/PopularTour";

const Home = () => {
  return (
    <div>
      <Slider />
      <Intro />
      <Explore />
      <TravelPackages />
      <PopularTour />
    </div>
  );
};

export default Home;
