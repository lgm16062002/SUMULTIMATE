import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { doctorProfile } from "./constants";

export default function DoctorHero({
  heroSectionRef,
  heroImageFrameRef,
  heroImageRef,
  onNavigateToSection,
}) {
  return (
    <>
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
        {/* Left: Image */}
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

        {/* Right: Info */}
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
              onClick={() => onNavigateToSection("awards-recognition")}
              className="doctor-hero-fade mt-8 inline-flex w-full items-center justify-center gap-3 border-2 border-black px-5 py-3 text-[16px] text-black transition hover:bg-black hover:text-white sm:mt-10 sm:min-w-[260px] sm:w-auto sm:px-6 sm:py-4 sm:text-[17px] lg:mt-12 lg:min-w-[300px] lg:gap-4 lg:px-7 lg:text-[18px]"
            >
              Awards & Recognition
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
