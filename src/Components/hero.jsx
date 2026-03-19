import { useEffect, useRef, useState } from 'react';

import gsap from 'gsap';



const heroQuickLinks = [

  {

    label: "Doctors",

    href: "/doctor",

    iconSrc: "/doctor-icon.png",

    className:

      "bg-[linear-gradient(180deg,rgba(47,83,164,0.95)_0%,rgba(39,76,151,0.96)_100%)]",

  },

  {

    label: "Packages",

    href: "#services",

    iconSrc: "/packages-icon.png",

    className:

      "bg-[linear-gradient(180deg,rgba(35,104,170,0.95)_0%,rgba(29,98,161,0.96)_100%)]",

  },

  {

    label: "CSR Activities",

    href: "#blog",

    iconSrc: "/CSR-icon.png",

    className:

      "bg-[linear-gradient(180deg,rgba(20,125,159,0.95)_0%,rgba(13,117,149,0.96)_100%)]",

  },

  {

    label: "Patients Speak",

    href: "#services",

    iconSrc: "/patient-icon.png",

    className:

      "bg-[linear-gradient(180deg,rgba(8,136,152,0.95)_0%,rgba(3,126,141,0.96)_100%)]",

  },

];



export default function Hero() {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const titleRef1 = useRef(null);

  const titleRef2 = useRef(null);

  const subtitleRef = useRef(null);

  const lineRef = useRef(null);

  const typewriterRef = useRef(null);

  const cursorRef = useRef(null);

  const containerRef = useRef(null);



  useEffect(() => {

    const ctx = gsap.context(() => {

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });



      tl.fromTo(titleRef1.current,

        { y: 100, opacity: 0 },

        { y: 0, opacity: 1, duration: 1.4 }

      )

      .fromTo(titleRef2.current,

        { y: 100, opacity: 0 },

        { y: 0, opacity: 1, duration: 1.4 },

        "-=1.0"

      )

      .fromTo(subtitleRef.current,

        { y: 60, opacity: 0 },

        { y: 0, opacity: 1, duration: 1.2 },

        "-=0.8"

      )

      .fromTo(lineRef.current,

        { scaleX: 0, opacity: 0 },

        { scaleX: 1, opacity: 1, duration: 0.8, transformOrigin: "left center" },

        "-=0.6"

      );



      const tagline = "A legacy built on doctor-patient trust";

      typewriterRef.current.textContent = "";

      

      gsap.to({}, {

        duration: tagline.length * 0.12,

        onUpdate: function() {

          const progress = this.progress();

          const charIndex = Math.floor(progress * tagline.length);

          typewriterRef.current.textContent = tagline.substring(0, charIndex);

        },

        delay: 2.0,

        ease: "none"

      });



      gsap.fromTo(cursorRef.current,

        { opacity: 0 },

        { opacity: 1, duration: 0.5, repeat: -1, yoyo: true, delay: 2.0 }

      );



    }, containerRef);



    return () => ctx.revert();

  }, []);



  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200..1000;1,200..1000&display=swap');
      `}</style>
      <section

      ref={containerRef}

      className="relative w-full min-h-screen flex flex-col justify-end"

      id="top"

      data-aos="fade-in"

    >

      {/* Background Video */}

      <video

        autoPlay

        loop

        muted

        playsInline

        className="absolute inset-0 w-full h-full object-cover -z-10"

      >

        <source src="https://res.cloudinary.com/dqrufxqhl/video/upload/v1773134077/SUM_wobluz.mp4" type="video/mp4" />

        Your browser does not support the video tag.

      </video>



      {/* Left-to-right gradient overlay for text readability - hidden on mobile */}

      <div className="absolute inset-y-0 left-0 w-2/3 bg-gradient-to-r from-black/85 via-black/60 to-transparent -z-[4] hidden sm:block" />



      {/* Hero Text Content */}

      <div className="absolute inset-0 flex flex-col justify-center items-start px-6 sm:px-12 md:px-20 lg:px-28 z-10">

        <h1 className="overflow-hidden">

          <span ref={titleRef1} className="block text-[2.25rem] sm:text-[3rem] md:text-[3.75rem] lg:text-[4.5rem] leading-tight tracking-tight opacity-0" style={{ fontFamily: "'Mulish', sans-serif", background: 'linear-gradient(180deg, #00d2ff, #3dd9a8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>

            Bhubaneswar's

          </span>

          <span ref={titleRef2} className="block text-[2.25rem] sm:text-[3rem] md:text-[3.75rem] lg:text-[4.5rem] leading-tight tracking-tight text-[#00ff94] opacity-0" style={{ fontFamily: "'Mulish', sans-serif" }}>

            Ultimate Healthcare.

          </span>

        </h1>

        <p ref={subtitleRef} className="mt-4 text-[1.25rem] sm:text-[1.5rem] md:text-[1.75rem] tracking-wide text-white opacity-0" style={{ fontFamily: "'Inter', sans-serif" }}>

          Your Health. Our Priority.

        </p>

        <div ref={lineRef} className="mt-5 w-20 h-[2px] bg-white/80 opacity-0" />

        <p className="mt-5 text-[1.1rem] sm:text-[1.35rem] md:text-[1.5rem] italic tracking-wide text-white min-h-[2rem] flex items-center" style={{ fontFamily: "'Playfair Display', serif" }}>

          <span ref={typewriterRef}></span><span ref={cursorRef} className="opacity-0">|</span>

        </p>

      </div>



      {/* Mobile Sidebar Toggle Button */}

      <button

        onClick={() => setSidebarOpen(!sidebarOpen)}

        className="fixed top-42 right-0 z-30 sm:hidden flex items-center justify-center w-8 h-24 rounded-l-lg bg-[#3158a7] text-white shadow-lg transition-all duration-300"

        style={{ transform: sidebarOpen ? 'translateX(-180px)' : 'translateX(0)' }}

      >

        <i className={`fa-solid fa-chevron-left transition-transform duration-300 ${sidebarOpen ? 'rotate-180' : ''}`}></i>

      </button>



      {/* Our Ultimate Sidebar */}

      <div 

        className={`fixed sm:absolute top-36 right-0 sm:right-8 md:right-[100px] z-20 w-[180px] transition-transform duration-300 ease-out sm:translate-x-0 sm:block ${sidebarOpen ? 'translate-x-0 block' : 'translate-x-full hidden'}`}

      >

        <div className="overflow-hidden rounded-[22px] border border-white/10 bg-[linear-gradient(180deg,rgba(40,69,138,0.98)_0%,rgba(7,126,135,0.98)_100%)] shadow-[0_16px_34px_rgba(3,23,60,0.4)] backdrop-blur-sm">

          <div className="relative z-10 bg-[linear-gradient(180deg,#3158a7_0%,#2b4e97_100%)] px-4 pb-4 pt-5 text-center">

            <h3 className="text-[17px] font-semibold tracking-[-0.02em] text-white">

              Our Ultimate

            </h3>

            <div className="absolute bottom-0 left-0 h-[3px] w-full bg-[#1f3d78]" />

            <div className="absolute bottom-0 left-1/2 h-0 w-0 -translate-x-1/2 translate-y-full border-l-[14px] border-r-[14px] border-t-[11px] border-l-transparent border-r-transparent border-t-[#1f3d78]" />

          </div>



          <div className="relative z-0 flex flex-col">

            {heroQuickLinks.map(({ label, href, iconSrc, className }, index) => (

              <a

                key={label}

                href={href}

                className={`group flex min-h-[66px] items-center gap-3 px-4 text-white transition hover:brightness-110 ${className} ${

                  index < heroQuickLinks.length - 1

                    ? "border-b border-black/15"

                    : ""

                }`}

              >

                <div className="flex h-9 w-9 shrink-0 items-center justify-center">

                  <img

                    src={iconSrc}

                    alt=""

                    className="h-9 w-9 object-contain opacity-90"

                  />

                </div>

                <span className="text-[13px] font-medium tracking-[-0.01em] text-white/95">

                  {label}

                </span>

              </a>

            ))}

          </div>



          <div className="relative flex min-h-[62px] items-end justify-end overflow-hidden bg-[linear-gradient(180deg,rgba(4,132,141,0.96)_0%,rgba(2,112,121,0.98)_100%)] px-4 pb-0 pt-0">

            <img

              src="/sum-icon.png"

              alt="Sum Icon"

              className="h-12 w-12 object-contain opacity-40 lg:h-14 lg:w-14"

            />

          </div>

        </div>

      </div>



      {/* Hero Form Wrapper */}

      <div

        className="relative z-10 w-full flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-[10px] px-4 sm:px-8 md:px-[65px] py-6 sm:py-10 md:py-[65px]"

        data-aos="fade-up"

        data-aos-delay="150"

      >

        {/* Search Input with Icon */}

        <div className="relative flex-1 w-full max-w-[1100px]">

          <i className="fa-solid fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>

          <input

            type="text"

            placeholder="Search by disease or symptom (e.g., diabetes, headache)"

            className="w-full pl-12 pr-4 py-3 text-[15px] sm:text-[16px] border border-[#ccc] rounded-[25px] outline-none bg-white"

          />

        </div>

        <button

          type="button"

          className="inline-flex items-center justify-center gap-2 px-6 py-3 text-[15px] sm:text-[16px] rounded-[25px] bg-[rgba(73,204,73,0.678)] text-white no-underline hover:text-white shrink-0 w-full sm:w-auto"

        >

          <i className="fa-solid fa-calendar-days"></i> Book Appointment

        </button>

      </div>



      {/* Bouncing down arrow */}

      <div

        className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 z-20"

        data-aos="fade-up"

        data-aos-delay="300"

      >

        <a href="#services" className="inline-block">

          <div className="w-[40px] h-[40px] p-[10px] rounded-full bg-[rgba(50,50,180,0.888)] animate-bounce flex items-center justify-center text-white">

            {/* Using font awesome chevron as image fallback */}

            <i className="fa-solid fa-chevron-down text-sm"></i>

          </div>

        </a>

      </div>

    </section>
    </>
  )

}

