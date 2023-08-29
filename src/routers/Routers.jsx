import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/shared/navbar";
import Home from "../pages/Home";
import About from "../pages/About/About";
import Tours from "../pages/Tours";
import Shop from "../pages/Shop/Shop";
import Blog from "../pages/Blog";
import Contact from "../pages/contacts";
import PrivetOutlet from "../login/PrivetOutlet";
import PackageDetails from "../pages/Tours/tourPackages/PackageDetails";
import ProductDetails from "../pages/Shop/ProductDetails";
import TourBooking from "../pages/Booking/TourBooking";
import FeatureDetails from "../pages/Home/featured/FeatureDetails";
import Login from "../login/Login";
import Register from "../login/Register";
import Footer from "../components/shared/footer/Footer";

const Routers = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/tours" element={<Tours />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/contact" element={<Contact />}></Route>

        <Route path="/*" element={<PrivetOutlet />}>
          <Route path="tourDetails/:id" element={<PackageDetails />}></Route>
          <Route path="product/:id" element={<ProductDetails />}></Route>
        </Route>

        <Route path="/tourBooking/:id" element={<TourBooking />}></Route>
        <Route path="/featureDetails" element={<FeatureDetails />}></Route>

        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Routers;
