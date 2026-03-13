import { useEffect, useMemo, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Header from "../Header.jsx";
import Footer from "../Footer.jsx";

const doctorProfile = {
  degree: "Senior Consultant & HOD",
  name: "Dr Radhamadhab Sahu",
  department: "ENT and Skull Base Surgery",
  specialtyGroup: "9:30 AM to 5:30 PM",
  expertise: [
    "Endoscopic Skull Base Surgery",
    "Trans Oral Endoscopic Thyroid Surgery",
    "Endoscopic Sinus Surgery",
    "Endoscopic Ear Surgery",
    "Voice & Laser Surgery",
    "Cochlear Implants",
  ],
};

const doctorSections = [
  {
    id: "qualifications",
    label: "Qualifications",
    title: "Qualifications",
    items: [
      {
        heading:
          "MBBS - SCB Medical College & Hospital",
      },
      {
        heading:
          "DNB (ENT) - VMMC & Safdarjung Hospital, New Delhi",
      },
      {
        heading:
          "Neurosurgery training for skull base surgery - VMMC & Safdarjung Hospital, New Delhi",
      },
    ],
  },
  {
    id: "expertise",
    label: "Expertise",
    title: "Expertise",
    items: [
      {
        heading:
          "Endoscopic Minimal Invasive Skull Base Surgery",
        description: "Both anterior and lateral skull base approaches",
      },
      {
        heading: "Trans oral Endoscopic thyroid surgery",
        description: "Complete scar less approach",
      },
      {
        heading: "Endoscopic Sinus Surgery",
      },
      {
        heading: "Endoscopic Ear Surgery",
      },
      {
        heading: "Eustachian tube surgery",
        description: "Balloon Eustachian Tuboplasty",
      },
      {
        heading: "Voice surgery, Laryngology, Laser surgery",
      },
      {
        heading:
          "Cochlear Implants, BAHA, Auditory Brainstem Implant, Vestibular Implant",
      },
      {
        heading: "Snoring and Obstructive Sleep Apnea surgery",
      },
      {
        heading: "Head & Neck cancer Surgery",
      },
      {
        heading: "Sialoendoscopy",
      },
      {
        heading: "Vestibular Rehabilitation",
      },
    ],
  },
  {
    id: "brief-profile",
    label: "Brief Profile",
    title: "Brief Profile",
    items: [
      {
        heading:
          "Dr. Radhamadhab Sahu is an exceptionally talented and internationally acclaimed ENT & Skull Base Surgeon with enormous experience in handling challenging cases.",
      },
      {
        heading:
          "He completed his post-graduation in ENT from VMMC & Safdarjung Hospital, New Delhi, followed by 3 years of neurosurgery training for skull base surgery.",
      },
      {
        heading:
          "He has more than 12 years of clinical and surgical expertise in ENT & Skull Base Surgery, including minimally invasive skull base and extended endoscopic approaches.",
      },
      {
        heading:
          "Dr. Sahu has worked with Padmashree Dr. (Prof.) V. S. Mehta at Paras Hospital Gurgaon as an independent consultant for endoscopic skull base surgery.",
      },
      {
        heading:
          "He has operated more than 600 skull base cases, including international patients from over 20 countries.",
      },
      {
        heading:
          "He introduced multiple surgeries in Odisha including trans oral endoscopic thyroid surgery, Balloon Eustachian Tuboplasty, endoscopic trans nasal excision of Trigeminal Schwannoma, sialoendoscopy, and endoscopic trans oral submandibular gland excision.",
      },
      {
        heading:
          "He is an international faculty member for instructional courses, cadaveric dissections, and fellowship courses, with numerous publications and conference lectures.",
      },
      {
        heading:
          "Dr. Sahu has also saved the lives of many babies with difficult tracheobronchial foreign bodies using innovative techniques.",
      },
    ],
  },
  {
    id: "awards-recognition",
    label: "Awards & Recognition",
    title: "Awards & Recognition",
    items: [
      {
        heading:
          "Awarded with Ved Prakash Monga Award for best temporal bone dissection",
      },
    ],
  },
];

const Doctor = () => {
  const sectionRefs = useRef({});
  const articleRefs = useRef([]);
  const navFillRefs = useRef([]);
  const navTextFillRefs = useRef([]);
  const heroSectionRef = useRef(null);
  const heroImageFrameRef = useRef(null);
  const heroImageRef = useRef(null);

  const orderedSections = useMemo(() => doctorSections, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".doctor-hero-fade",
        { y: 28, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.08,
        }
      );

      if (heroSectionRef.current && heroImageFrameRef.current && heroImageRef.current) {
        gsap.fromTo(
          heroImageFrameRef.current,
          { y: 0 },
          {
            y: -32,
            ease: "none",
            scrollTrigger: {
              trigger: heroSectionRef.current,
              start: "top top",
              end: "bottom top",
              scrub: true,
            },
          }
        );

        gsap.fromTo(
          heroImageRef.current,
          { yPercent: 0, scale: 1.08 },
          {
            yPercent: -3.5,
            scale: 1.12,
            ease: "none",
            scrollTrigger: {
              trigger: heroSectionRef.current,
              start: "top top",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      }

      orderedSections.forEach((section, index) => {
        const article = articleRefs.current[index];
        if (!article) return;

        gsap.fromTo(
          article,
          { y: 36, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.75,
            ease: "power2.out",
            scrollTrigger: {
              trigger: article,
              start: "top 86%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      mm.add("(min-width: 1024px)", () => {
        orderedSections.forEach((section, index) => {
          const article = articleRefs.current[index];
          const fill = navFillRefs.current[index];
          const textFill = navTextFillRefs.current[index];
          const getCardWidth = () => fill?.parentElement?.offsetWidth ?? 0;

          if (!article || !fill || !textFill) return;

          gsap.set(fill, {
            width: index === 0 ? "100%" : "0%",
          });

          gsap.set(textFill, {
            width: index === 0 ? "100%" : "0%",
          });

          ScrollTrigger.create({
            trigger: article,
            start: "top 80%",
            end: "bottom 60%",
            scrub: true,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              const width = `${getCardWidth() * self.progress}px`;
              gsap.set(fill, { width });
              gsap.set(textFill, { width });
            },
            onRefresh: (self) => {
              const width = `${getCardWidth() * self.progress}px`;
              gsap.set(fill, { width });
              gsap.set(textFill, { width });
            },
          });
        });
      });

      mm.add("(max-width: 1023px)", () => {
        navFillRefs.current.forEach((fill) => {
          if (fill) {
            gsap.set(fill, { width: "0%" });
          }
        });

        navTextFillRefs.current.forEach((textFill) => {
          if (textFill) {
            gsap.set(textFill, { width: "0%" });
          }
        });
      });
    });

    return () => {
      mm.revert();
      ctx.revert();
    };
  }, [orderedSections]);

  const scrollToSection = (sectionId) => {
    const target = sectionRefs.current[sectionId];
    if (!target) return;

    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      <div className="relative z-40 bg-gradient-to-b from-white via-white/90 to-white/70">
        <Header />
      </div>

      <section className="min-h-screen bg-[linear-gradient(90deg,#eff4fb_0%,#f7f4e8_22%,#f3f3f3_48%,#ecf4fb_74%,#f6eaed_100%)] text-[#111]">
        <div className="mx-auto max-w-[1820px] px-5 py-6 sm:px-8 lg:px-12">
          <div className="doctor-hero-fade mb-6 flex items-center gap-3 text-[15px] text-[#555]">
            <Link to="/" className="inline-flex items-center gap-2 hover:text-[#1f3ab3]">
              <ArrowLeft className="h-4 w-4" />
              Home
            </Link>
            <span className="text-[#999]">&rsaquo;</span>
            <span className="font-serif italic text-[#222]">Find a Doctor</span>
          </div>

          <div
            ref={heroSectionRef}
            className="grid min-h-[auto] lg:min-h-[140vh] lg:grid-cols-[1fr_1fr] xl:min-h-[155vh] lg:items-stretch"
          >
            <div className="relative h-full bg-[#e9e9ea] px-3 py-3 sm:px-5 sm:py-5 lg:px-8 lg:py-8">
              <div className="lg:sticky lg:top-5 lg:h-[min(62vh,560px)] xl:h-[min(68vh,620px)]">
                <div
                  ref={heroImageFrameRef}
                  className="doctor-hero-fade relative flex h-full min-h-[360px] items-end justify-center overflow-hidden border border-white/70 bg-[#efefef] p-3 shadow-[0_18px_60px_rgba(0,0,0,0.08)] sm:min-h-[460px] sm:p-4 lg:min-h-[500px] lg:p-6"
                >
                  <div className="pointer-events-none absolute inset-0 border-[8px] border-[#f7f7f7] sm:border-[10px] lg:border-[12px]" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.75),transparent_32%),linear-gradient(180deg,rgba(255,255,255,0.45),rgba(255,255,255,0.15))]" />
                  <img
                    ref={heroImageRef}
                    src="/RadhaMadhab.webp"
                    alt={doctorProfile.name}
                    className="relative z-10 h-full max-h-[420px] w-auto object-contain grayscale-[0.08] brightness-110 sm:max-h-[560px] lg:max-h-[700px] xl:max-h-[760px]"
                  />
                </div>
              </div>
            </div>

            <div className="flex min-h-[auto] self-start bg-[#f4f4f4] px-5 py-8 sm:px-8 sm:py-10 lg:min-h-[calc(100vh-2.5rem)] lg:px-[72px] lg:pt-[138px] lg:pb-16">
              <div className="max-w-[430px] self-start">
                <p className="doctor-hero-fade text-[16px] font-medium tracking-tight text-[#8a8a8a] sm:text-[20px] lg:text-[24px]">
                  {doctorProfile.degree}
                </p>
                <h1 className="doctor-hero-fade mt-2 text-[24px] font-medium tracking-[-0.03em] text-black sm:text-[30px] lg:text-[42px]">
                  {doctorProfile.name}
                </h1>

                <div className="doctor-hero-fade mt-8 space-y-5 text-[15px] text-[#8a8a8a] sm:mt-10 sm:space-y-6 sm:text-[17px] lg:mt-12 lg:space-y-7 lg:text-[18px]">
                  <div>
                    <p>Department</p>
                    <a
                      href="#qualifications"
                      className="mt-2 inline-block text-[16px] text-[#1848dd] underline sm:text-[18px] lg:text-[20px]"
                    >
                      {doctorProfile.department}
                    </a>
                  </div>

                  <div>
                    <p>Availability</p>
                    <a
                      href="#brief-profile"
                      className="mt-2 inline-block text-[16px] text-[#1848dd] underline sm:text-[18px] lg:text-[20px]"
                    >
                      {doctorProfile.specialtyGroup}
                    </a>
                  </div>

                  <div>
                    <p>Clinical Expertise</p>
                    <div className="mt-3 flex flex-wrap gap-2 sm:mt-4 sm:gap-3">
                      {doctorProfile.expertise.map((item) => (
                        <span
                          key={item}
                          className="rounded-[4px] border border-[#d8d8d8] bg-[#ececec] px-3 py-2 text-[13px] text-[#111] sm:px-4 sm:text-[14px] lg:text-[16px]"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => scrollToSection("awards-recognition")}
                  className="doctor-hero-fade mt-8 inline-flex w-full items-center justify-center gap-3 border-2 border-black px-5 py-3 text-[16px] text-black transition hover:bg-black hover:text-white sm:mt-10 sm:min-w-[260px] sm:w-auto sm:px-6 sm:py-4 sm:text-[17px] lg:mt-12 lg:min-w-[300px] lg:gap-4 lg:px-7 lg:text-[18px]"
                >
                  Awards & Recognition
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-8 lg:mt-16 lg:grid-cols-[430px_minmax(0,1fr)] lg:gap-24">
            <aside className="lg:sticky lg:top-10 lg:self-start">
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 lg:block lg:space-y-4">
                {orderedSections.map((section, index) => (
                  <button
                    key={section.id}
                    type="button"
                    onClick={() => scrollToSection(section.id)}
                    className="group relative block w-full overflow-hidden rounded-none bg-[#ececec] text-left shadow-none transition lg:w-fit"
                  >
                    <span
                      ref={(el) => {
                        navFillRefs.current[index] = el;
                      }}
                      className="absolute inset-y-0 left-0 hidden bg-[#1d34b6] lg:block"
                      style={{ width: index === 0 ? "100%" : "0%" }}
                    />
                    <span
                      ref={(el) => {
                        navTextFillRefs.current[index] = el;
                      }}
                      className="pointer-events-none absolute inset-y-0 left-0 z-20 hidden overflow-hidden whitespace-nowrap lg:block"
                      style={{ width: index === 0 ? "100%" : "0%" }}
                    >
                      <span className="flex items-center gap-2 px-5 py-3 text-[13px] font-normal text-white sm:text-[15px]">
                        <span className="font-serif leading-none">{section.label}</span>
                        <span className="text-[18px] leading-none text-white">+</span>
                      </span>
                    </span>
                    <span className="relative z-10 flex items-center justify-between gap-2 px-4 py-3 text-[13px] text-black sm:px-5 sm:text-[14px] lg:justify-start lg:text-[15px]">
                      <span className="font-serif leading-none">{section.label}</span>
                      <span className="text-[18px] leading-none text-[#1d34b6] lg:text-[18px]">+</span>
                    </span>
                  </button>
                ))}
              </div>
            </aside>

            <div className="space-y-14 pr-0 sm:space-y-16 lg:space-y-24 lg:pr-12">
              {orderedSections.map((section, index) => (
                <article
                  key={section.id}
                  id={section.id}
                  ref={(el) => {
                    sectionRefs.current[section.id] = el;
                    articleRefs.current[index] = el;
                  }}
                  className="scroll-mt-24"
                >
                  <h2 className="font-serif text-[24px] italic leading-none text-black sm:text-[28px] lg:text-[34px]">
                    {section.title}
                  </h2>

                  <div className="mt-8 space-y-7 sm:mt-10 sm:space-y-8 lg:mt-12 lg:space-y-10">
                    {section.items.map((item) => (
                      <div key={`${section.id}-${item.range ?? item.heading}`} className="max-w-[980px]">
                        {item.range ? (
                          <p className="text-[18px] font-light tracking-[-0.02em] text-[#8a8a8a] sm:text-[20px] lg:text-[24px]">
                            {item.range}
                          </p>
                        ) : null}

                        {item.heading ? (
                          <p
                            className={`text-[16px] leading-[1.55] text-black sm:text-[18px] lg:text-[22px] ${
                              item.range ? "mt-3 lg:mt-4" : ""
                            } ${
                              section.id === "expertise" && item.description
                                ? "font-serif italic uppercase text-[#1d34b6]"
                                : ""
                            }`}
                          >
                            {item.heading}
                          </p>
                        ) : null}

                        {item.description ? (
                          <p className="mt-2 text-[15px] leading-[1.55] text-black sm:text-[17px] lg:text-[22px]">
                            {item.description}
                          </p>
                        ) : null}
                      </div>
                    ))}
                  </div>

                  {section.id === "professional-memberships" ? (
                  <button
                    type="button"
                    onClick={() => scrollToSection("awards-recognition")}
                    className="mt-10 inline-flex w-full items-center justify-center gap-3 border-2 border-black px-5 py-3 text-[16px] text-black transition hover:bg-black hover:text-white sm:mt-12 sm:min-w-[260px] sm:w-auto sm:px-6 sm:py-4 sm:text-[17px] lg:mt-16 lg:min-w-[300px] lg:gap-4 lg:px-7 lg:text-[18px]"
                  >
                    Awards & Recognition
                    <ArrowRight className="h-5 w-5" />
                  </button>
                  ) : null}
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Doctor;
