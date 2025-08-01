import React, { useRef, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import NavBar from "./Sections/NavBar";
import Hero from "./Sections/Hero";
import Services from "./Sections/Services";
import Stats from "./Sections/Stats";
import Footer from "./Sections/Footer";
import Blogs from "./Pages/Blogs";
import Mirror from "./Components/Mirror";
import Experience from "./Sections/Experience";
import Doctors from "./Pages/Doctors";
import Reviews from "./Pages/Reviews";

const Home = () => {
  const topRef = useRef(null);
  const servicesRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const scrollTarget = params.get("scroll");

    if (scrollTarget === "top") {
      topRef.current?.scrollIntoView({ behavior: "smooth" });
    } else if (scrollTarget === "services") {
      servicesRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  const scrollToTop = () => {
    topRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToServices = () => {
    servicesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="overflow-x-hidden">
      <NavBar scrollToTop={scrollToTop} scrollToServices={scrollToServices} />
      <div
        ref={topRef}
        className="bg-gradient-to-b from-black to-[#131a2c] text-white"
      >
        <Hero />
      </div>
      <div ref={servicesRef}>
        <Services />
        <Stats />
      </div>
      <Experience />
      <Mirror />
      <Footer />
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/reviews" element={<Reviews />}/>
      </Routes>
    </Router>
  );
}; 

export default App;
