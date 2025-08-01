import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const terms = ['Translation.', 'Recognition.', 'Communication.'];

const Hero = () => {
  const circleRef = useRef(null);
  const wordRef = useRef(null);
  const tlRef = useRef(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const circleSize = 6;
    const wordWidth = wordRef.current.offsetWidth;

    if (tlRef.current) tlRef.current.kill();

    tlRef.current = gsap.timeline();

    tlRef.current
      .set(circleRef.current, { x: -circleSize })
      .set(wordRef.current, { clipPath: 'inset(0 100% 0 0)' })
      .to(
        circleRef.current,
        { x: wordWidth, duration: 1.5, ease: 'power2.inOut' },
        0
      )
      .to(
        wordRef.current,
        { clipPath: 'inset(0 0% 0 0)', duration: 1.5, ease: 'power2.inOut' },
        0
      )
      .to({}, { duration: 1 })
      .to(
        circleRef.current,
        { x: -circleSize, duration: 1.5, ease: 'power2.inOut' }
      )
      .to(
        wordRef.current,
        { clipPath: 'inset(0 100% 0 0)', duration: 1.5, ease: 'power2.inOut' },
        '-=1.5'
      )
      .to({}, { duration: 1 })
      .call(() => setIndex((i) => (i + 1) % terms.length));

    return () => tlRef.current.kill();
  }, [index]);

  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between min-h-screen p-10">
      <div className="md:w-1/2 space-y-6 relative m-5">
        <div className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-4">
          Computer Science & Engineering Project
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Sign2Text: Real-Time{' '}
          <span className="relative inline-block align-middle whitespace-nowrap">
            <span
              ref={circleRef}
              className="absolute top-1/2 -translate-y-1/3 h-6 w-6 rounded-full bg-gradient-to-r from-blue-300 to-purple-300 z-20"
            />
            <span
              ref={wordRef}
              className="bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent font-extrabold"
            >
              {terms[index]}
            </span>
          </span>
        </h1>

        <p className="text-lg text-gray-300 leading-relaxed">
          An innovative AI-powered system that bridges communication gaps by converting sign language gestures 
          into real-time text using advanced computer vision and machine learning technologies.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-semibold hover:scale-105 transition-all duration-300 shadow-lg">
            View Demo
          </button>
          <button className="px-8 py-3 border border-gray-600 rounded-full text-gray-300 font-semibold hover:bg-gray-800 transition-all duration-300">
            Read Documentation
          </button>
        </div>

        <div className="flex items-center gap-6 pt-6 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span>Real-time Processing</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <span>Sub-100ms Latency</span>
          </div>
        </div>
      </div>
      
      <div className="md:w-1/2 flex justify-center items-center">
        <div className="relative">
          <div className="w-80 h-80 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-3xl backdrop-blur-sm border border-white/10 flex items-center justify-center">
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl mx-auto flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m0 0V1a1 1 0 011-1h2a1 1 0 011 1v18a1 1 0 01-1 1H4a1 1 0 01-1-1V1a1 1 0 011-1h2a1 1 0 011 1v3" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white">AI-Powered Recognition</h3>
              <p className="text-gray-300 text-sm">Advanced pose estimation and deep learning</p>
            </div>
          </div>
          
          {/* Floating elements */}
          <div className="absolute -top-4 -right-4 w-16 h-16 bg-blue-500/20 rounded-full animate-bounce-slow"></div>
          <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-purple-500/20 rounded-full animate-pulse-slow"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;