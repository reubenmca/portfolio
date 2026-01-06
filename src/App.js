import React from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Gallery } from "./components/Gallery";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";

export default function App() {
  return (
    <div className="font-sans text-gray-900 scroll-smooth ">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Gallery />
      <Contact />
      <footer className="py-6 text-center text-gray-500 bg-bg-dark">
        © {new Date().getFullYear()} Reuben. All rights reserved.
      </footer>
    </div>
  );
}
