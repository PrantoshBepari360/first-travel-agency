
import PopularTour from "../../components/PopularTour/PopularTour";
import TravelPackages from "../../components/TravelPackages/TravelPackages";
import BackgroundVideo from "./BackgroundVideo";
import Explore from "./Explore";
import Featured from "./Featured/Featured";
import Intro from "./Intro";
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
      <BackgroundVideo />
    </div>
  );
};

export default Home;