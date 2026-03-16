import React from "react";
import Hero from "./hero";
import PatientService from "./PatientService";
import CenterOfExcellence from "./centerOfExcellence";
import Choose from "./choose";
import WhereJourney from "./whereJourney";
import Leadership from "./leadership";
import Reward from "./Reward";
import PatientsSpeak from "./PatientsSpeak";
import LatestBlog from "./LatestBlog";
import Footer from "./Footer";
import Header from "./Header";

const footerCtas = [
  {
    title: "Request an Appointment",
    href: "#contact",
    icon: "/calendar.png",
  },
  {
    title: "Find a Doctor",
    href: "/doctor",
    icon: "/search.png",
  },
];

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
      <PatientsSpeak />
      <div className="relative">
        <LatestBlog />

        <div className="absolute inset-x-0 bottom-0 z-20 translate-y-1/2 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-[920px] gap-5 md:grid-cols-2">
            {footerCtas.map((cta) => {
              return (
                <a
                  key={cta.title}
                  href={cta.href}
                  className="flex min-h-[76px] items-center gap-6 rounded-[8px] bg-[#18916d] px-7 py-4 text-white shadow-[0_16px_28px_rgba(0,0,0,0.22)] transition-transform duration-300 hover:-translate-y-1"
                >
                  <img src={cta.icon} alt="" className="h-12 w-12 shrink-0 object-contain" />
                  <span className="text-[18px] font-normal tracking-[0.01em] sm:text-[20px]">
                    {cta.title}
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Renderer;
