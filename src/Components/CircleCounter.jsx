import React, { useEffect, useRef, useState } from "react";

const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

const CircleCounter = ({
  value,
  label,
  gradientId = "gradientStroke",
  percentage,
  radius = 120,
  strokeWidth = 7,
  gradientFrom = "#1e3a8a",
  gradientTo = "#0e1629",
}) => {
  const normalizedRadius = radius - strokeWidth / 2;
  const circumference = 2 * Math.PI * normalizedRadius;

  const [hasAnimated, setHasAnimated] = useState(false);
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          animateCount();
          setHasAnimated(true);
        }
      },
      { 
        threshold: 0.5,
        rootMargin: "0px 0px -30% 0px"
      }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCount = () => {
    const finalValue = parseInt(value.replace(/\D/g, ""), 10);
    const duration = 700;
    const totalFrames = 30;
    let frame = 0;

    const timer = setInterval(() => {
      frame += 1;
      const progress = easeOutCubic(frame / totalFrames);
      setCount(Math.round(finalValue * progress));
      if (frame === totalFrames) clearInterval(timer);
    }, duration / totalFrames);
  };

  const strokeDashoffset = hasAnimated
    ? circumference * (1 - percentage)
    : circumference;

  return (
    <div
      ref={ref}
      style={{ width: radius * 2, height: radius * 2 }}
      className="relative flex items-center justify-center"
    >
      <svg
        width={radius * 2}
        height={radius * 2}
        className="absolute top-0 left-0 -rotate-90"
      >
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={gradientFrom} />
            <stop offset="100%" stopColor={gradientTo} />
          </linearGradient>
        </defs>
        <circle
          cx={radius}
          cy={radius}
          r={normalizedRadius}
          stroke="#111827"
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeLinecap="round"
          style={{
            transition: "stroke-dashoffset 1s ease-out",
          }}
        />
        <circle
          cx={radius}
          cy={radius}
          r={normalizedRadius}
          stroke={`url(#${gradientId})`}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          fill="transparent"
          style={{
            transition: "stroke-dashoffset 1s ease-out",
          }}
        />
      </svg>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center leading-tight">
        <div className="flex items-baseline justify-center text-center">
          <span className="text-white text-3xl md:text-4xl font-bold">
            {count.toLocaleString()}
          </span>
          <span className="text-white text-xl md:text-2xl font-bold">+</span>
        </div>
        <p className="text-white text-base md:text-lg font-medium mt-1">
          {label}
        </p>
      </div>
    </div>
  );
};

export default CircleCounter;
