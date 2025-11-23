import React from "react";
import { Link } from "react-scroll";


export function Navbar() {
return (
<nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur border-b z-50">
<div className="max-w-5xl mx-auto flex justify-between items-center p-4">
<h1 className="text-xl font-bold">Reuben</h1>


<div className="space-x-6 text-sm font-medium">
<Link to="hero" smooth duration={600} className="cursor-pointer hover:text-blue-500">Home</Link>
<Link to="about" smooth duration={600} className="cursor-pointer hover:text-blue-500">About</Link>
<Link to="skills" smooth duration={600} className="cursor-pointer hover:text-blue-500">Skills</Link>
<Link to="projects" smooth duration={600} className="cursor-pointer hover:text-blue-500">Projects</Link>
<Link to="contact" smooth duration={600} className="cursor-pointer hover:text-blue-500">Contact</Link>
</div>
</div>
</nav>
);
}