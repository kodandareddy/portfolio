import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import HeroSection from "./Components/HeroSection/HeroSection";
import AOS from "aos";
import Skills from './Components/Skills/Skills'
import "aos/dist/aos.css";

import "aos/dist/aos.css";
import { useEffect, useRef } from "react";
import Projects from "./Components/Projects/Projects";
function App() {
 const home= useRef(null);
 const skills=useRef(null);
 const work=useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <div className="app">
      <Navbar  home={home} skills={skills} work={work} />
      <HeroSection home={home}/>
      <Skills skills={skills}/>
      <Projects work={work}/>
    </div>
  );
}

export default App;
