const contactItems = [
  { label: "Emergency", number: "+91 06743500500", icon: "/emergency-call.png" },
  { label: "Health Help Line", number: "+91 06743500500", icon: "/help-line.png" },
  { label: "Health Help Line", number: "+91 06743500500", icon: "/help-line.png" },
];

const departments = [
  "Cardiologist",
  "Urologist",
  "Pediatrician",
  "Plastic Surgeon",
  "Neurologist",
  "Oncologist",
  "Gynecologist",
  "Ophthalmologist",
  "Gastroenterologist",
  "General Physician",
  "ENT Specialist",
  "Rheumatologist",
  "Orthopaedician",
  "Pulmonologist",
  "Vascular Surgeon",
  "General Surgeon",
];

const footerColumns = [
  {
    title: "Quick Links",
    links: [
      "About Us",
      "Our Doctors",
      "Our Facilities",
      "Our Patients Speak",
      "Sitemap",
      "Contact Us",
      "Biomedical Waste",
      "Blog",
    ],
  },
  {
    title: "Corporate",
    links: ["The Leadership", "Awards & Accolades", "Our Story"],
  },
  {
    title: "Our Ultimate",
    links: ["Doctors", "Media Coverage", "Patients Speak", "Packages", "CSR Activities"],
  },
  {
    title: "Our Ultimate",
    links: ["Doctors", "Media Coverage", "Patients Speak", "Packages", "CSR Activities"],
  },
  {
    title: "Our Ultimate",
    links: ["Doctors", "Media Coverage", "Patients Speak", "Packages", "CSR Activities"],
  },
  {
    title: "Our Ultimate",
    links: ["Doctors", "Media Coverage", "Patients Speak", "Packages", "CSR Activities"],
  },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#0c3640] font-sans text-white relative overflow-hidden">
      <div className="mx-auto max-w-[1280px] px-6 pb-12 pt-28 sm:px-10 sm:pt-32 lg:px-[72px] lg:pb-8 lg:pt-28">
        <div className="grid gap-10 grid-cols-1 lg:grid-cols-[260px_1fr] lg:gap-12">
          <div className="space-y-6">
            <img
              src="/sum-logo.png"
              alt="SUM Ultimate Medicare"
              className="h-auto w-[165px] invert brightness-0 saturate-0 contrast-200"
            />

            <div className="space-y-4 text-[12px] font-normal leading-[1.35] text-white/88 sm:text-[13px]">
              <div className="space-y-0.5 text-[12px] font-medium uppercase tracking-[0.01em] text-white sm:text-[13px]">
                <p>K-8, KALINGA NAGAR, GHATIKIA,</p>
                <p>BHUBANESWAR, 751003, ODISHA</p>
              </div>
              <p>EPABX: +91 0674 3 500 500</p>
              <p>Ambulance: +91 0674 266 1111</p>
              <p className="break-all text-[12px] sm:text-[13px]">sumum_bbsr@soahospitals.com</p>
            </div>
          </div>

          <div className="space-y-10">
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3 xl:gap-8">
              {contactItems.map((item) => (
                <div key={`${item.label}-${item.number}`} className="flex items-center gap-4">
                  <div className="h-[58px] w-[58px] shrink-0 rounded-full bg-[#16a085] flex items-center justify-center overflow-hidden">
                    <img src={item.icon} alt={item.label} className="h-8 w-8 object-contain" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] font-medium leading-none text-white sm:text-[12px]">
                      {item.label}
                    </p>
                    <p className="mt-2 text-[17px] font-normal leading-none tracking-[-0.01em] text-white/80 sm:text-[18px]">
                      {item.number}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <div className="flex items-center gap-3 text-white/85">
                <span className="h-px flex-1 bg-white/50" />
                <h3 className="text-[14px] font-medium tracking-[-0.01em] sm:text-[15px]">
                  Departments
                </h3>
                <span className="h-px flex-1 bg-white/50" />
              </div>

              <div className="mt-5 grid grid-cols-2 gap-x-6 gap-y-4 text-[13px] font-medium tracking-[-0.01em] text-white/78 sm:gap-x-10 lg:grid-cols-4">
                {departments.map((department) => (
                  <div key={department} className="flex items-center gap-3">
                    <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-white/60" />
                    <span>{department}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-4 sm:gap-8 grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {footerColumns.map((column, index) => (
            <div
              key={`${column.title}-${index}`}
              className={index < 2 ? "lg:border-r lg:border-white/45 lg:pr-6 xl:pr-10" : ""}
            >
              <h4 className="text-[14px] sm:text-[15px] font-medium tracking-[-0.01em] text-[#10c0b3]">
                {column.title}
              </h4>
              <div className="mt-3 sm:mt-4 h-[3px] w-[80px] sm:w-[104px] bg-[#10c0b3]" />
              <ul className="mt-4 sm:mt-5 space-y-2 sm:space-y-3 text-[12px] sm:text-[13px] font-medium leading-none tracking-[-0.01em] text-white/78">
                {column.links.map((link) => (
                  <li key={link}>{link}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom section with icon and copyright */}
      <div className="relative">
        {/* Sum Icon - positioned above the border */}
        <div className="pointer-events-none absolute bottom-[57px] right-4 z-10 sm:bottom-[73px] sm:right-6 lg:bottom-[81px] lg:right-12">
          <img
            src="/sum-icon.png"
            alt=""
            className="h-16 w-16 object-contain opacity-30 sm:h-20 sm:w-20"
          />
        </div>

        <div className="border-t border-white/70 px-4 sm:px-6 lg:px-[72px] py-4 sm:py-5 text-center text-[10px] sm:text-[11px] lg:text-[12px] font-normal text-white/90">
          <p className="max-w-[90%] mx-auto">
            Copyright 2026 Sum Ultimate | Best Hospitals In Bhubaneswar | Location |
            Patients' Rights and Responsibilities | Privacy Policy
          </p>
        </div>
      </div>
    </footer>
  );
}
