import React from "react";
export function Projects() {
    return (
    <section id="projects" className="py-24 px-6 bg-gradient-to-b from-bg-dark to-bg-gradient">
    <div className="max-w-5xl mx-auto">
    <h3 className="text-4xl font-bold text-center mb-12 text-primary">Projects</h3>
    <div className="grid md:grid-cols-2 gap-10">

    <div className="bg-primary p-6 rounded-2xl shadow 
    transition-all duration-300 
    hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary-light">
    <h4 className="text-2xl font-semibold mb-3 text-white">Beowulf Cluster</h4>
    <p className="text-white">Designed and built a smallscale PC cluster from consumer grade parts 
        utilising OpenMPI software. Prototyped in Microsoft Azure, built with Cisco networking devices.
        Enabled successful parallel compute. Completed as a SCRUM team following Agile philosophies.
    </p>
    </div>
    
    
    <div className="bg-primary p-6 rounded-2xl shadow 
    transition-all duration-300 
    hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary-light">
    <h4 className="text-2xl font-semibold mb-3 text-white">Portfolio React Website</h4>
    <p className="text-white">React website build. Version control maintained with GIT. Produced on VS Code.
        Componentised. Utilising Tailwind, JavaScript, Node.js. 
    </p>
    </div>
    </div>
    </div>
    </section>
    );
    }