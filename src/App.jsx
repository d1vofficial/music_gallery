import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Reels from "./components/Reels";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      {/* <InstagramReels/> */}
      <Reels />
      <Contact />
    </>
  );
}

export default App;
