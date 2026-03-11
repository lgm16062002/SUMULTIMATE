export default function Footer() {
    return (
        <footer
            className="bg-gradient-to-br from-[#03309a] via-[#015166] to-[#015e4f] text-white py-20 px-5 lg:px-24 font-sans relative overflow-hidden"
            id="contact"
            data-aos="fade-up"
        >
            <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-12">

                {/* Left Section: Contact Info */}
                <div className="lg:w-[40%] flex flex-col gap-8">
                    <img
                        src="/sum-logo.png"
                        alt="SUM Ultimate Medicare"
                        className="w-[200px] h-auto invert brightness-0"
                    />
                    <div className="flex flex-col gap-4 text-gray-100 text-[18px] leading-relaxed tracking-wide">
                        <p>
                            K-8 ,KALINGA NAGAR, GHATIKIA,<br />
                            BHUBANESWAR, 751003, ODISHA
                        </p>
                        <p className="mt-2 text-[18px]">
                            EPABX: +91 0674 3 500 500
                        </p>
                        <p className="text-[18px]">
                            Ambulance: +91 0674 266 1111
                        </p>
                        <p className="mt-4 text-[18px]">
                            sumum_bbsr@soahospitals.com
                        </p>
                    </div>
                </div>

                {/* Right Section: Links & Buttons */}
                <div className="lg:w-[70%] flex flex-col gap-8 lg:gap-12">

                    {/* Link Columns */}
                    <div className="flex flex-col md:flex-row gap-16 md:pl-6 lg:pl-10 pt-4 border-t border-white/20">
                        {[1, 2, 3].map((_, idx) => (
                            <div key={idx} className="flex-1">
                                <h4 className="text-[17px] font-bold mb-6 text-white/90">Start Your Care</h4>
                                <ul className="flex flex-col gap-3 text-gray-200 text-[13px] font-semibold leading-tight">
                                    <li className="hover:text-white cursor-pointer hover:font-normal transition-all">Start Your Care</li>
                                    <li className="hover:text-white cursor-pointer hover:font-normal transition-all">Your Journey Begins Here</li>
                                    <li className="hover:text-white cursor-pointer hover:font-normal transition-all">Why Choose SMC?</li>
                                    <li className="hover:text-white cursor-pointer hover:font-normal transition-all">Request an Appointment</li>
                                    <li className="hover:text-white cursor-pointer hover:font-normal transition-all">Billing & Insurance</li>
                                    <li className="hover:text-white cursor-pointer hover:font-normal transition-all">Location & Parking</li>
                                    <li className="hover:text-white cursor-pointer hover:font-normal transition-all">Facilities</li>
                                    <li className="hover:text-white cursor-pointer hover:font-normal transition-all">Contact Us</li>
                                    <li className="hover:text-white cursor-pointer hover:font-normal transition-all">FAQ</li>
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-5 mt-4">
                        <button className="flex-1 bg-[#006d77] hover:bg-[#005a60] text-white py-4 sm:py-5 px-6 sm:px-8 text-[16px] sm:text-[18px] tracking-wide transition-all duration-300">
                            Request an Appointment
                        </button>
                        <button className="flex-1 bg-[#006d77] hover:bg-[#005a60] text-white py-4 sm:py-5 px-6 sm:px-8 text-[16px] sm:text-[18px] tracking-wide transition-all duration-300">
                            Find a Doctor
                        </button>
                    </div>
                </div>

            </div>

            {/* Copyright Bar */}
            <div className="max-w-[1400px] mx-auto mt-10 pt-8 text-center text-white/80 text-[14px] sm:text-[16px] lg:text-[20px] font-semibold tracking-wide flex flex-col md:flex-row justify-center gap-2 sm:gap-3">
                <p>© 2026 Sum Ultimate | Best Hospitals In Bhubaneswar | </p>
                <p>Location | Patients' Rights and Responsibilities | Privacy Policy</p>
            </div>
        </footer>
    );
}
