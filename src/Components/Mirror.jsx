import React, { useEffect, useRef } from 'react';
import './Mirror.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Mirror = () => {
  const wrapperRef = useRef(null);
  const card1 = useRef(null);
  const card2 = useRef(null);
  const card3 = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: 'top 30%',
          end: 'top',
          scrub: true,
          markers: false,
          toggleActions: 'play reverse play reverse',
        }
      });

      tl.to(card1.current, {
        x: 0,
        scale: 1,
        zIndex: 2,
        duration: 0.6,
        ease: 'power2.out'
      }, 0)
      .to(card2.current, {
        x: '28vw',
        scale: 0.9,
        zIndex: 1,
        duration: 0.6,
        ease: 'power2.out'
      }, 0)
      .to(card3.current, {
        x: '-28vw',
        scale: 0.9,
        zIndex: 1,
        duration: 0.6,
        ease: 'power2.out'
      }, 0);
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
    <div className="mirror-wrapper" ref={wrapperRef}>
      <div className="circle glass card card-1" ref={card1} />
      <div className="circle glass card card-2" ref={card2} />
      <div className="circle glass card card-3" ref={card3} />
    </div>
    </>
  );
};

export default Mirror;
