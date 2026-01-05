import React from "react";
import Hero from "./component/Hero";
import TreadmillListing from "./component/TreadmillListing";
import TrainerCategories from "./component/TrainingCategories";
import TrainerCards from "./component/TrainerCards";
import FAQ from "./component/FAQ";

const Homepage = () => {
  return (
    <div>
      <Hero />
      <TreadmillListing />
      <TrainerCategories />
      <TrainerCards />
      <FAQ />
    </div>
  );
};

export default Homepage;
