import React from "react";
export function Skills() {
    const skills = ['React', 'JavaScript', 'Tailwind', 'Node.js', 'Python', 'C++', 'Arduino', 'Linux'];
    
    
    return (
    <section id="skills" className="py-24 px-6">
    <div className="max-w-5xl mx-auto">
    <h3 className="text-4xl font-bold text-center mb-12">Skills</h3>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center">
    {skills.map(skill => (
    <div key={skill} className="p-4 border rounded-xl shadow-sm bg-white">{skill}</div>
    ))}
    </div>
    </div>
    </section>
    );
    }