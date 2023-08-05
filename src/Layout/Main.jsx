import { Outlet } from "react-router-dom/dist";
import Footer from "../components/Shared/Footer/Footer";



const Main = () => {
    return (
        <div>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;