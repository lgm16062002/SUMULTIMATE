
export default function Leadership() {
  const leaders = [
    {
      name: "Prof. (Dr.) Manojranjan Nayak",
      role: "Founder & President",
      image: "/manojranjan.png"
    },
    {
      name: "Prof. (Dr.) Manojranjan Nayak",
      role: "Founder & President",
      image: "/leader2.png"
    },
    {
      name: "Prof. (Dr.) Manojranjan Nayak",
      role: "Founder & President",
      image: "/leader3.png"
    }
  ];

  return (
    <section className="bg-white py-[80px] px-5 text-center font-sans">
      <h2 className="text-[28px] tracking-[1px] text-[#0f2c59] mb-[70px] uppercase font-semibold">
        FROM THE DESK OF OUR LEADERSHIP
      </h2>

      <div className="flex justify-center gap-8 md:gap-[60px] lg:gap-[80px] flex-wrap">
        {leaders.map((leader, index) => (
          <div key={index} className="w-[300px]">
            <img
              src={leader.image}
              alt={leader.name}
              className="w-full h-[340px] object-cover rounded-[35px] mb-[24px] shadow-[0px_20px_40px_rgba(0,0,0,0.2)]"
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
    </section>
  )
}

