import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import '../Styles/choose.css'

export default function Choose() {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const textRef = useRef(null)
  const buttonRef = useRef(null)

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

      // Title animation - comes down
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
        { y: 50, opacity: 0, scale: 0.9 },
        { y: 0, opacity: 1, scale: 1, duration: 0.6, ease: 'back.out(1.7)' },
        '-=0.3'
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <>
      <section
      ref={sectionRef}
      className="relative w-full overflow-hidden min-h-screen flex items-center -mt-16 md:-mt-20 z-10 sticky top-0"
      id="journey"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/sum-section.png')" }}
      ></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 "></div>

      {/* Decorative bottom-left icon */}
      <div className="pointer-events-none absolute bottom-0 left-[6rem] sm:left-[6.75rem] md:left-[8rem] z-0">
        <img
          src="/sum-icon.png"
          alt=""
          className="w-[96px] sm:w-[122px] md:w-[150px] object-contain opacity-18"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-[92%] sm:w-[90%] md:w-[80%] mx-auto pb-16 sm:pb-20 pt-14 sm:pt-20">
        <div className="max-w-xl text-white">
          <h2
            ref={titleRef}
            className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-wide mb-6 sm:mb-8"
          >
            Why Choose SUM Ultimate
          </h2>

          <h3
            ref={subtitleRef}
            className="text-lg sm:text-xl md:text-2xl font-light mb-5 sm:mb-6"
          >
            Realizing Patient-Centered Care
          </h3>

          <p
            ref={textRef}
            className="text-[15px] sm:text-[17px] md:text-lg font-light leading-relaxed mb-8 sm:mb-10"
          >
            We are committed to providing medical services that
            prioritize each patient's unique experience – ensuring
            personalized, respectful, and collaborative care at
            every step.
          </p>

          <div className="button_item btn--primary">
            <a href="#services">
              <i></i>
              <button className="text">Know More</button>
            </a>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
