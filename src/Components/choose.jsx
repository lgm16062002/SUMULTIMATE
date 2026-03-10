
export default function Choose() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/sum-section.png')" }}
      ></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 "></div>

      {/* Content Container */}
      <div className="relative z-10 w-[80%] mx-auto pb-46 pt-20">
        <div className="max-w-xl text-white">
          <h2 className="text-4xl md:text-5xl font-medium tracking-wide mb-8">
            Why Choose SUM Ultimate
          </h2>

          <h3 className="text-xl md:text-2xl font-light mb-6">
            Realizing Patient-Centered Care
          </h3>

          <p className="text-[17px] md:text-lg font-light leading-relaxed mb-10 opacity-90">
            We are committed to providing medical services that
            prioritize each patient's unique experience – ensuring
            personalized, respectful, and collaborative care at
            every step.
          </p>

          <button className="bg-white/90 hover:bg-white text-[#1b746e] font-medium py-3 px-10 rounded-full transition duration-300 shadow-md">
            Know More
          </button>
        </div>
      </div>
    </section>
  )
}

