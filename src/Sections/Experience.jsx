import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { methodology } from '../Data/Data';

gsap.registerPlugin(ScrollTrigger);

const MethodologySection = () => {
  const trackRef = useRef(null);
  const cardRefs = useRef([]);
  const progressRef = useRef(null);

  useLayoutEffect(() => {
    if (!trackRef.current) return;
    
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
          snapTo: 1 / (methodology.length - 1),
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
      window.removeEventListener('resize', setupScroll);
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  const extraSpacer = (
    <div className="basis-[33.3333%] sm:basis-[40%] md:basis-[25%] lg:basis-[20%] shrink-0" />
  );

  const cards = methodology.map((method, i) => (
    <div
      key={i}
      ref={(el) => (cardRefs.current[i] = el)}
      className="h-[75vh] rounded-3xl shrink-0 overflow-hidden
        bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50
        basis-full sm:basis-[80%] md:basis-[60%] lg:basis-[45%] 
        transition-all duration-300 p-8 flex flex-col justify-center"
    >
      <div className="text-center space-y-6">
        <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mx-auto flex items-center justify-center text-white font-bold text-2xl">
          {i + 1}
        </div>
        
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
          {method.stage}
        </h3>
        
        <p className="text-gray-300 text-lg leading-relaxed max-w-md mx-auto">
          {method.description}
        </p>
        
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-blue-400">Tools & Technologies</h4>
          <div className="flex flex-wrap gap-2 justify-center">
            {method.tools.map((tool, index) => (
              <span key={index} className="px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-300 text-sm">
                {tool}
              </span>
            ))}
          </div>
        </div>
        
        <div className="pt-4">
          <div className="text-sm text-gray-400 mb-2">Output:</div>
          <div className="text-purple-300 font-medium">{method.output}</div>
        </div>
      </div>
    </div>
  ));

  return (
    <section className="bg-gradient-to-b from-[#0F172A] to-[#0a0f1a] min-h-screen text-white pt-6">
      <header className="text-center mb-16 pt-5">
        <div className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-6">
          System Methodology
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#428DFF] to-[#275599] bg-clip-text text-transparent">
          Four-Stage Pipeline
        </h2>
        <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
          Our Sign2Text system follows a sequential multi-stage workflow that transforms sign language gestures 
          into accurate text through advanced AI processing stages.
        </p>
      </header>

      {/* Progress bar */}
      <div className="w-full h-1 bg-gray-700 mb-8">
        <div 
          ref={progressRef}
          className="h-full bg-gradient-to-r from-blue-500 to-purple-600 origin-left"
          style={{ scaleX: 0 }}
        ></div>
      </div>

      {/* Horizontally scrolling cards */}
      <div className="overflow-x-hidden w-screen">
        <div
          ref={trackRef}
          className="flex flex-nowrap items-center space-x-8 px-6 sm:px-10 md:px-20"
        >
          {cards}
          {extraSpacer}
        </div>
      </div>
      
      <div className="text-center mt-16 pb-10">
        <p className="text-gray-400 text-sm">Scroll horizontally to explore each stage →</p>
      </div>
    </section>
  );
};

export default MethodologySection;