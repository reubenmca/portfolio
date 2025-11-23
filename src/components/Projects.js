import React from "react";
export function Projects() {
    return (
    <section id="projects" className="py-24 px-6 bg-gray-50">
    <div className="max-w-5xl mx-auto">
    <h3 className="text-4xl font-bold text-center mb-12">Projects</h3>
    <div className="grid md:grid-cols-2 gap-10">
    <div className="bg-white p-6 rounded-2xl shadow">
    <h4 className="text-2xl font-semibold mb-3">Beowulf Cluster</h4>
    <p className="text-gray-600">Designed and built a smallscale PC cluster from consumer grade parts 
        utilising OpenMPI software. Prototyped in Microsoft Azure, built with Cisco networking devices.
        Enabled successful parallel compute. Completed as a SCRUM team following Agile philosophies.
    </p>
    </div>
    
    
    <div className="bg-white p-6 rounded-2xl shadow">
    <h4 className="text-2xl font-semibold mb-3">Portfolio React Website</h4>
    <p className="text-gray-600">React website build. Version control maintained with GIT. Produced on VS Code.
        Componentised. Utilising Tailwind, JavaScript, Node.js. 
    </p>
    </div>
    </div>
    </div>
    </section>
    );
    }