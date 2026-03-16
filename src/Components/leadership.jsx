
export default function Leadership() {
  const leaders = [
    {
      name: "Prof. (Dr.) Manojranjan Nayak",
      role: "Founder & President",
      image: "/manojranjan.png"
    },
    {
      name: "Dr. Swetapadma Dash",
      role: "CEO",
      image: "/leader2.png"
    },
    {
      name: "Dr (Brig) Biraj Mohan Mishra",
      role: "CMS",
      image: "/leader3.png"
    }
  ];

  return (
    <section
      className="relative overflow-hidden bg-cover bg-center bg-no-repeat py-[80px] px-5 text-center font-sans"
      style={{ backgroundImage: "url('/wall.png')" }}
      id="leadership"
      data-aos="fade-up"
    >
      <h2
        className="text-[28px] tracking-[1px] text-[#0f2c59] mb-[70px] uppercase font-semibold"
        data-aos="fade-up"
        data-aos-delay="50"
      >
        FROM THE DESK OF OUR LEADERSHIP
      </h2>

      <div className="flex justify-center gap-8 md:gap-[60px] lg:gap-[80px] flex-wrap">
        {leaders.map((leader, index) => (
          <div
            key={index}
            className="w-full max-w-[300px]"
            data-aos="zoom-in"
            data-aos-delay={100 + index * 100}
          >
            <img
              src={leader.image}
              alt={leader.name}
              className="w-full h-[340px] object-cover rounded-[35px] mb-[24px] shadow-[0px_20px_40px_rgba(0,0,0,0.2),0_0_30px_rgba(255,255,255,0.6)] transition-all duration-500 hover:scale-105 hover:shadow-[0px_30px_60px_rgba(0,0,0,0.3),0_0_50px_rgba(255,255,255,0.9),0_0_80px_rgba(255,255,255,0.4)]"
            />
            <h4 className="text-[16px] text-[#333] m-0 font-bold tracking-wide">
              {leader.name}
            </h4>
            <p className="text-[14px] text-[#666] mt-[4px] font-medium tracking-wide">
              {leader.role}
            </p>
          </div>
        ))}
      </div>

      <div className="pointer-events-none absolute bottom-0 right-[5rem] sm:right-[5.75rem] md:right-[7rem] z-10">
        <img
          src="/sum-icon.png"
          alt=""
          className="w-[96px] sm:w-[122px] md:w-[150px] object-contain opacity-20"
        />
      </div>
    </section>
  )
}

