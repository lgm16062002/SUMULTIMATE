export default function LatestBlog() {
    const blogs = [
        {
            title: "The Flourishing Spirit of Giving at SMC",
            meta: "Press Release • Feb 27, 2026",
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
        }
    ];

    return (
        <section className="bg-white py-20 px-5 bg-[url('/blog-bg.png')] bg-cover bg-center">
            <div className="max-w-[1200px] mx-auto">
                <h2 className="text-center text-[28px] font-semibold tracking-[2px] text-[#163b5c] mb-[60px] uppercase">
                    LATEST BLOG
                </h2>

                <div className="flex flex-wrap justify-center gap-10">
                    {blogs.map((blog, index) => (
                        <div key={index} className="w-full sm:w-[350px] bg-white shadow-[0_8px_20px_rgba(0,0,0,0.12)] overflow-hidden transition-transform hover:-translate-y-2 duration-300">
                            <img
                                src={blog.image}
                                alt={blog.title}
                                className="w-full h-[220px] object-cover block"
                            />
                            <div className="p-[22px]">
                                <h3 className="text-[20px] leading-[1.4] mb-3 text-[#222] font-semibold hover:text-[#163b5c] cursor-pointer transition-colors">
                                    {blog.title}
                                </h3>
                                <p className="text-[14px] text-[#777]">
                                    {blog.meta}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
