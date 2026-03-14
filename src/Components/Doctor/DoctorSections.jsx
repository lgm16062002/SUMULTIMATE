import { doctorSections } from "./constants";

export default function DoctorSections({
  sectionRefs,
  articleRefs,
  navFillRefs,
  navTextFillRefs,
  onNavigateToSection,
}) {
  return (
    <div className="mt-10 grid gap-8 lg:mt-16 lg:grid-cols-[430px_minmax(0,1fr)] lg:gap-24">
      {/* Left: Navigation */}
      <aside className="lg:sticky lg:top-10 lg:self-start">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 lg:block lg:space-y-4">
          {doctorSections.map((section, index) => (
            <button
              key={section.id}
              type="button"
              onClick={() => onNavigateToSection(section.id)}
              className="group relative block w-full overflow-hidden rounded-none bg-[#ececec] text-left shadow-none transition lg:w-fit"
            >
              <span
                ref={(el) => {
                  navFillRefs.current[index] = el;
                }}
                className="absolute inset-y-0 left-0 hidden bg-[#1d34b6] lg:block"
                style={{ width: index === 0 ? "100%" : "0%" }}
              />
              <span
                ref={(el) => {
                  navTextFillRefs.current[index] = el;
                }}
                className="pointer-events-none absolute inset-y-0 left-0 z-20 hidden overflow-hidden whitespace-nowrap lg:block"
                style={{ width: index === 0 ? "100%" : "0%" }}
              >
                <span className="flex items-center gap-2 px-5 py-3 text-[13px] font-normal text-white sm:text-[15px]">
                  <span className="font-serif leading-none">{section.label}</span>
                  <span className="text-[18px] leading-none text-white">+</span>
                </span>
              </span>
              <span className="relative z-10 flex items-center justify-between gap-2 px-4 py-3 text-[13px] text-black sm:px-5 sm:text-[14px] lg:justify-start lg:text-[15px]">
                <span className="font-serif leading-none">{section.label}</span>
                <span className="text-[18px] leading-none text-[#1d34b6] lg:text-[18px]">+</span>
              </span>
            </button>
          ))}
        </div>
      </aside>

      {/* Right: Content */}
      <div className="space-y-14 pr-0 sm:space-y-16 lg:space-y-24 lg:pr-12">
        {doctorSections.map((section, index) => (
          <article
            key={section.id}
            id={section.id}
            ref={(el) => {
              sectionRefs.current[section.id] = el;
              articleRefs.current[index] = el;
            }}
            className="scroll-mt-24"
          >
            <h2 className="font-serif text-[24px] italic leading-none text-black sm:text-[28px] lg:text-[34px]">
              {section.title}
            </h2>

            <div className="mt-8 space-y-7 sm:mt-10 sm:space-y-8 lg:mt-12 lg:space-y-10">
              {section.items.map((item) => (
                <div
                  key={`${section.id}-${item.heading}`}
                  className="max-w-[980px]"
                >
                  <p
                    className={`text-[16px] leading-[1.55] text-black sm:text-[18px] lg:text-[22px] ${
                      section.id === "expertise" && item.description
                        ? "font-serif italic uppercase text-[#1d34b6]"
                        : ""
                    }`}
                  >
                    {item.heading}
                  </p>

                  {item.description && (
                    <p className="mt-2 text-[15px] leading-[1.55] text-black sm:text-[17px] lg:text-[22px]">
                      {item.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
