import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { doctors } from "../Data/Data";
import NavBar from "../Sections/NavBar";
import Footer from "../Sections/Footer";

const Doctors = () => {
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

  return (
    <div className="bg-black">
      <div
        ref={containerRef}
        className="min-h-screen bg-gradient-to-b from-black to-[#131a2c] text-white flex flex-col items-center justify-center px-6 pt-20 relative overflow-hidden"
      >
        <NavBar />
        <h2 className="text-xl md:text-xl uppercase font-extrabold mb-10 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent ">
          Meet Our Experts
        </h2>
        {activeIndex === null ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-6xl">
            {doctors.map((doc, index) => (
              <div
                key={index}
                className="p-6 rounded-3xl bg-[#1e253a]/80 backdrop-blur-md shadow-2xl flex flex-col items-center text-center"
              >
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-purple-500 shadow-xl mb-4">
                  <img
                    src={doc.photo}
                    alt={doc.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-2xl font-semibold text-blue-300 mb-1">
                  {doc.name}
                </h3>
                <p className="text-md text-purple-300 mb-2">{doc.title}</p>
                <p className="text-sm text-gray-300 mb-3">{doc.bio}</p>
                <ul className="text-sm text-gray-400 list-disc list-inside text-left w-full mb-4">
                  {doc.expertise.map((item, i) => (
                    <li key={i} className="hover:text-slate-200">
                      {item}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => setActiveIndex(index)}
                  className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-sm"
                >
                  Know More
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="w-full max-w-6xl space-y-12 pb-20">
            <div className="w-full flex items-center justify-center mb-6 gap-4">
              <div className="w-full h-56 border-2 rounded-3xl"></div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-purple-500 shadow-2xl mb-6">
                <img
                  src={doctors[activeIndex].photo}
                  alt={doctors[activeIndex].name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-4xl font-bold text-center text-indigo-300 mb-4">
                {doctors[activeIndex].name}
              </h2>
              <p className="text-center text-white/70 max-w-xl">
                {doctors[activeIndex].testimonial}
              </p>
            </div>

            <div className="relative pl-14">
              <div className="absolute top-0 left-6 bottom-0 w-1 bg-gradient-to-b from-purple-500 to-blue-500 rounded-full origin-top timeline" />
              <div className="space-y-16 relative z-10">
                {doctors[activeIndex].timeline.map((entry, i) => (
                  <div key={i} className="timeline-card flex items-start gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#0f172a] border-2 border-purple-500 flex items-center justify-center shadow-md">
                      <img
                        src={entry.logoPath}
                        alt="logo"
                        className="w-6 h-6"
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-white">
                        {entry.title}
                      </h3>
                      <p className="my-2 text-white/60">📅 {entry.date}</p>
                      <p className="italic text-sm text-gray-400">
                        Responsibilities
                      </p>
                      <ul className="list-disc ms-5 mt-2 text-sm text-gray-300 space-y-1">
                        {entry.responsibilities.map((res, j) => (
                          <li key={j}>{res}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center pt-10">
              <button
                onClick={() => setActiveIndex(null)}
                className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full text-white hover:scale-105 transition-all"
              >
                Back to All Doctors
              </button>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Doctors;
