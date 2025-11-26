import React from "react";
import { Link } from "react-scroll";


export function Navbar() {
return (
<nav className="fixed w-full z-50 bg-bg-dark/80 backdrop-blur-md shadow-md">
<div className="max-w-5xl mx-auto flex justify-between items-center p-4">
<h1 className="text-xl font-bold text-primary">Reuben</h1>


<div className="space-x-6 text-sm font-medium text-primary">
<Link to="hero" smooth duration={600} className="cursor-pointer hover:text-accent">Home</Link>
<Link to="about" smooth duration={600} className="cursor-pointer hover:text-accent">About</Link>
<Link to="skills" smooth duration={600} className="cursor-pointer hover:text-accent">Skills</Link>
<Link to="projects" smooth duration={600} className="cursor-pointer hover:text-accent">Projects</Link>
<Link to="contact" smooth duration={600} className="cursor-pointer hover:text-accent">Contact</Link>
</div>
</div>
</nav>
);
}