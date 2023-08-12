import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../Header/Header";
import Home from "../../Pages/Home/Home";
import About from "../../Pages/About/About";
import Services from "../../Pages/Tours/Tours";
import Contact from "../../Pages/Contact/Contact";
import Login from "../../components/Auth/Login";
import Register from "../../components/Auth/Register";
import Footer from "../Footer/Footer";
import PackagesDetails from "../../Pages/Home/TravelPackages/PackagesDetails";
import Blog from "../../Pages/Blog/Blog";
import TourBooking from "../../Pages/Home/TravelPackages/TourBooking";
import Tours from "../../Pages/Tours/Tours";
import Shop from "../../Pages/Shop/Shop";
import Element from "../../Pages/Element/Element";
import Navbar from "../../component/navbar";


const Main = () => {
  return (
    <>
      <Header />
        <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/tours" element={<Tours />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/element" element={<Element />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/tourDetails/:id" element={<PackagesDetails />}></Route>
        <Route path="/tourBooking" element={<TourBooking></TourBooking>}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
      <Footer />
    </>
  );
};

export default Main;
