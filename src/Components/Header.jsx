import '../Styles/Header.css';

export default function Header() {
  return (
    <section className="border-t-[8px] border-[#19656c] bg-transparent p-0 relative z-10">
      <div className="w-full mx-auto">
        <div className="flex justify-between items-start">
          <div className="px-[60px] py-1 ml-[40px]">
            <img src="/sum-logo.png" alt="Logo" className="h-[90px] w-auto object-contain" />
          </div>
          <div className="right-content w-full">
            <div className="flex top-bar relative z-0 justify-between bg-gradient-to-r from-[#148c6b] to-[#1e40af] px-[15px] rounded-bl-[9px] text-white pb-[10px]">
              <div className="leading-[28px] text-[15px]">EPABX : +91 06743500500</div>
              <div className="leading-[28px] text-[15px]">+91 06743500500</div>
            </div>

            <div className="p-[15px] pb-[8px] ">
              <div className="text-black font-medium text-[13.5px] uppercase whitespace-nowrap flex items-center flex-wrap tracking-wide z-10">
                <a href="#" className="pr-[12px] text-black text-[18px] hover:text-[#1b746e] transition"><i className="fa-solid fa-house"></i></a>
                <span className="text-gray-400 font-light">|</span>
                <a href="#" className="px-[12px] hover:text-[#1b746e] transition">STORY</a>
                <span className="text-gray-400 font-light">|</span>
                <a href="#" className="px-[12px] hover:text-[#1b746e] transition">DOCTORS</a>
                <span className="text-gray-400 font-light">|</span>
                <a href="#" className="px-[12px] hover:text-[#1b746e] transition">MEDIA COVERAGE</a>
                <span className="text-gray-400 font-light">|</span>
                <a href="#" className="px-[12px] hover:text-[#1b746e] transition">PATIENTS SPEAK</a>
                <span className="text-gray-400 font-light">|</span>
                <a href="#" className="px-[12px] hover:text-[#1b746e] transition">PACKAGES</a>
                <span className="text-gray-400 font-light">|</span>
                <a href="#" className="px-[12px] hover:text-[#1b746e] transition">CSR ACTIVITIES</a>
                <span className="text-gray-400 font-light">|</span>
                <a href="#" className="px-[12px] hover:text-[#1b746e] transition">DEPARTMENT</a>
                <span className="text-gray-400 font-light">|</span>
                <a href="#" className="px-[12px] hover:text-[#1b746e] transition">GALLERY</a>
                <span className="text-gray-400 font-light">|</span>
                <a href="#" className="pl-[12px] hover:text-[#1b746e] transition">CONTACTS</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
