import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import '../Styles/whereJourney.css'

export default function WhereJourney() {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const textRef = useRef(null)
  const buttonRef = useRef(null)
  const [bgImage, setBgImage] = useState('/journey-bg.png')

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setBgImage('/journey-bg-mobile.png')
      } else {
        setBgImage('/journey-bg.png')
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          end: 'bottom 30%',
          toggleActions: 'play reverse play reverse',
        }
      })

      // Title animation - comes down from above
      tl.fromTo(
        titleRef.current,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
      )
      // Subtitle animation - comes down
      .fromTo(
        subtitleRef.current,
        { y: 80, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' },
        '-=0.5'
      )
      // Paragraph animation - comes down
      .fromTo(
        textRef.current,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' },
        '-=0.4'
      )
      // Button animation - comes down with bounce
      .fromTo(
        buttonRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: 'back.out(1.7)' },
        '-=0.3'
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <>
      <section
      ref={sectionRef}
      className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat flex flex-col md:flex-row items-center justify-center md:justify-end overflow-hidden py-12 md:py-0 z-20"
      style={{ backgroundImage: `url('${bgImage}')` }}
    >
      {/* Mobile: Heading at top - Hidden on desktop */}
      <h2
        ref={titleRef}
        className="md:hidden text-white text-[28px] sm:text-[32px] font-semibold tracking-wide leading-[1.2] max-w-[600px] text-left px-4 pt-8 pb-8"
      >
        Where Your Journey Meets<br />Compassionate Care
      </h2>

      {/* Desktop: All content together - Hidden on mobile */}
      <div
        className="hidden md:flex relative z-20 w-[60%] flex-col items-start text-left pl-[15%] pr-[5%]"
      >
        <h2
          className="text-white text-[40px] lg:text-[45px] font-semibold tracking-wide leading-[1.2] mb-6 max-w-[600px]"
        >
          Where Your Journey Meets<br />Compassionate Care
        </h2>

        <h3
          ref={subtitleRef}
          className="text-white text-[20px] lg:text-[22px] font-medium mb-6"
        >
          Realizing Patient-Centered Care
        </h3>

        <p
          ref={textRef}
          className="text-white text-[18px] lg:text-[20px] font-light leading-[1.6] max-w-[650px] mb-12"
        >
          We are committed to providing medical services that prioritize each patient's unique experience &ndash; ensuring personalized, respectful, and collaborative care at every step.
        </p>

        <div className="button_item btn--primary">
          <a href="#services">
            <i></i>
            <button className="text">Know More</button>
          </a>
        </div>
      </div>

      {/* Mobile: Other content below - Hidden on desktop */}
      <div
        className="md:hidden relative z-20 w-[92%] sm:w-[90%] flex flex-col items-center text-center px-2 mt-8 pb-12"
      >
        <h3
          ref={subtitleRef}
          className="text-white text-[18px] sm:text-[20px] font-medium mb-5 sm:mb-6"
        >
          Realizing Patient-Centered Care
        </h3>

        <p
          ref={textRef}
          className="text-white text-[15px] sm:text-[18px] font-light leading-[1.6] max-w-[650px] mb-8 sm:mb-12"
        >
          We are committed to providing medical services that prioritize each patient's unique experience &ndash; ensuring personalized, respectful, and collaborative care at every step.
        </p>

        <div className="button_item btn--primary">
          <a href="#services">
            <i></i>
            <button className="text">Know More</button>
          </a>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 right-[5rem] sm:right-[5.75rem] md:right-[7rem] z-30">
        <img
          src="/sum-icon.png"
          alt=""
          className="w-[96px] sm:w-[122px] md:w-[150px] object-contain opacity-30"
        />
      </div>

    </section>
    </>
  )
}
