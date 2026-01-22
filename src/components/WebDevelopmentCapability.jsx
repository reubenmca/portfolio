export function WebDevelopmentCapability() {
  return (
    <section id="WebDevelopmentCapability" className="bg-bg-section py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <header className="max-w-3xl space-y-4">
          <span className="inline-block text-sm font-semibold tracking-wide text-primary uppercase">
            Capability
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Web Development
          </h2>

          <p className="text-lg text-gray-700">
            Building design-driven web applications. Focusing
            on clarity, performance, and maintainability.
          </p>
        </header>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main */}
          <div className="lg:col-span-2 bg-bg-card rounded-2xl shadow-sm p-8 space-y-6">
            <h3 className="text-xl font-semibold text-gray-900">
              Development Approach
            </h3>

            <ul className="space-y-4 text-gray-700">
              <li className="flex gap-3">
                <span className="text-primary font-semibold">•</span>
                <span>
                  Component-based architecture that prioritizes readability,
                  reusability, and workability.
                </span>
              </li>

              <li className="flex gap-3">
                <span className="text-primary font-semibold">•</span>
                <span>
                  Translating design intent into clean, accessible, and
                  responsive user interfaces.
                </span>
              </li>

              <li className="flex gap-3">
                <span className="text-primary font-semibold">•</span>
                <span>
                  Performance-aware development. Optimizing assets to deliver
                  sensible rendering times.
                </span>
              </li>

              <li className="flex gap-3">
                <span className="text-primary font-semibold">•</span>
                <span>
                  Version control and deployment workflows that support
                  iteration and collaboration.
                </span>
              </li>
            </ul>

            <div className="mt-6 rounded-xl bg-primary-light px-6 py-4">
              <p className="text-sm font-medium text-primary-dark">
                Focus on codebases that are easy to understand, extend, and
                hand over to other developers.
              </p>
            </div>
          </div>

          {/* Tools */}
          <aside className="bg-bg-card rounded-2xl shadow-sm p-8 space-y-6">
            <h3 className="text-xl font-semibold text-gray-900">
              Tools & Technologies
            </h3>

            <div className="space-y-5 text-sm text-gray-700">
              <div>
                <p className="font-medium text-gray-900">Frontend</p>
                <p>React, JavaScript, Svelte</p>
              </div>

              <div>
                <p className="font-medium text-gray-900">Styling</p>
                <p>Tailwind CSS, modern CSS layout techniques</p>
              </div>

              <div>
                <p className="font-medium text-gray-900">Tooling</p>
                <p>Git, GitHub, basic CI/CD workflows</p>
              </div>

              <div>
                <p className="font-medium text-gray-900">Deployment</p>
                <p>Azure, Netlify, static site hosting</p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
