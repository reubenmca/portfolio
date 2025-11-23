import React from "react";
import { Link } from "react-scroll";
export function Hero() {
    return (
    <section id="hero" className="h-screen flex flex-col justify-center items-center text-center px-4">
    <h2 className="text-5xl font-extrabold mb-4">Hi, I'm Reuben</h2>
    <p className="text-xl max-w-xl text-gray-600">Passionate IT specialist</p>
    <Link to="projects" smooth duration={600} className="mt-8 inline-block bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700 cursor-pointer">View My Work</Link>
    </section>
    );
    }