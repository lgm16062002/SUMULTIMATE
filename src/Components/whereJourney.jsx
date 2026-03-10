
export default function WhereJourney() {
  return (
    <section className="relative w-full min-h-[500px] md:h-[600px] bg-[#eef6f6] flex items-center justify-center md:justify-end overflow-hidden py-[50px] md:py-0">

      {/* Background Watermark */}
      <img
        src="/sum-section.png"
        alt="Background Pattern"
        className="absolute bottom-[-15%] right-[-5%] h-[350px] opacity-[0.05] pointer-events-none z-0"
      />

      {/* Image on the left anchored to the bottom */}
      <img
        src="/patient.png"
        alt="Compassionate Care"
        className="absolute left-0 bottom-0 h-auto w-[90%] md:w-[50%] lg:w-[45%] object-contain z-10 max-md:static max-md:mb-8 max-md:w-[80%]"
      />

      {/* Content wrapper taking up the right side */}
      <div className="relative z-20 w-[90%] md:w-[60%] flex flex-col items-center md:items-start text-center md:text-left pl-0 md:pl-[5%] pr-0 md:pr-[5%]">
        <h2 className="text-[#2b6b7a] text-[32px] md:text-[40px] lg:text-[45px] font-semibold tracking-wide leading-[1.2] mb-6 max-w-[600px]">
          Where Your Journey Meets<br />Compassionate Care
        </h2>

        <h3 className="text-[#666] text-[20px] md:text-[22px] font-medium mb-6">
          Realizing Patient-Centered Care
        </h3>

        <p className="text-[#444] text-[18px] md:text-[20px] font-light leading-[1.6] max-w-[650px] mb-12">
          We are committed to providing medical services that prioritize each patient's unique experience &ndash; ensuring personalized, respectful, and collaborative care at every step.
        </p>

        <button className="bg-transparent border-2 border-[#1e6ac2] text-[#6b6b6b] hover:bg-[#1e6ac2] hover:text-white transition-all duration-300 font-medium py-[10px] px-[40px] rounded-[30px] text-[16px] tracking-wide max-md:mx-auto">
          Know More
        </button>
      </div>

    </section>
  )
}

