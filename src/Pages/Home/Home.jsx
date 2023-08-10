import Slider from "./Slider/Slider";
import Intro from "./Intro/Intro";
import Explore from "./Explore/Explore";
import TravelPackages from "./TravelPackages/TravelPackages";
import PopularTour from "./PopularTour/PopularTour";
import Featured from "./Featured/Featured";
import BackgroundVideo from "./Slider/BackgroundVideo";
import TravelForm from "./Slider/TravelForm/TravelForm";


const Home = () => {
  return (
    <div>
      <Slider />
      <TravelForm/>
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
