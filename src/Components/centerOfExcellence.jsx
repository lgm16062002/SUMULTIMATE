import "../Styles/centerOfExcellence.css";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/Components/ui/carousel";
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
  { title: "ANESTHESIOLOGY & PAIN MANAGEMENT", img: "/anesthesia.png" },
  { title: "CARDIOLOGY (CLINICAL & INTERVENTIONAL)", img: "/cardiology.png" },
  { title: "CARDIO VASCULAR & THORACIC SURGERY", img: "/cardiovascular.png" },
  { title: "CLINICAL LABORATORY", img: "/clinicallab.png" },
  { title: "CLINICAL PSYCHOLOGY & COUNSELLING", img: "/clinical-psy.png" },
  { title: "CLINICAL RESEARCH", img: "/clinical-research.png" },
  { title: "CRITICAL CARE MEDICINE", img: "/criticalcare.png" },
  { title: "DERMATOLOGY & VENEROLOGY", img: "/dermato.png" },
  { title: "DENTISTRY, MAXILLOFACIAL SURGERY & ORTHODENTISTRY", img: "/dentist.png" },
  { title: "DIABETOLOGY", img: "/diabetology.png" },
  { title: "EAR, NOSE AND THROAT (ENT)", img: "/ent.png" },
  { title: "EMERGENCY MEDICINE", img: "/emergencymed.png" },
  { title: "ANESTHESIOLOGY & PAIN MANAGEMENT", img: "/anesthesia.png" },
  { title: "CARDIOLOGY (CLINICAL & INTERVENTIONAL)", img: "/cardiology.png" },
  { title: "CARDIO VASCULAR & THORACIC SURGERY", img: "/cardiovascular.png" },
  { title: "CLINICAL LABORATORY", img: "/clinicallab.png" },
  { title: "CLINICAL PSYCHOLOGY & COUNSELLING", img: "/clinical-psy.png" },
  { title: "CLINICAL RESEARCH", img: "/clinical-research.png" },
  { title: "CRITICAL CARE MEDICINE", img: "/criticalcare.png" },
  { title: "DERMATOLOGY & VENEROLOGY", img: "/dermato.png" },
  { title: "DENTISTRY, MAXILLOFACIAL SURGERY & ORTHODENTISTRY", img: "/dentist.png" },
  { title: "DIABETOLOGY", img: "/diabetology.png" },
  { title: "EAR, NOSE AND THROAT (ENT)", img: "/ent.png" },
  { title: "EMERGENCY MEDICINE", img: "/emergencymed.png" },
];

const chunkArray = (arr, size) => {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};

// Group into sets of 2 for 2-row layout
const pairs = chunkArray(centers, 2);

export default function CenterOfExcellence() {
  return (
    <section
      className="centerOfExcellence py-20 bg-[url('/section-pattern.png')] bg-cover bg-center bg-no-repeat"
      id="centers"
      data-aos="fade-up"
    >
      <div className="w-[92%] sm:w-[90%] mx-auto relative">
        <h2
          className="text-3xl sm:text-4xl text-[#39ffbc] font-normal mb-10 sm:mb-16 px-2 sm:px-4"
          data-aos="fade-right"
        >
          Centers of Excellence
        </h2>

        <Carousel
          opts={{ align: "start", loop: true }}
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {pairs.map((pair, index) => (
              <CarouselItem
                key={index}
                className="pl-4 basis-1/2 md:basis-1/3 lg:basis-1/6"
              >
                <div className="flex flex-col gap-10 sm:gap-12">
                  {pair.map((item, subIndex) => (
                    <div key={subIndex} className="flex flex-col items-center group cursor-pointer">
                      <div className="w-[140px] h-[132px] sm:w-[155px] sm:h-[145px] bg-[#EDEDED] rounded-[24px] flex items-center justify-center p-4 sm:p-5 transition-all duration-300">
                        <img
                          src={item.img}
                          alt={item.title}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <p className="text-white text-[12px] font-normal mt-5 text-center px-2 leading-[1.4] tracking-wide uppercase h-[50px] flex items-start justify-center overflow-hidden">
                        {item.title}
                      </p>
                    </div>
                  ))}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="hidden md:inline-flex absolute left-2 lg:left-[-50px] top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-[#39ffbc] text-white hover:text-[#07234e] border-none transition-colors" />
          <CarouselNext className="hidden md:inline-flex absolute right-2 lg:right-[-50px] top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-[#39ffbc] text-white hover:text-[#07234e] border-none transition-colors" />
        </Carousel>
      </div>
    </section>
  );
}
