export default function Hero() {
  return (
    <section
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

      {/* Light Black Overlay */}
      <div className="absolute inset-0 bg-black/30 -z-[5]" />

      {/* Hero Form Wrapper with Gradient */}
      <div
        className="relative z-10 w-full flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-[10px] px-4 sm:px-8 md:px-[65px] py-6 sm:py-10 md:py-[65px] bg-gradient-to-t from-[rgba(50,50,180,0.888)] to-transparent"
        data-aos="fade-up"
        data-aos-delay="150"
      >
        {/* Search Input with Icon */}
        <div className="relative flex-1 w-full max-w-[900px]">
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
  )
}
