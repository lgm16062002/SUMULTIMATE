import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ANIMATION_CONFIG, BREAKPOINTS } from "./constants";

export function useDoctorAnimations({
  heroSectionRef,
  heroImageFrameRef,
  heroImageRef,
  articleRefs,
  navFillRefs,
  navTextFillRefs,
}) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();

    const ctx = gsap.context(() => {
      // Hero fade-in animations
      gsap.fromTo(
        ".doctor-hero-fade",
        { y: ANIMATION_CONFIG.Y_OFFSET.hero, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: ANIMATION_CONFIG.DURATION.slow,
          ease: ANIMATION_CONFIG.EASE.power2,
          stagger: ANIMATION_CONFIG.STAGGER,
        }
      );

      // Hero parallax effects
      if (heroSectionRef.current && heroImageFrameRef.current && heroImageRef.current) {
        gsap.fromTo(
          heroImageFrameRef.current,
          { y: 0 },
          {
            y: ANIMATION_CONFIG.PARALLAX.frame,
            ease: ANIMATION_CONFIG.EASE.none,
            scrollTrigger: {
              trigger: heroSectionRef.current,
              start: "top top",
              end: "bottom top",
              scrub: true,
            },
          }
        );

        gsap.fromTo(
          heroImageRef.current,
          { yPercent: 0, scale: ANIMATION_CONFIG.PARALLAX.imageScale.from },
          {
            yPercent: ANIMATION_CONFIG.PARALLAX.imageY,
            scale: ANIMATION_CONFIG.PARALLAX.imageScale.to,
            ease: ANIMATION_CONFIG.EASE.none,
            scrollTrigger: {
              trigger: heroSectionRef.current,
              start: "top top",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      }

      // Article fade-in animations
      articleRefs.current.forEach((article) => {
        if (!article) return;

        gsap.fromTo(
          article,
          { y: ANIMATION_CONFIG.Y_OFFSET.article, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: ANIMATION_CONFIG.DURATION.normal,
            ease: ANIMATION_CONFIG.EASE.power2,
            scrollTrigger: {
              trigger: article,
              start: ANIMATION_CONFIG.SCROLL_TRIGGER.heroFade.start,
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // Desktop nav fill animations
      mm.add(`(min-width: ${BREAKPOINTS.lg}px)`, () => {
        articleRefs.current.forEach((article, index) => {
          const fill = navFillRefs.current[index];
          const textFill = navTextFillRefs.current[index];
          const getCardWidth = () => fill?.parentElement?.offsetWidth ?? 0;

          if (!article || !fill || !textFill) return;

          gsap.set(fill, { width: index === 0 ? "100%" : "0%" });
          gsap.set(textFill, { width: index === 0 ? "100%" : "0%" });

          ScrollTrigger.create({
            trigger: article,
            start: ANIMATION_CONFIG.SCROLL_TRIGGER.navFill.start,
            end: ANIMATION_CONFIG.SCROLL_TRIGGER.navFill.end,
            scrub: true,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              const width = `${getCardWidth() * self.progress}px`;
              gsap.set(fill, { width });
              gsap.set(textFill, { width });
            },
            onRefresh: (self) => {
              const width = `${getCardWidth() * self.progress}px`;
              gsap.set(fill, { width });
              gsap.set(textFill, { width });
            },
          });
        });
      });

      // Mobile: reset nav fills
      mm.add(`(max-width: ${BREAKPOINTS.lg - 1}px)`, () => {
        navFillRefs.current.forEach((fill) => {
          if (fill) gsap.set(fill, { width: "0%" });
        });
        navTextFillRefs.current.forEach((textFill) => {
          if (textFill) gsap.set(textFill, { width: "0%" });
        });
      });
    });

    return () => {
      mm.revert();
      ctx.revert();
    };
  }, [heroSectionRef, heroImageFrameRef, heroImageRef, articleRefs, navFillRefs, navTextFillRefs]);
}
