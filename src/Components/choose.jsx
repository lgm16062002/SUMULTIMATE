import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function Choose() {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const textRef = useRef(null)
  const buttonRef = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
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
            start: 'top 70%',
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
            start: 'top 60%',
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
            start: 'top 50%',
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
            start: 'top 40%',
            end: 'top 15%',
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
      className="relative w-full overflow-hidden min-h-screen flex items-center -mt-16 md:-mt-20 z-20"
      id="journey"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/sum-section.png')" }}
      ></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 "></div>

      {/* Content Container */}
      <div className="relative z-10 w-[92%] sm:w-[90%] md:w-[80%] mx-auto pb-16 sm:pb-20 pt-14 sm:pt-20">
        <div className="max-w-xl text-white">
          <h2
            ref={titleRef}
            className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-wide mb-6 sm:mb-8 opacity-0"
          >
            Why Choose SUM Ultimate
          </h2>

          <h3
            ref={subtitleRef}
            className="text-lg sm:text-xl md:text-2xl font-light mb-5 sm:mb-6 opacity-0"
          >
            Realizing Patient-Centered Care
          </h3>

          <p
            ref={textRef}
            className="text-[15px] sm:text-[17px] md:text-lg font-light leading-relaxed mb-8 sm:mb-10 opacity-0"
          >
            We are committed to providing medical services that
            prioritize each patient's unique experience – ensuring
            personalized, respectful, and collaborative care at
            every step.
          </p>

          <button
            ref={buttonRef}
            className="bg-white/90 hover:bg-white text-[#1b746e] font-medium py-3 px-8 sm:px-10 rounded-full transition duration-300 shadow-md w-full sm:w-auto opacity-0"
          >
            Know More
          </button>
        </div>
      </div>
    </section>
  )
}
