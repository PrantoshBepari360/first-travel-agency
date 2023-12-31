import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/shared/navbar";
import Home from "../components/pages/home";
import About from "../components/pages/about/About";
import Tours from "../components/pages/tours";
import Shop from "../components/pages/shop/Shop";
import Blog from "../components/pages/blog";
import Contact from "../components/pages/contacts";
import PrivetOutlet from "../login/PrivetOutlet";
import ProductDetails from "../components/pages/shop/ProductDetails";
import PackageDetails from "../components/pages/tours/tourPackages/PackageDetails";
import TourBooking from "../components/pages/booking/TourBooking";
import FeatureDetails from "../components/pages/home/featured/FeatureDetails";
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
