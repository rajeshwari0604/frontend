import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const terms = ['Consultants.', 'Obstetricians. ', 'Gynecologists. '];

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
        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
          A Trusted Name in{' '}
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

        <p className="text-lg text-gray-300">
          At Lakshmi Hospital and Research Center, you’ll find a team of expert professionals committed to your health and well-being.
        </p>
        <p className="text-md text-gray-400">
          From routine check-ups to specialized treatments, Lakshmi Hospital and Research Center stands as a beacon of trust and excellence in women’s healthcare across India.
        </p>
      </div>
      <div className='h-[60vh] w-[70vw] bg-slate-400 max-md:mt-10 rounded-3xl'></div>
    </div>
  );
};

export default Hero;
