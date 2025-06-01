import React from "react";
import Hero from "./Hero";
import Categories from "./Categories";
import PromoBanner from "./NewArrivals";
import BestSeller from "./BestSeller";
import NewsBanner from "./Testimonials";

const Home = () => {
  return (
    <main>
      <Hero />
      {/* <Categories /> */}
      <PromoBanner />
      <BestSeller />
      <NewsBanner />
    </main>
  );
};

export default Home;
