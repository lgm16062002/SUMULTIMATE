export default function PatientsSpeak() {
  return (
    <section
      className="relative overflow-hidden py-[60px] px-5 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/texture.png')",
      }}
      id="patients-speak"
    >
      {/* Green overlay from bottom to middle */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(to top, rgba(45, 125, 125, 0.7) 0%, rgba(45, 125, 125, 0.3) 50%, transparent 100%)",
        }}
      />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(circle at 10% 20%, rgba(255,255,255,0.03) 0%, transparent 20%),
            radial-gradient(circle at 90% 80%, rgba(255,255,255,0.03) 0%, transparent 20%),
            radial-gradient(circle at 50% 50%, rgba(255,255,255,0.02) 0%, transparent 30%)
          `,
        }}
      />

      <div className="max-w-[1200px] mx-auto relative z-10">
        {/* Title */}
        <h2 className="text-[2.5rem] font-light text-white text-center mb-[50px] tracking-[3px] uppercase max-md:text-[1.8rem]">
          What Patient's Speak
        </h2>

        {/* Desktop Grid Layout - 12 columns, 2 rows */}
        <div className="hidden lg:grid grid-cols-12 grid-rows-2 gap-5 h-[460px]">
          {/* Card 1 - Large testimonial text (col 1-4, row 1-3) */}
          <div
            className="col-span-4 row-span-2 bg-white/95 rounded-[20px] p-6 shadow-[0_15px_40px_rgba(0,0,0,0.12)] flex flex-col transition-all duration-300 hover:translate-y-[-3px] hover:shadow-[0_20px_50px_rgba(0,0,0,0.18)]"
            style={{ animation: "float 6s ease-in-out infinite" }}
          >
            <p className="text-[0.9rem] text-[#444] leading-[1.6] text-justify overflow-hidden line-clamp-[10]">
              Dear Dr. Jayanti, I want to thank you for the exceptional care you provided during my lumpectomy. Your precise surgical skills and compassionate approach laid the foundation for my recovery and every medical professional since has praised your work. Despite initial challenges with my treatment, I'm thrilled to share that I've completed chemotherapy and will soon begin radiation and hormone therapy. Your expertise has been a constant source of strength throughout this journey.
            </p>
            <div className="flex items-center gap-3 mt-auto pt-4 border-t border-gray-100">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
                alt="Rituparna Sen"
                className="w-[45px] h-[45px] rounded-full object-cover border-2 border-[#e0f0f0]"
              />
              <span className="text-[0.9rem] font-medium text-[#888] italic">Rituparna Sen</span>
            </div>
          </div>

          {/* Card 2 - Video thumbnail (col 5-7, row 1) */}
          <div
            className="col-span-3 row-span-1 bg-white/95 rounded-[20px] overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.12)] relative cursor-pointer transition-all duration-300 hover:translate-y-[-3px] hover:shadow-[0_20px_50px_rgba(0,0,0,0.18)] group"
            style={{ animation: "float 6s ease-in-out infinite 3s" }}
          >
            <img
              src="/patient.png"
              alt="Patient"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60px] h-[60px] bg-white/90 rounded-full flex items-center justify-center shadow-[0_8px_25px_rgba(0,0,0,0.3)] transition-all duration-300 group-hover:scale-110">
              <div className="ml-1 w-0 h-0 border-l-[18px] border-l-[#2d7d7d] border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent" />
            </div>
          </div>

          {/* Card 3 - Small testimonial (col 8-12, row 1) */}
          <div
            className="col-span-5 row-span-1 bg-white/95 rounded-[20px] p-5 shadow-[0_15px_40px_rgba(0,0,0,0.12)] flex flex-col transition-all duration-300 hover:translate-y-[-3px] hover:shadow-[0_20px_50px_rgba(0,0,0,0.18)]"
            style={{ animation: "float 6s ease-in-out infinite" }}
          >
            <p className="text-[0.9rem] text-[#444] leading-[1.6] text-justify overflow-hidden line-clamp-4">
              Dear Dr. Jayanti, I want to thank you for the exceptional care you provided during my lumpectomy. Your precise surgical skills and compassionate approach laid the foundation for my recovery and every medical professional since has praised your work. Despite initial
            </p>
            <div className="flex items-center gap-3 mt-auto">
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face" alt="Rituparna Sen" className="w-[45px] h-[45px] rounded-full object-cover border-2 border-[#e0f0f0]" />
              <span className="text-[0.9rem] font-medium text-[#888] italic">Rituparna Sen</span>
            </div>
          </div>

          {/* Card 4 - Small testimonial (col 5-8, row 2) */}
          <div
            className="col-span-4 row-span-1 bg-white/95 rounded-[20px] p-5 shadow-[0_15px_40px_rgba(0,0,0,0.12)] flex flex-col transition-all duration-300 hover:translate-y-[-3px] hover:shadow-[0_20px_50px_rgba(0,0,0,0.18)]"
            style={{ animation: "float 6s ease-in-out infinite 3s" }}
          >
            <p className="text-[0.9rem] text-[#444] leading-[1.6] text-justify overflow-hidden line-clamp-4">
              Dear Dr. Jayanti, I want to thank you for the exceptional care you provided during my lumpectomy. Your precise surgical skills and compassionate approach laid the foundation for my recovery and every medical professional since has praised your work. Despite initial
            </p>
            <div className="flex items-center gap-3 mt-auto">
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face" alt="Rituparna Sen" className="w-[45px] h-[45px] rounded-full object-cover border-2 border-[#e0f0f0]" />
              <span className="text-[0.9rem] font-medium text-[#888] italic">Rituparna Sen</span>
            </div>
          </div>

          {/* Card 5 - Video thumbnail (col 9-12, row 2) */}
          <div
            className="col-span-4 row-span-1 bg-white/95 rounded-[20px] overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.12)] relative cursor-pointer transition-all duration-300 hover:translate-y-[-3px] hover:shadow-[0_20px_50px_rgba(0,0,0,0.18)] group"
            style={{ animation: "float 6s ease-in-out infinite" }}
          >
            <img
              src="/checkup.png"
              alt="Hospital Visit"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60px] h-[60px] bg-white/90 rounded-full flex items-center justify-center shadow-[0_8px_25px_rgba(0,0,0,0.3)] transition-all duration-300 group-hover:scale-110">
              <div className="ml-1 w-0 h-0 border-l-[18px] border-l-[#2d7d7d] border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent" />
            </div>
          </div>
        </div>

        {/* Tablet Layout */}
        <div className="hidden md:grid lg:hidden grid-cols-2 gap-5">
          <div className="col-span-2 bg-white/95 rounded-[20px] p-6 shadow-[0_15px_40px_rgba(0,0,0,0.12)] flex flex-col min-h-[200px]">
            <p className="text-[0.9rem] text-[#444] leading-[1.6] text-justify">
              Dear Dr. Jayanti, I want to thank you for the exceptional care you provided during my lumpectomy. Your precise surgical skills and compassionate approach laid the foundation for my recovery and every medical professional since has praised your work. Despite initial challenges with my treatment, I'm thrilled to share that I've completed chemotherapy and will soon begin radiation and hormone therapy. Your expertise has been a constant source of strength throughout this journey.
            </p>
            <div className="flex items-center gap-3 mt-auto pt-4 border-t border-gray-100">
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face" alt="Rituparna Sen" className="w-[45px] h-[45px] rounded-full object-cover border-2 border-[#e0f0f0]" />
              <span className="text-[0.9rem] font-medium text-[#888] italic">Rituparna Sen</span>
            </div>
          </div>

          <div className="bg-white/95 rounded-[20px] overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.12)] relative cursor-pointer min-h-[200px] group">
            <img src="/patient.png" alt="Patient" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60px] h-[60px] bg-white/90 rounded-full flex items-center justify-center shadow-[0_8px_25px_rgba(0,0,0,0.3)]">
              <div className="ml-1 w-0 h-0 border-l-[18px] border-l-[#2d7d7d] border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent" />
            </div>
          </div>

          <div className="bg-white/95 rounded-[20px] overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.12)] relative cursor-pointer min-h-[200px] group">
            <img src="/checkup.png" alt="Hospital" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60px] h-[60px] bg-white/90 rounded-full flex items-center justify-center shadow-[0_8px_25px_rgba(0,0,0,0.3)]">
              <div className="ml-1 w-0 h-0 border-l-[18px] border-l-[#2d7d7d] border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent" />
            </div>
          </div>

          <div className="bg-white/95 rounded-[20px] p-5 shadow-[0_15px_40px_rgba(0,0,0,0.12)] flex flex-col min-h-[200px]">
            <p className="text-[0.9rem] text-[#444] leading-[1.6] text-justify">
              Dear Dr. Jayanti, I want to thank you for the exceptional care you provided during my lumpectomy. Your precise surgical skills and compassionate approach...
            </p>
            <div className="flex items-center gap-3 mt-auto pt-3">
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face" alt="Rituparna Sen" className="w-[45px] h-[45px] rounded-full object-cover border-2 border-[#e0f0f0]" />
              <span className="text-[0.9rem] font-medium text-[#888] italic">Rituparna Sen</span>
            </div>
          </div>

          <div className="bg-white/95 rounded-[20px] p-5 shadow-[0_15px_40px_rgba(0,0,0,0.12)] flex flex-col min-h-[200px]">
            <p className="text-[0.9rem] text-[#444] leading-[1.6] text-justify">
              Dear Dr. Jayanti, I want to thank you for the exceptional care you provided during my lumpectomy. Your precise surgical skills and compassionate approach...
            </p>
            <div className="flex items-center gap-3 mt-auto pt-3">
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face" alt="Rituparna Sen" className="w-[45px] h-[45px] rounded-full object-cover border-2 border-[#e0f0f0]" />
              <span className="text-[0.9rem] font-medium text-[#888] italic">Rituparna Sen</span>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden flex flex-col gap-4">
          <div className="bg-white/95 rounded-[20px] p-5 shadow-[0_15px_40px_rgba(0,0,0,0.12)]">
            <p className="text-[0.85rem] text-[#444] leading-[1.6] text-justify mb-4">
              Dear Dr. Jayanti, I want to thank you for the exceptional care you provided during my lumpectomy. Your precise surgical skills and compassionate approach laid the foundation for my recovery...
            </p>
            <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face" alt="Rituparna Sen" className="w-[40px] h-[40px] rounded-full object-cover border-2 border-[#e0f0f0]" />
              <span className="text-[0.85rem] font-medium text-[#888] italic">Rituparna Sen</span>
            </div>
          </div>

          <div className="bg-white/95 rounded-[20px] overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.12)] relative cursor-pointer h-[200px]">
            <img src="/patient.png" alt="Patient" className="w-full h-full object-cover" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50px] h-[50px] bg-white/90 rounded-full flex items-center justify-center shadow-[0_8px_25px_rgba(0,0,0,0.3)]">
              <div className="ml-1 w-0 h-0 border-l-[15px] border-l-[#2d7d7d] border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent" />
            </div>
          </div>

          <div className="bg-white/95 rounded-[20px] p-5 shadow-[0_15px_40px_rgba(0,0,0,0.12)]">
            <p className="text-[0.85rem] text-[#444] leading-[1.6] text-justify mb-4">
              Dear Dr. Jayanti, I want to thank you for the exceptional care you provided during my lumpectomy...
            </p>
            <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face" alt="Rituparna Sen" className="w-[40px] h-[40px] rounded-full object-cover border-2 border-[#e0f0f0]" />
              <span className="text-[0.85rem] font-medium text-[#888] italic">Rituparna Sen</span>
            </div>
          </div>

          <div className="bg-white/95 rounded-[20px] overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.12)] relative cursor-pointer h-[200px]">
            <img src="/checkup.png" alt="Hospital" className="w-full h-full object-cover" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50px] h-[50px] bg-white/90 rounded-full flex items-center justify-center shadow-[0_8px_25px_rgba(0,0,0,0.3)]">
              <div className="ml-1 w-0 h-0 border-l-[15px] border-l-[#2d7d7d] border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent" />
            </div>
          </div>
        </div>
      </div>

      <style>{`@keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-8px); } }`}</style>
    </section>
  );
}
