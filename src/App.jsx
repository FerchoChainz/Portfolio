import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Footer } from "./layout/Footer";
import { Navbar } from "./layout/Navbar";
import { About } from "./sections/About";
import { Contact } from "./sections/Contact";
import { Experience } from "./sections/Experience";
import { Hero } from "./sections/Hero";
import { Projects } from "./sections/Projects";

gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.config({ ignoreMobileResize: true });

function App() {
  useEffect(() => {
    // Refresh ScrollTrigger markers after fonts, layout, and images settle
    const refreshTimer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);

    const handleLoad = () => ScrollTrigger.refresh();
    window.addEventListener("load", handleLoad);

    return () => {
      clearTimeout(refreshTimer);
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (<div className="min-h-screen overflow-x-clip bg-black text-foreground">
    <Navbar/>
    <main className="relative bg-black">
      <Hero/>
      <div className="relative bg-gradient-to-b from-[#000000] via-[#121316] via-15% via-[#1c1e24] via-35% via-[#383b46] via-55% via-[#6c7080] via-72% via-[#b4b7c4] via-88% to-[#ffffff]">
        <About/>
        <Projects/>
        <Experience/>
      </div>
      <Contact/>
    </main>
    <Footer/>
  </div>
  )
}

export default App
