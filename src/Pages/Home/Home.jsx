
import Slider from "./Slider/Slider";
import Intro from "./Intro/Intro";
import Explore from "./Explore/Explore";
import TravelPackages from "./TravelPackages/TravelPackages";
import PopularTour from "./PopularTour/PopularTour";
import BackgroundVideo from "./Slider/BackgroundVideo";

const Home = () => {
  return (
    <div>
      <Slider />
      {/* <BackgroundVideo></BackgroundVideo> */}
      <Intro />
      <Explore />
      <TravelPackages />
      <PopularTour />
    </div>
  );
};

export default Home;
