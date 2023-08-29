import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/shared/navbar";
import Home from "../Pages/Home";
import About from "../Pages/About/About";
import Tours from "../Pages/Tours";
import Shop from "../Pages/Shop/Shop";
import Blog from "../Pages/Blog";
import Contact from "../Pages/contacts";
import PrivetOutlet from "../login/PrivetOutlet";
import PackageDetails from "../Pages/Tours/tourPackages/PackageDetails";
import ProductDetails from "../Pages/Shop/ProductDetails";
import TourBooking from "../Pages/Booking/TourBooking";
import FeatureDetails from "/src/Pages/Home/featured/FeatureDetails";
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
