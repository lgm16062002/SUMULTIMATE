import { useEffect } from "react";
import Header from "./Components/Header.jsx";
import Hero from "./Components/hero.jsx";
import PatientService from "./Components/PatientService.jsx";
import CenterOfExcellence from "./Components/centerOfExcellence.jsx";
import Choose from "./Components/choose.jsx";
import WhereJourney from "./Components/whereJourney.jsx";
import Reward from "./Components/Reward.jsx";
import Leadership from "./Components/leadership.jsx";
import LatestBlog from "./Components/LatestBlog.jsx";
import Footer from "./Components/Footer.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import Lenis from "lenis";
import Doctor from "./Components/Doctor/Doctor.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Renderer from "./Components/Renderer.jsx";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
      easing: "ease-out-cubic",
    });
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      smoothTouch: false,
      wheelMultiplier: 1,
      touchMultiplier: 1,
    });

    lenis.on("scroll", ScrollTrigger.update);

    const raf = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    const handleAnchorClick = (e) => {
      const anchor = e.target?.closest?.("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href || href === "#" || !href.startsWith("#")) return;

      const targetEl = document.querySelector(href);
      if (!targetEl) return;

      e.preventDefault();

      const headerOffset = 90;
      lenis.stop();

      gsap.to(window, {
        duration: 1,
        ease: "power2.out",
        scrollTo: { y: targetEl, offsetY: headerOffset, autoKill: false },
        onComplete: () => {
          lenis.start();
        },
      });
    };

    document.addEventListener("click", handleAnchorClick);

    return () => {
      document.removeEventListener("click", handleAnchorClick);
      gsap.ticker.remove(raf);
      lenis.destroy();
    };
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Renderer/>} />
        <Route path="/doctor" element={<Doctor/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
