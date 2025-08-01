import React from 'react';
import ServiceCard from '../Components/ServiceCard';
import { features } from '../Data/Data';

const FeaturesSection = () => {
  return (
    <div className="bg-gradient-to-b from-[#131a2c] to-[#0e1629] text-white min-h-screen relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl animate-spin"
          style={{ animationDuration: '20s' }}
        ></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-6">
            Core Features
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#428DFF] to-[#275599] bg-clip-text text-transparent">
            Advanced AI Technology
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Sign2Text leverages cutting-edge computer vision, deep learning, and natural language processing 
            to deliver real-time sign language translation with unprecedented accuracy and speed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mx-auto">
          {features.map((feature, index) => (
            <ServiceCard
              key={index}
              index={index}
              title={feature.title}
              description={feature.desc}
              delay={index * 150}
            />
          ))}
        </div>

        {/* Technical Architecture Section */}
        <div className="mt-20 pt-20 border-t border-gray-700/50">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 text-white">System Architecture</h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              A modular pipeline integrating state-of-the-art algorithms for seamless gesture-to-text translation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {['Pose Estimation', 'Feature Extraction', 'Sequence Modeling', 'Text Generation'].map((stage, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl">
                  {index + 1}
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{stage}</h4>
                <div className="w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .card-border::before {
          background: conic-gradient(
            from var(--start, 0deg),
            transparent 0deg,
            #3b82f6 40deg,
            #8b5cf6 80deg,
            #06b6d4 120deg,
            transparent 160deg
          );
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          padding: 2px;
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask-composite: exclude;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .card-border:hover::before {
          opacity: 1;
        }
        .glow::before {
          background: conic-gradient(
            from var(--start, 0deg),
            transparent 0deg,
            rgba(59, 130, 246, 0.4) 40deg,
            rgba(139, 92, 246, 0.4) 80deg,
            rgba(6, 182, 212, 0.4) 120deg,
            transparent 160deg
          );
          content: '';
          position: absolute;
          inset: -20px;
          border-radius: inherit;
          filter: blur(20px);
        }
      `}</style>
    </div>
  );
};

export default FeaturesSection;