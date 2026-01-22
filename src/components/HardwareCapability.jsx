export function HardwareCapability() {
  return (
    <section id="HardwareCapability" className="bg-bg-section py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <header className="max-w-3xl space-y-4">
          <span className="inline-block text-sm font-semibold tracking-wide text-primary uppercase">
            Capability
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Hardware & Practical IT
          </h2>

          <p className="text-lg text-gray-700">
            Hands-on troubleshooting, system builds, and end-user support in
            real-world IT environments.
          </p>
        </header>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main */}
          <div className="lg:col-span-2 bg-bg-card rounded-2xl shadow-sm p-8 space-y-6">
            <h3 className="text-xl font-semibold text-gray-900">
              Practical Experience
            </h3>

            <ul className="space-y-4 text-gray-700">
              <li className="flex gap-3">
                <span className="text-primary font-semibold">•</span>
                <span>
                  PC assembly and upgrades tailored to specific use cases,
                  performance requirements, and budgets.
                </span>
              </li>

              <li className="flex gap-3">
                <span className="text-primary font-semibold">•</span>
                <span>
                  System diagnostics and fault detection. Resolving hardware,
                  operating system, and peripheral issues.
                </span>
              </li>

              <li className="flex gap-3">
                <span className="text-primary font-semibold">•</span>
                <span>
                  Operating system installation, recovery, and configuration
                  for stable day-to-day use.
                </span>
              </li>

              <li className="flex gap-3">
                <span className="text-primary font-semibold">•</span>
                <span>
                  Recovery of lost data from failed storage devices using safe
                  techniques.
                </span>
              </li>
            </ul>

            <div className="mt-6 rounded-xl bg-primary-light px-6 py-4">
              <p className="text-sm font-medium text-primary-dark">
                Emphasis on resolving issues efficiently, minimizing user
                disruption and downtime.
              </p>
            </div>
          </div>

          {/* Tools */}
          <aside className="bg-bg-card rounded-2xl shadow-sm p-8 space-y-6">
            <h3 className="text-xl font-semibold text-gray-900">
              Tools & Methods
            </h3>

            <div className="space-y-5 text-sm text-gray-700">
              <div>
                <p className="font-medium text-gray-900">Hardware</p>
                <p>PC components, peripherals, networking equipment</p>
              </div>

              <div>
                <p className="font-medium text-gray-900">Operating Systems</p>
                <p>Windows, Linux, MacOS (installation and recovery)</p>
              </div>

              <div>
                <p className="font-medium text-gray-900">Diagnostics</p>
                <p>System logs, fault isolation techniques</p>
              </div>

              <div>
                <p className="font-medium text-gray-900">Data Recovery</p>
                <p>Safe recovery of data from failed drives, backup restoration</p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
