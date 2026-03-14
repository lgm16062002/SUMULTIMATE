import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function LatestBlog() {
    const blogs = [
        {
            title: "The Flourishing Spirit of Giving at SMC",
            meta: "Press Release • Feb 27, 2026 • Healthcare Initiatives & Community Outreach Programs",
            image: "https://images.unsplash.com/photo-1542884748-2b87b36c6b90?w=800&auto=format&fit=crop"
        },
        {
            title: "Why Do Never-Smokers Develop Lung Cancer? Investigating the Underlying Causes",
            meta: "Research • Feb 24, 2026",
            image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&auto=format&fit=crop"
        },
        {
            title: "Concerned About Lymphedema After Surgery for Gynecologic or Breast Cancer?",
            meta: "Press Release • Feb 13, 2026",
            image: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?w=800&auto=format&fit=crop"
        },
        {
            title: "The Flourishing Spirit of Giving at SMC - Extended Edition",
            meta: "Press Release • Feb 27, 2026 • Healthcare Initiatives & Community Outreach Programs",
            image: "https://images.unsplash.com/photo-1542884748-2b87b36c6b90?w=800&auto=format&fit=crop"
        }
    ];

    return (
        <section
            className="relative overflow-hidden bg-white py-14 sm:py-20 px-4 sm:px-5 bg-[url('/blog-bg.png')] bg-cover bg-center"
            id="blog"
            data-aos="fade-up"
        >
            <div className="max-w-[1200px] mx-auto">
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
                    className="text-center text-[22px] sm:text-[28px] font-semibold tracking-[2px] text-[#163b5c] mb-10 sm:mb-[60px] uppercase"
                    data-aos="fade-up"
                    data-aos-delay="50"
                >
                    LATEST BLOG
                </h2>

                <Swiper
                    modules={[Pagination, Autoplay]}
                    spaceBetween={24}
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
                    className="pb-20"
                >
                    {blogs.map((blog, index) => (
                        <SwiperSlide key={index}>
                            <div
                                className="h-full w-full max-w-[350px] mx-auto bg-white shadow-[0_8px_20px_rgba(0,0,0,0.12)] overflow-hidden transition-transform hover:-translate-y-2 duration-300 rounded-xl flex flex-col"
                                data-aos="fade-up"
                                data-aos-delay={100 + index * 100}
                            >
                                <img
                                    src={blog.image}
                                    alt={blog.title}
                                    className="w-full h-[190px] sm:h-[220px] object-cover block"
                                />
                                <div className="p-[22px]">
                                    <h3 className="text-[18px] sm:text-[20px] leading-[1.4] mb-3 text-[#222] font-semibold hover:text-[#163b5c] cursor-pointer transition-colors">
                                        {blog.title}
                                    </h3>
                                    <p className="text-[14px] text-[#777]">
                                        {blog.meta}
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <div className="pointer-events-none absolute bottom-0 right-[5rem] sm:right-[5.75rem] md:right-[7rem] z-10">
                <img
                    src="/sum-icon.png"
                    alt=""
                    className="w-[96px] sm:w-[122px] md:w-[150px] object-contain opacity-20"
                />
            </div>
        </section>
    );
}
