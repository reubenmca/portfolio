import React from "react";
export function About() {
  return (
    <section
      id="about"
      className="py-24 text-primary px-6 bg-gradient-to-b from-bg-gradient to-bg-dark"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-4xl font-bold mb-6">About Me</h3>
        <p className="text-lg text-accent leading-relaxed">
          I am an Information Technology graduate from Dunedin, New Zealand! I
          specialise in enabling efficient and optimized IT operations,
          supporting users, and monitoring infrastructure. I have a strong
          foundation in systems administration, network managment, and software
          troubleshooting. I have employed industry standard technologies to
          deploy, configure, monitor, and secure IT environments.
        </p>
        <br></br>
        <p className="text-lg text-accent leading-relaxed">
          I am highly motivated, organised, and bring an entreprenurial mindset
          to my work. I thrive in team environments where I can apply my
          technical skillset, and collaborate with likeminded professionals.
        </p>
      </div>
    </section>
  );
}
