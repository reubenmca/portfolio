import React from "react";
import { Link } from "react-scroll";

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gradient-to-b from-bg-dark to-bg-gradient text-white px-6"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-12">
        {/* Left side — Image */}
        <div className="flex-shrink-0 md:w-1/2 flex justify-center">
          <img
            src="/me.jpg"
            alt="Reuben"
            className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover shadow-2xl ring-4 ring-accent/30"
          />
        </div>

        {/* Right side — Text */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-5xl text-primary font-bold mb-4">
            Hi, I'm Reuben
          </h1>

          <p className="text-xl mb-6 text-accent max-w-xl">
            IT Graduate • Systems • Networks • Cloud • Problem Solver
          </p>

          <Link
            to="projects"
            smooth
            duration={600}
            className="mt-8 inline-block bg-primary text-white px-6 py-3 rounded-xl shadow hover:bg-accent cursor-pointer transition-all"
          >
            View My Work
          </Link>
        </div>
      </div>
    </section>
  );
}
