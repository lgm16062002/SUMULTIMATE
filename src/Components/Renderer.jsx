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
        <div className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 shadow-sm">
          <Header />
        </div>
        <Hero />
      </div>

      <PatientService />
     

      {/* Sticky Choose + overlapping WhereJourney block */}
      <div className="relative">
        <Choose />
        <WhereJourney />
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
