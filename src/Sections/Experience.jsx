import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const trackRef = useRef(null);
  const cardRefs = useRef([]);
  const progressRef = useRef(null);

  useLayoutEffect(() => {
    if (!trackRef.current) return;
    const lenis = new Lenis({ smooth: true });
    gsap.ticker.add((t) => lenis.raf(t * 1000));
    lenis.on('scroll', ScrollTrigger.update);
    const setupScroll = () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
      const track = trackRef.current;
      const spacerWidth = 40;
      const scrollLength = track.scrollWidth - window.innerWidth + spacerWidth;
      gsap.set(track, { x: 0 });
      const tl = gsap.to(track, {
        x: -scrollLength,
        ease: 'none',
      });
      ScrollTrigger.create({
        trigger: track,
        animation: tl,
        pin: true,
        scrub: true,
        start: 'center center',
        end: `+=${scrollLength}`,
        snap: {
          snapTo: 1 / (cardRefs.current.length - 1),
          duration: 0.5,
          ease: 'power2.inOut',
        },
        onUpdate: (self) => {
          gsap.set(progressRef.current, {
            scaleX: self.progress,
          });
        },
      });
    };

    setupScroll();
    window.addEventListener('resize', setupScroll);

    return () => {
      lenis.destroy();
      gsap.ticker.remove((t) => lenis.raf(t * 1000));
      window.removeEventListener('resize', setupScroll);
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  const extraSpacer = (
    <div className="basis-[33.3333%] sm:basis-[40%] md:basis-[25%] lg:basis-[20%] shrink-0" />
  );

  const cards = Array.from({ length: 5 }).map((_, i) => (
    <div
      key={i}
      ref={(el) => (cardRefs.current[i] = el)}
      className="h-[75vh] rounded-3xl shrink-0 overflow-hidden
        bg-gray-200 even:bg-gray-300 
        basis-full sm:basis-[80%] md:basis-[50%] lg:basis-[33.3333%] 
        transition-all duration-300"
    />
  ));

  return (
    <section className="bg-gradient-to-b from-[#0F172A] to-[#0a0f1a] min-h-screen text-white pt-6">
      <header className="text-center mb-16 pt-5">
        <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-[#428DFF] to-[#275599] bg-clip-text text-transparent">
          EXPERIENCE
        </h2>
        <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Our team of highly skilled professionals brings years of experience
          in the healthcare industry, ensuring that you receive the best care
          possible. We are dedicated to providing exceptional service and
          expertise in every aspect of your healthcare journey.
        </p>
      </header>

      {/* Horizontally scrolling cards */}
      <div className="overflow-x-hidden w-screen">
        <div
          ref={trackRef}
          className="flex flex-nowrap items-center space-x-6 px-6 sm:px-10 md:px-20"
        >
          {cards}
          {extraSpacer}
        </div>
      </div>
    </section>
  );
};

export default Experience;
