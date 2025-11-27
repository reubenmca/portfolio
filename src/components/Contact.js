import React from "react";
export function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-6 bg-gradient-to-b from-bg-gradient to-bg-dark"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-4xl font-bold mb-6 text-primary">Contact</h3>
        <p className="text-lg text-accent mb-6">
          Interested in working together? Reach out!
        </p>
        <a
          href="mailto:reumca3@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="inline-block bg-primary text-white px-6 py-3 rounded-xl shadow hover:bg-accent transition-all"
        >
          Email Me
        </a>
      </div>
    </section>
  );
}
