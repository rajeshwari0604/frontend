import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { teamMembers, supervisor } from "../Data/Data";
import NavBar from "../Sections/NavBar";
import Footer from "../Sections/Footer";

const Team = () => {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    if (activeIndex !== null) {
      gsap.utils.toArray(".timeline-card").forEach((card) => {
        gsap.from(card, {
          xPercent: -100,
          opacity: 0,
          transformOrigin: "left left",
          duration: 1,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
          },
        });
      });
    }
  }, [activeIndex]);

  const allMembers = [...teamMembers, supervisor];

  return (
    <div className="bg-black">
      <div
        ref={containerRef}
        className="min-h-screen bg-gradient-to-b from-black to-[#131a2c] text-white flex flex-col items-center justify-center px-6 pt-20 relative overflow-hidden"
      >
        <NavBar />
        
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 w-full max-w-7xl">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-6">
              Project Team
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Meet Our Team
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              The dedicated team behind Sign2Text, combining expertise in AI, computer vision, 
              and natural language processing to create innovative accessibility solutions.
            </p>
          </div>

          {activeIndex === null ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
              {allMembers.map((member, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-lg border border-white/10 p-8 transition-all duration-700 hover:bg-white/10 hover:-translate-y-3 hover:shadow-xl hover:shadow-blue-500/10"
                >
                  <div className="text-center">
                    <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-purple-500 shadow-xl mb-6 mx-auto">
                      <img
                        src={member.photo}
                        alt={member.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    
                    <h3 className="text-2xl font-semibold text-blue-300 mb-2">
                      {member.name}
                    </h3>
                    
                    <p className="text-lg text-purple-300 mb-2">{member.role || member.title}</p>
                    
                    {member.hallTicket && (
                      <p className="text-sm text-gray-400 mb-4">Hall Ticket: {member.hallTicket}</p>
                    )}
                    
                    <p className="text-sm text-gray-300 mb-4 leading-relaxed">{member.bio}</p>
                    
                    {member.expertise && (
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-blue-400 mb-3">Expertise</h4>
                        <div className="flex flex-wrap gap-2 justify-center">
                          {member.expertise.map((skill, i) => (
                            <span key={i} className="px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-300 text-xs">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {index < teamMembers.length && (
                      <button
                        onClick={() => setActiveIndex(index)}
                        className="mt-4 px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full text-sm font-semibold hover:scale-105 transition-all duration-300"
                      >
                        View Profile
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="w-full space-y-12 pb-20">
              <div className="flex flex-col items-center">
                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-purple-500 shadow-2xl mb-8">
                  <img
                    src={teamMembers[activeIndex].photo}
                    alt={teamMembers[activeIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <h2 className="text-4xl font-bold text-center text-indigo-300 mb-4">
                  {teamMembers[activeIndex].name}
                </h2>
                
                <p className="text-xl text-purple-300 mb-2">{teamMembers[activeIndex].role}</p>
                <p className="text-gray-400 mb-6">Hall Ticket: {teamMembers[activeIndex].hallTicket}</p>
                
                <p className="text-center text-white/70 max-w-2xl leading-relaxed mb-8">
                  {teamMembers[activeIndex].bio}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
                  <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6">
                    <h3 className="text-xl font-semibold text-white mb-4">Technical Expertise</h3>
                    <div className="space-y-3">
                      {teamMembers[activeIndex].expertise.map((skill, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                          <span className="text-gray-300">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6">
                    <h3 className="text-xl font-semibold text-white mb-4">Project Contributions</h3>
                    <div className="space-y-3 text-gray-300 text-sm">
                      <p>• Leading development of core system modules</p>
                      <p>• Implementing advanced AI algorithms</p>
                      <p>• Optimizing performance and accuracy</p>
                      <p>• Contributing to research and documentation</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center pt-10">
                <button
                  onClick={() => setActiveIndex(null)}
                  className="px-8 py-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full text-white hover:scale-105 transition-all font-semibold"
                >
                  Back to Team Overview
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Team;