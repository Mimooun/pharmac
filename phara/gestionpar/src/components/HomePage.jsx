import React from "react";
import Oursite from "./Oursite";
import Owlprod from "./Owlprod";
import Products from "./Products";
import Chose from "./Chose";
import Experience from "./Experience";
import Pipeline from "./Pipeline";
import Testimonial from "./Testimonial";
import Contact from "./Contact";
import Footer from "./Footer";
import Home from "./Home";
import Navbar from "./Navbar";

function HomePage() {
  return (
    <div>
      <Navbar />
      <Home />
      <Oursite />
      <Products />
      <Owlprod />
      <Chose />
      <Experience />
      <Pipeline />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default HomePage;
