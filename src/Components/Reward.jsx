
export default function Reward() {
  return (
    <section
      className="bg-[#cfd7dc] py-14 sm:py-[80px] px-4 sm:px-[20px] text-center"
      id="awards"
      data-aos="fade-up"
    >
      <h2
        className="text-[22px] sm:text-[28px] font-semibold tracking-[2px] text-[#163b5c] mb-10 sm:mb-[60px] uppercase"
        data-aos="fade-up"
        data-aos-delay="50"
      >
        ULTIMATE AWARDS & ACCREDITATION
      </h2>

      <div className="max-w-[1100px] mx-auto flex gap-6 sm:gap-[40px] justify-center flex-wrap">
        <div
          className="w-[300px] max-md:w-[260px] max-sm:w-[90%] max-sm:max-w-[350px]"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <img
            src="/award1.png"
            alt="Award 1"
            className="w-full rounded-[18px] shadow-[0_8px_20px_rgba(0,0,0,0.15)] block"
          />
        </div>

        <div
          className="w-[300px] max-md:w-[260px] max-sm:w-[90%] max-sm:max-w-[350px]"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          <img
            src="/award2.png"
            alt="Award 2"
            className="w-full rounded-[18px] shadow-[0_8px_20px_rgba(0,0,0,0.15)] block"
          />
        </div>

        <div
          className="w-[300px] max-md:w-[260px] max-sm:w-[90%] max-sm:max-w-[350px]"
          data-aos="zoom-in"
          data-aos-delay="300"
        >
          <img
            src="/award3.png"
            alt="Award 3"
            className="w-full rounded-[18px] shadow-[0_8px_20px_rgba(0,0,0,0.15)] block"
          />
        </div>
      </div>
    </section>
  );
}

