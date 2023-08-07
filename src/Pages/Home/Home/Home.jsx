import Explore from '../Explore/Explore';
import Featured from '../Featured/Featured';
import Intro from '../Intro/Intro';
import PopularPlace from '../PopularPlace/PopularPlace';
import Slider from '../Slider/Slider';


const Home = () => {
    return (
        <div>
            <Slider/>
            <Intro/>
            <Explore/>
            <PopularPlace/>
            <Featured/>
        </div>
    );
};

export default Home;