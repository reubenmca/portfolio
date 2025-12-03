import React from "react";
export function Skills() {
  const skills = [
    "System Monitoring",
    "System Config",
    "SQL Server",
    "Firewalls",
    "Scripting",
    "GIT",
    "Data Protection",
    "Linux",
  ];

  return (
    <section id="skills" className="py-6 px-6 bg-bg-dark">
      <div className="max-w-5xl mx-auto">
        <h3 className="text-4xl text-primary font-bold text-center mb-12">
          Skills
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center">
          {skills.map((skill) => (
            <div
              key={skill}
              className="p-4 text-white rounded-xl shadow-sm bg-primary"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}