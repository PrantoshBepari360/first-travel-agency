import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About/About";
import Tours from "../Pages/Tours";
import Shop from "../Pages/Shop/Shop";
import Contact from "../Pages/contacts";
import Login from "../login/Login";
import Register from "../login/Register";
import TourBooking from "../Pages/Booking/TourBooking";
import Blog from "../Pages/Blog";
import PackageDetails from "../Pages/Tours/tourPackages/PackageDetails";
import ProductDetails from "../Pages/Shop/ProductDetails";
import PrivetOutlet from "../login/PrivetOutlet";
import Navbar from "../components/shared/navbar";
import Footer from "../components/shared/footer/Footer";
import FeatureDetails from "../Pages/Home/featured/FeatureDetails";

const Routers = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/featureDetails" element={<FeatureDetails />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/*" element={<PrivetOutlet />}>
          <Route path="tours" element={<Tours />}></Route>
          <Route path="tourDetails/:id" element={<PackageDetails />}></Route>
        </Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/product/:id" element={<ProductDetails />}></Route>

        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/tourBooking/:id" element={<TourBooking />}></Route>

        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Routers;
