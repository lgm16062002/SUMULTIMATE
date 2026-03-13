import React from "react";
import Hero from "./hero";
import PatientService from "./PatientService";
import CenterOfExcellence from "./centerOfExcellence";
import Choose from "./choose";
import WhereJourney from "./whereJourney";
import Leadership from "./leadership";
import Reward from "./Reward";
import LatestBlog from "./LatestBlog";
import Footer from "./Footer";
import Header from "./Header";

const Renderer = () => {
  return (
    <>
      <div className="w-full relative">
        <div className="absolute top-0 left-0 w-full z-50 bg-gradient-to-b from-white/100 via-white/40 to-transparent pb-10">
          <Header />
        </div>
        <Hero />
      </div>

      <PatientService />
     

      {/* Sticky WhereJourney + overlapping Choose block */}
      <div className="relative">
        <WhereJourney />
        <Choose />
      </div>
       <CenterOfExcellence />

      <Leadership />
      <Reward />
      <LatestBlog />
      <Footer />
    </>
  );
};

export default Renderer;
