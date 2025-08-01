import React from 'react';

const ServiceCard = ({ icon, title, description, delay = 0, index }) => {
  const cardRefs = React.useRef([]);
  const handleMouseMove = (index) => (e) => {
    const card = cardRefs.current[index];
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;
    let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
    angle = (angle + 360) % 360;
    card.style.setProperty("--start", angle + 60);
  };

  return (
    <div
      ref={(el) => (cardRefs.current[index] = el)}
      onMouseMove={handleMouseMove(index)}
      className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 p-8 transition-all duration-700 hover:bg-white/10 hover:-translate-y-3 hover:shadow-xl hover:shadow-blue-500/10 card-border animate-fadeInUp"
      style={{
        animationDelay: `${delay}ms`,
        animation: 'fadeInUp 0.9s ease-out forwards',
        '--start': '0deg',
      }}
    >
      <div className="glow absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      <div className="relative z-10">
        <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors duration-500 tracking-wide">
          {title}
        </h3>

        <p className="text-slate-300 leading-relaxed group-hover:text-white transition-colors duration-500">
          {description}
        </p>

        <div className="mt-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-3 group-hover:translate-y-0">
          <div className="flex items-center text-blue-400 text-sm font-medium">
            Learn More
            <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </div>

      {/* Decorative Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400/30 rounded-full animate-ping-slow"></div>
        <div className="absolute bottom-8 left-6 w-1 h-1 bg-purple-400/40 rounded-full animate-pulse-slow"></div>
        <div className="absolute top-1/2 right-8 w-1.5 h-1.5 bg-cyan-400/30 rounded-full animate-bounce-slow"></div>
      </div>
    </div>
  );
};

export default ServiceCard;