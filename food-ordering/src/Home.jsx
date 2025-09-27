import React from "react";
import Carousel from "./Carousel.jsx";
import FoodGallery from "./FoodGallery.jsx";
import FoodCard from "./FoodCard.jsx";
import AboutUs from "./AboutUs.jsx";
import Testimonials from "./Testimonials.jsx";
import Blogs from "./Blogs.jsx";
import Menu from "./Menu.jsx";
import Services from "./Services.jsx";

export default function Home() {
  return (
    <div className="main">
      <Carousel />
      <FoodGallery />
      <FoodCard />
      <AboutUs />
      <Testimonials />
      <Blogs />
      <Menu />
      <Services />
    </div>
  );
}
