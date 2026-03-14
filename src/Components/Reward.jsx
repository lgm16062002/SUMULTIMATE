
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const awards = [
  {
    src: "/award1.png",
    alt: "Award 1",
  },
  {
    src: "/award2.png",
    alt: "Award 2",
  },
  {
    src: "/award3.png",
    alt: "Award 3",
  },
  {
    src: "/award1.png",
    alt: "Award 4",
  },
];

export default function Reward() {
  return (
    <section
      className="relative overflow-hidden bg-[#cfd7dc] py-14 sm:py-[80px] px-4 sm:px-[20px] text-center"
      id="awards"
      data-aos="fade-up"
    >
      <style>{`
        .swiper-pagination {
          bottom: -40px !important;
        }
        .swiper-pagination-bullet {
          background: #163b5c;
          opacity: 0.5;
        }
        .swiper-pagination-bullet-active {
          background: #163b5c;
          opacity: 1;
        }
      `}</style>
      <h2
        className="text-[22px] sm:text-[28px] font-semibold tracking-[2px] text-[#163b5c] mb-10 sm:mb-[60px] uppercase"
        data-aos="fade-up"
        data-aos-delay="50"
      >
        ULTIMATE AWARDS & ACCREDITATION
      </h2>

      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={16}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        className="max-w-[1100px] mx-auto px-4 pb-20"
      >
        {awards.map((award, idx) => (
          <SwiperSlide key={award.src}>
            <div
              className="w-[300px] max-md:w-[260px] max-sm:w-[90%] max-sm:max-w-[350px] mx-auto"
              data-aos="zoom-in"
              data-aos-delay={100 + idx * 100}
            >
              <img
                src={award.src}
                alt={award.alt}
                className="w-full rounded-[18px] shadow-[0_8px_20px_rgba(0,0,0,0.15)] block"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="pointer-events-none absolute bottom-0 left-[6rem] sm:left-[6.75rem] md:left-[8rem] z-10">
        <img
          src="/sum-icon.png"
          alt=""
          className="w-[96px] sm:w-[122px] md:w-[150px] object-contain opacity-20"
        />
      </div>
    </section>
  );
}
