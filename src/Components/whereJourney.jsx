import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function WhereJourney() {
  const sectionRef = useRef(null)
  const imageRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const textRef = useRef(null)
  const buttonRef = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      // Image animation
      gsap.fromTo(
        imageRef.current,
        { x: -80, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            end: 'top 35%',
            toggleActions: 'play none none reverse',
          },
        }
      )

      // Title animation
      gsap.fromTo(
        titleRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 65%',
            end: 'top 30%',
            toggleActions: 'play none none reverse',
          },
        }
      )

      // Subtitle animation
      gsap.fromTo(
        subtitleRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 55%',
            end: 'top 25%',
            toggleActions: 'play none none reverse',
          },
        }
      )

      // Paragraph animation
      gsap.fromTo(
        textRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 45%',
            end: 'top 20%',
            toggleActions: 'play none none reverse',
          },
        }
      )

      // Button animation
      gsap.fromTo(
        buttonRef.current,
        { y: 40, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 35%',
            end: 'top 10%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen bg-[#eef6f6] flex flex-col md:flex-row items-center justify-center md:justify-end overflow-hidden py-12 md:py-0 sticky top-0 z-10"
    >
      {/* Image on the left anchored to the bottom */}
      <img
        ref={imageRef}
        src="/patient.png"
        alt="Compassionate Care"
        className="absolute left-0 bottom-0 h-auto w-[92%] sm:w-[80%] md:w-[50%] lg:w-[45%] object-contain z-10 max-md:static max-md:mb-8 opacity-0"
      />

      {/* Content wrapper taking up the right side */}
      <div
        className="relative z-20 w-[92%] sm:w-[90%] md:w-[60%] flex flex-col items-center md:items-start text-center md:text-left px-2 sm:px-0 md:pl-[5%] md:pr-[5%]"
      >
        <h2
          ref={titleRef}
          className="text-[#2b6b7a] text-[28px] sm:text-[32px] md:text-[40px] lg:text-[45px] font-semibold tracking-wide leading-[1.2] mb-5 sm:mb-6 max-w-[600px] opacity-0"
        >
          Where Your Journey Meets<br />Compassionate Care
        </h2>

        <h3
          ref={subtitleRef}
          className="text-[#666] text-[18px] sm:text-[20px] md:text-[22px] font-medium mb-5 sm:mb-6 opacity-0"
        >
          Realizing Patient-Centered Care
        </h3>

        <p
          ref={textRef}
          className="text-[#444] text-[15px] sm:text-[18px] md:text-[20px] font-light leading-[1.6] max-w-[650px] mb-8 sm:mb-12 opacity-0"
        >
          We are committed to providing medical services that prioritize each patient's unique experience &ndash; ensuring personalized, respectful, and collaborative care at every step.
        </p>

        <button
          ref={buttonRef}
          className="bg-transparent border-2 border-[#1e6ac2] text-[#6b6b6b] hover:bg-[#1e6ac2] hover:text-white transition-all duration-300 font-medium py-[10px] px-10 rounded-[30px] text-[15px] sm:text-[16px] tracking-wide w-full sm:w-auto opacity-0"
        >
          Know More
        </button>
      </div>

    </section>
  )
}
