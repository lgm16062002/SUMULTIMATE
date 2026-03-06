import "../Styles/centerOfExcellence.css";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import {
  FaHeartbeat,
  FaBrain,
  FaLungs,
  FaMicroscope,
  FaFlask,
  FaProcedures,
  FaHandHoldingMedical,
  FaTooth,
  FaSyringe,
  FaNotesMedical,
  FaUserMd,
} from "react-icons/fa";
import { Card, CardContent } from "./ui/card";

const centers = [
  { title: "ANESTHESIOLOGY & PAIN MANAGEMENT", icon: <FaProcedures /> },
  { title: "CARDIOLOGY (CLINICAL & INTERVENTIONAL)", icon: <FaHeartbeat /> },
  { title: "CARDIO VASCULAR & THORACIC SURGERY", icon: <FaLungs /> },
  { title: "CLINICAL LABORATORY", icon: <FaMicroscope /> },
  { title: "CLINICAL PSYCHOLOGY & COUNSELLING", icon: <FaBrain /> },
  { title: "CLINICAL RESEARCH", icon: <FaFlask /> },
  { title: "CRITICAL CARE MEDICINE", icon: <FaNotesMedical /> },
  { title: "DERMATOLOGY & VENEROLOGY", icon: <FaHandHoldingMedical /> },
  { title: "DENTISTRY & MAXILLOFACIAL SURGERY", icon: <FaTooth /> },
  { title: "DIABETOLOGY", icon: <FaSyringe /> },
  { title: "EMERGENCY MEDICINE", icon: <FaUserMd /> },
];

const chunkArray = (arr, size) => {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};

const slides = chunkArray(centers, 12);

export default function CenterOfExcellence() {
  return (
    <section className="centerOfExcellence py-20 bg-[#07234e]" id="centers">
      <div className="w-[90%] mx-auto relative">
        <h2 className="text-4xl text-green-400 mb-12">Centers of Excellence</h2>

        <Carousel
          opts={{ align: "start", loop: true }}
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
        >
          <CarouselContent>
            {centers.map((card, index) => (
              <CarouselItem
                key={index}
                className="flex flex-col items-center lg:basis-1/6 gap-8"
              >
                <div>
                  <Card className="w-[170px] h-[150px] bg-[#e9e9e9] rounded-3xl border-none shadow-none flex items-center justify-center">
                    <CardContent className="flex items-center justify-center p-0">
                      {/* Icon */}
                      <FaMicroscope
                        className="text-[65px]"
                        style={{
                          background: "linear-gradient(180deg,#0b3c66,#22c55e)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                        }}
                      />
                    </CardContent>
                  </Card>
                  <p className="text-white text-sm mt-1 text-center max-w-[170px] leading-snug">
                    CLINICAL LABORATORY
                  </p>
                </div>
                <div>
                  <Card className="w-[170px] h-[150px] bg-[#e9e9e9] rounded-3xl border-none shadow-none flex items-center justify-center">
                    <CardContent className="flex items-center justify-center p-0">
                      {/* Icon */}
                      <FaMicroscope
                        className="text-[65px]"
                        style={{
                          background: "linear-gradient(180deg,#0b3c66,#22c55e)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                        }}
                      />
                    </CardContent>
                  </Card>

                  {/* Title */}
                  <p className="text-white text-sm mt-1 text-center max-w-[170px] leading-snug">
                    CLINICAL LABORATORY
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="absolute left-[-60px] top-1/2 -translate-y-1/2 w-14 h-14 bg-[#163d66] text-white border-none" />
          <CarouselNext className="absolute right-[-60px] top-1/2 -translate-y-1/2 w-14 h-14 bg-[#163d66] text-white border-none" />
        </Carousel>
      </div>
    </section>
  );
}
