import { useRef } from "react";
import Header from "../Header.jsx";
import Footer from "../Footer.jsx";
import DoctorHero from "./DoctorHero.jsx";
import DoctorSections from "./DoctorSections.jsx";
import { useDoctorAnimations } from "./useDoctorAnimations";

const Doctor = () => {
  const sectionRefs = useRef({});
  const articleRefs = useRef([]);
  const navFillRefs = useRef([]);
  const navTextFillRefs = useRef([]);
  const heroSectionRef = useRef(null);
  const heroImageFrameRef = useRef(null);
  const heroImageRef = useRef(null);

  useDoctorAnimations({
    heroSectionRef,
    heroImageFrameRef,
    heroImageRef,
    articleRefs,
    navFillRefs,
    navTextFillRefs,
  });

  const scrollToSection = (sectionId) => {
    const target = sectionRefs.current[sectionId];
    if (!target) return;
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <div className="relative z-40 bg-gradient-to-b from-white via-white/90 to-white/70">
        <Header />
      </div>

      <section className="min-h-screen bg-[linear-gradient(90deg,#eff4fb_0%,#f7f4e8_22%,#f3f3f3_48%,#ecf4fb_74%,#f6eaed_100%)] text-[#111]">
        <div className="mx-auto max-w-[1820px] px-5 py-6 sm:px-8 lg:px-12">
          <DoctorHero
            heroSectionRef={heroSectionRef}
            heroImageFrameRef={heroImageFrameRef}
            heroImageRef={heroImageRef}
            onNavigateToSection={scrollToSection}
          />

          <DoctorSections
            sectionRefs={sectionRefs}
            articleRefs={articleRefs}
            navFillRefs={navFillRefs}
            navTextFillRefs={navTextFillRefs}
            onNavigateToSection={scrollToSection}
          />
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Doctor;
