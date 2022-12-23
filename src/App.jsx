import React, { useRef } from 'react';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import LoadingScreen from './components/Loading-Screen';
import Background from './components/Background';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import './app-styles';

export default function App() {
  const scrollContainerRef = useRef(null);
  return (
    <>
      {/* Re-enable loading screen later */}
      {/* <LoadingScreen /> */}
      <LocomotiveScrollProvider
        containerRef={scrollContainerRef}
        options={{ smooth: true }}
        watch={[]}
      >
        <Navbar />
        <main data-scroll-container ref={scrollContainerRef}>
          <Intro />
          <About />
          <Projects />
          <Contact />
        </main>
        {/* <Background /> */}
      </LocomotiveScrollProvider>
    </>
  );
}
