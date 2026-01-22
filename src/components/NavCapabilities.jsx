import React, { useState } from "react";
import { Link } from "react-scroll";

export function NavCapabilities() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-bg-dark/80 backdrop-blur-md shadow-md">
      <div className="max-w-5xl mx-auto flex justify-between items-center p-4">

        {/* Logo */}
        <h1 className="text-xl font-bold text-primary">Reuben</h1>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 text-sm font-medium text-primary">
          <Link to="hero" smooth duration={600} className="cursor-pointer hover:text-accent">
            Home
          </Link>
          <Link to="ITOperationsCapability" smooth duration={600} className="cursor-pointer hover:text-accent">
            IT Operations
          </Link>
          <Link to="WebDevelopmentCapability" smooth duration={600} className="cursor-pointer hover:text-accent">
            Web Development
          </Link>
          <Link to="HardwareCapability" smooth duration={600} className="cursor-pointer hover:text-accent">
            Hardware & IT
          </Link>
          <Link to="contact" smooth duration={600} className="cursor-pointer hover:text-accent">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-primary focus:outline-none text-2xl"
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-bg-dark/95 backdrop-blur-md flex flex-col items-center space-y-4 py-4 text-primary">
        <Link to="hero" smooth duration={600} className="cursor-pointer hover:text-accent">
            Home
          </Link>
          <Link to="ITOperationsCapability" smooth duration={600} className="cursor-pointer hover:text-accent">
            IT Operations
          </Link>
          <Link to="WebDevelopmentCapability" smooth duration={600} className="cursor-pointer hover:text-accent">
            Web Development
          </Link>
          <Link to="HardwareCapability" smooth duration={600} className="cursor-pointer hover:text-accent">
            Hardware & IT
          </Link>
          <Link to="contact" smooth duration={600} className="cursor-pointer hover:text-accent">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
