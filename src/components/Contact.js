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

        <div className="flex gap-4 justify-center mt-6">
  {/* Email Icon */}
  <a
    href="mailto:reumca3@gmail.com"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-primary text-white p-3 rounded-full shadow hover:bg-accent transition"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M1.5 4.5h21v15h-21v-15zm0-1.5a1.5 1.5 0 0 0-1.5 1.5v15a1.5 1.5 0 0 0 1.5 1.5h21a1.5 1.5 0 0 0 1.5-1.5v-15a1.5 1.5 0 0 0-1.5-1.5h-21zm10.5 7l10.5-7h-21l10.5 7z"/>
    </svg>
  </a>

  {/* LinkedIn Icon */}
  <a
    href="https://www.linkedin.com/in/reuben-mcarley-98a16b26b/"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-primary text-white p-3 rounded-full shadow hover:bg-accent transition-all"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 24V7h5v17H0zm7.5-17h4.77v2.32h.07c.66-1.25 2.27-2.57 4.67-2.57 4.99 0 5.91 3.28 5.91 7.55V24h-5V15.42c0-2.03-.04-4.64-2.83-4.64-2.83 0-3.27 2.21-3.27 4.5V24h-5V7z"/>
    </svg>
  </a>

  {/* GitHub Icon */}
  <a
    href="https://github.com/reubenmca"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-primary text-white p-3 rounded-full shadow hover:bg-accent transition-all"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.089-.744.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.418-1.305.762-1.605-2.665-.304-5.467-1.332-5.467-5.93 0-1.31.468-2.38 1.235-3.22-.123-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.29-1.552 3.295-1.23 3.295-1.23.655 1.653.242 2.873.119 3.176.77.84 1.232 1.91 1.232 3.22 0 4.61-2.807 5.625-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.216.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
    </svg>
  </a>

  {/* Download CV */}
  <a
  href="/assets/Reuben_McArley_CV.pdf" // put your CV in public/assets
  download
  className="bg-primary text-white px-6 py-3 rounded-xl shadow hover:bg-accent transition"
>
  Download CV
</a>
</div>




      </div>
    </section>
  );
}
