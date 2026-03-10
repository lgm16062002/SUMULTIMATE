
export default function Reward() {
  return (
    <section className="bg-[#cfd7dc] py-[80px] px-[20px] text-center">
      <h2 className="text-[28px] font-semibold tracking-[2px] text-[#163b5c] mb-[60px] uppercase">
        ULTIMATE AWARDS & ACCREDITATION
      </h2>

      <div className="max-w-[1100px] mx-auto flex gap-[40px] justify-center flex-wrap">
        <div className="w-[300px] max-md:w-[260px] max-sm:w-[90%] max-sm:max-w-[350px]">
          <img
            src="/award1.png"
            alt="Award 1"
            className="w-full rounded-[18px] shadow-[0_8px_20px_rgba(0,0,0,0.15)] block"
          />
        </div>

        <div className="w-[300px] max-md:w-[260px] max-sm:w-[90%] max-sm:max-w-[350px]">
          <img
            src="/award2.png"
            alt="Award 2"
            className="w-full rounded-[18px] shadow-[0_8px_20px_rgba(0,0,0,0.15)] block"
          />
        </div>

        <div className="w-[300px] max-md:w-[260px] max-sm:w-[90%] max-sm:max-w-[350px]">
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

