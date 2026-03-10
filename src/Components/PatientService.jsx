import "../Styles/PatientService.css";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/Components/ui/carousel";
import { Card, CardContent } from "@/Components/ui/card";
import { FiArrowUpRight } from "react-icons/fi";

const patientService = [
  {
    title: "Online Appointment Booking",
    img: "/appointment.png",
  },
  {
    title: "Health Check-up Packages",
    img: "/checkup.png",
  },
  {
    title: "Medical Insurance",
    img: "/insurance.png",
  },
  {
    title: "Ambulance Services",
    img: "/ambulance.png",
  },
  {
    title: "Online Appointment Booking",
    img: "/appointment.png",
  },
  {
    title: "Health Check-up Packages",
    img: "/checkup.png",
  },
  {
    title: "Medical Insurance",
    img: "/insurance.png",
  },
  {
    title: "Ambulance Services",
    img: "/ambulance.png",
  },
  {
    title: "Online Appointment Booking",
    img: "/appointment.png",
  },
  {
    title: "Health Check-up Packages",
    img: "/checkup.png",
  },
  {
    title: "Medical Insurance",
    img: "/insurance.png",
  },
  {
    title: "Ambulance Services",
    img: "/ambulance.png",
  },
];

export default function PatientService() {
  return (
    <section className="patientService py-14" id="services">
      <div className="text-center mb-12 flex flex-col gap-3">
        <h2 className="text-4xl md:text-[2.75rem] text-[#1c6e73] font-normal tracking-wide">
          Patient Services
        </h2>
        <p className="text-lg md:text-[1.35rem] text-[#1c6e73] font-normal tracking-wide">
          The Ultimate Healthcare Destination For Your Family
        </p>
      </div>

      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-[90%] mx-auto relative"
      >
        <CarouselContent className="">
          {patientService?.map((item, idx) => (
            <CarouselItem key={idx} className="basis-1/1 md:basis-1/2 lg:basis-1/4">
              <div className="">
                <Card className="w-[290px] overflow-hidden rounded-3xl shadow-lg p-0">
                  <CardContent className="relative aspect-[3/4] p-0">
                    {/* Image */}
                    <img
                      src={item.img}
                      alt=""
                      className="absolute inset-0 w-full h-full object-cover"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#07234e] via-green-500/30 via-40% to-transparent to-60%"></div>

                    {/* Text */}
                    <div className="absolute bottom-6 left-6 text-white text-xl font-medium leading-snug max-w-[70%]">
                      {item.title}
                    </div>

                    {/* Arrow Button */}
                    <div className="absolute bottom-6 right-6 flex items-center justify-center w-12 h-12 rounded-full bg-white group cursor-pointer">
                      <FiArrowUpRight className="text-[#0b2e63] text-3xl transition-transform duration-300 group-hover:rotate-45" />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute top-[110%] left-[45%] p-5 shadow-xl border-2 active:shadow-none active:transform-[translateY(5px)] duration-300  border-blue-800" />
        <CarouselNext className="absolute top-[110%] right-[47%] p-5 shadow-xl border-2 active:shadow-none active:transform-[translateY(5px)] duration-300  border-blue-800" />
      </Carousel>
    </section>
  );
}
