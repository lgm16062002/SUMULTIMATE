import { useState } from 'react'
import '../Styles/Header.css';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { label: 'STORY', href: '#journey' },
    { label: 'DOCTORS', href: '/doctor' },
    { label: 'MEDIA COVERAGE', href: '#blog' },
    { label: 'PATIENTS SPEAK', href: '#services' },
    { label: 'PACKAGES', href: '#services' },
    { label: 'CSR ACTIVITIES', href: '#blog' },
    { label: 'DEPARTMENT', href: '#centers' },
    { label: 'GALLERY', href: '#awards' },
    { label: 'CONTACTS', href: '#contact' },
  ]

  return (
    <section
      className="border-t-[8px] border-[#19656c] bg-transparent p-0 relative z-10"
      data-aos="fade-down"
    >
      <div className="w-full mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start">
          {/* Left: logo + mobile menu button */}
          <div className="px-4 sm:px-8 md:px-[60px] py-2 md:py-1 md:ml-[40px] flex items-center justify-between md:justify-start gap-3">
            <img
              src="/sum-logo.png"
              alt="Logo"
              className="h-[70px] sm:h-[82px] md:h-[90px] w-auto object-contain"
            />
            {/* Mobile / tablet menu icon (shown only on small/medium) */}
            <button
              type="button"
              className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-transparent text-black hover:bg-black/5 transition md:hidden"
              aria-label="Open menu"
              onClick={() => setMobileMenuOpen(true)}
            >
              <i className="fa-solid fa-bars text-lg"></i>
            </button>
          </div>

          {/* Right content (hidden on mobile, visible from md and up) */}
          <div className="right-content w-full hidden md:block">
            <div className="flex top-bar relative z-0 flex-col sm:flex-row sm:justify-between bg-gradient-to-r from-[#006d77] to-[#00334e] px-4 sm:px-[15px] rounded-bl-[9px] text-white pb-2 sm:pb-[10px] gap-1 sm:gap-0">
              <div className="leading-[24px] sm:leading-[28px] text-[13px] sm:text-[15px]">
                EPABX : +91 06743500500
              </div>
              <div className="flex items-center justify-between sm:justify-end gap-3">
                <div className="leading-[24px] sm:leading-[28px] text-[13px] sm:text-[15px]">
                  +91 06743500500
                </div>
              </div>
            </div>

            {/* Desktop / large screens nav */}
            <div className="px-4 sm:p-[15px] pb-2 sm:pb-[8px]">
              <div className="text-black font-medium text-[12px] sm:text-[13.5px] uppercase whitespace-normal md:whitespace-nowrap flex items-center flex-wrap tracking-wide z-10 gap-y-2">
                <a
                  href="#top"
                  className="pr-3 text-black text-[16px] sm:text-[18px] hover:text-[#1b746e] transition"
                >
                  <i className="fa-solid fa-house"></i>
                </a>
                <span className="text-gray-400 font-light hidden md:inline">|</span>
                {navItems.map((item) => (
                  <span key={item.label} className="inline-flex items-center">
                    <a href={item.href} className="px-3 hover:text-[#1b746e] transition">
                      {item.label}
                    </a>
                    <span className="text-gray-400 font-light hidden md:inline">|</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile / tablet drawer */}
      {mobileMenuOpen ? (
        <div className="fixed inset-0 z-[999] lg:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-black/50"
            aria-label="Close menu"
            onClick={() => setMobileMenuOpen(false)}
          />

          <aside className="fixed right-0 top-0 h-screen w-[85%] max-w-[360px] bg-white shadow-2xl overflow-y-auto">
            <div className="p-4 border-b flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img src="/sum-logo.png" alt="Logo" className="h-10 w-auto object-contain" />
              </div>
              <button
                type="button"
                className="w-10 h-10 inline-flex items-center justify-center rounded-full hover:bg-gray-100 transition"
                aria-label="Close menu"
                onClick={() => setMobileMenuOpen(false)}
              >
                <i className="fa-solid fa-xmark text-xl text-[#0f2c59]"></i>
              </button>
            </div>

            <div className="p-4">
              <nav>
                <a
                  href="#top"
                  className="w-full flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-gray-50 transition font-semibold text-[#0f2c59]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <i className="fa-solid fa-house"></i>
                  Home
                </a>
                <div className="mt-2 space-y-1">
                  {navItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="w-full block px-3 py-3 rounded-lg hover:bg-gray-50 transition text-[#0f2c59] font-medium"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </nav>

              <div className="rounded-xl bg-gradient-to-r from-[#006d77] to-[#00334e] text-white p-4 mt-6">
                <div className="text-sm font-semibold tracking-wide">Contact</div>
                <div className="mt-2 text-sm leading-relaxed opacity-95">
                  <div>EPABX: +91 0674 3 500 500</div>
                  <div className="mt-1">+91 06743500500</div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      ) : null}
    </section>
  )
}
