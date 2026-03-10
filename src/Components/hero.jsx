export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-end">
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

      {/* Hero Form Wrapper with Gradient */}
      <div className="relative z-10 w-full flex items-center justify-center gap-[10px] p-[65px] bg-gradient-to-t from-[rgba(50,50,180,0.888)] to-transparent max-md:flex-col max-md:p-8 max-md:items-center">
        <input
          type="text"
          placeholder="   "
          className="flex-1 px-[15px] py-[12px] text-[16px] border border-[#ccc] rounded-[25px] outline-none bg-white w-full max-w-[900px]"
        />
        <a
          href="#"
          className="inline-flex items-center gap-2 px-[25px] py-[12px] text-[16px] rounded-[25px] bg-[rgba(73,204,73,0.678)] text-white no-underline hover:text-white shrink-0"
        >
          <i className="fa-solid fa-calendar-days"></i> Book Appointment
        </a>
      </div>

      {/* Bouncing down arrow */}
      <div className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 z-20">
        <a href="#car" className="inline-block">
          <div className="w-[40px] h-[40px] p-[10px] rounded-full bg-[rgba(50,50,180,0.888)] animate-bounce flex items-center justify-center text-white">
            {/* Using font awesome chevron as image fallback */}
            <i className="fa-solid fa-chevron-down text-sm"></i>
          </div>
        </a>
      </div>
    </section>
  )
}
