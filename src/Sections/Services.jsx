import React from 'react';
import ServiceCard from '../Components/ServiceCard';

const ServicesSection = () => {
  const services = [
    {
      title: "Neuro Surgery",
      description: "Brain & spinal tumour resection, stroke-related surgery, and craniofacial surgeries.",
      doctor: "Dr. Sriram Damaraju"
    },
    {
      title: "Neurological Rehabilitation",
      description: "Post-stroke/head injury physiotherapy, Botulinum toxin-assisted therapy, and constraint-induced therapy.",
      doctor: "Dr. Sriram Damaraju"
    },
    {
      title: "Physiotherapy (Dr. Pamela Narayan)",
      description: "Covers rheumatoid arthritis, dry needling, pediatrics, gait training, and neuropediatrics.",
      doctor: "Dr. Pamela Narayan"
    },
    {
      title: "Pain Management & Spine Care",
      description: "Managed by Dr. Sriram Damaraju – includes spine and pain specialist services.",
      doctor: "Dr. Sriram Damaraju"
    },
    {
      title: "Gynaecology & Obstetrics",
      description: "Provided by Dr. Pushpalata Damaraju, covering comprehensive women's health services.",
      doctor: "Dr. Pushpalata Damaraju"
    },
    {
      title: "Head Injury Management",
      description: "Includes post-trauma care and rehabilitation for head injuries."
    },
    {
      title: "Sports Physiotherapy",
      description: "Tailored physiotherapy for athletes with injury-specific treatment protocols.",
      doctor: "Dr. Pamela Narayan"
    },
    {
      title: "Home Care Physiotherapy",
      description: "Remote therapy sessions including video consultations for convenience and continuity of care.",
      doctor: "Dr. Pamela Narayan"
    },
    {
      title: "Speech Disorders & Stem Cell Therapy",
      description: "Specialized services in speech rehabilitation and emerging stem cell-based therapies."
    }
  ];

  return (
    <div className="bg-gradient-to-b from-[#131a2c] to-[#0e1629] text-white h-max-screen relative overflow-hidden">
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
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-[#428DFF] to-[#275599] bg-clip-text text-transparent">
            SERVICES
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Comprehensive healthcare solutions delivered with excellence, compassion, and cutting-edge medical technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mx-auto">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              index={index}
              title={service.title}
              description={service.description}
              doctor={service.doctor}
              delay={index * 150}
            />
          ))}
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

export default ServicesSection;
