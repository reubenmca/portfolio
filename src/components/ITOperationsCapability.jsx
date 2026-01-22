export function ITOperationsCapability() {
  return (
    <section id="ITOperationsCapability" className="bg-bg-section py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <header className="max-w-3xl space-y-4">
          <span className="inline-block text-sm font-semibold tracking-wide text-primary uppercase">
            Capability
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            IT Operations & Infrastructure
          </h2>

          <p className="text-lg text-gray-700">
            Configuring, maintaining, and securing reliable IT environments and Infrastrutures, 
            both cloud and on-premises.
            Focusing on increased uptime, observability, and recoverability.
          </p>
        </header>

        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Responsibilities / Approach */}
          <div className="lg:col-span-2 bg-bg-card rounded-2xl shadow-sm p-8 space-y-6">
            <h3 className="text-xl font-semibold text-gray-900">
              Operational Focus
            </h3>

            <ul className="space-y-4 text-gray-700">
              <li className="flex gap-3">
                <span className="text-primary font-semibold">•</span>
                <span>
                  Network fundamentals such as routing and
                  firewall concepts. Ensuring secure and predictable traffic
                  flow.
                </span>
              </li>

              <li className="flex gap-3">
                <span className="text-primary font-semibold">•</span>
                <span>
                  Infrastructure and server configuration with attention to service continuity and system consistency.
                </span>
              </li>

              <li className="flex gap-3">
                <span className="text-primary font-semibold">•</span>
                <span>
                  Monitoring and alerting to detect issues early and minimize
                  user-facing disruption.
                </span>
              </li>

              <li className="flex gap-3">
                <span className="text-primary font-semibold">•</span>
                <span>
                  Security through access control, backups, and basic server-hardening practices. 
                  Firewall configuration with native and third-party tools.
                </span>
              </li>
            </ul>

            {/* Outcome strip */}
            <div className="mt-6 rounded-xl bg-primary-light px-6 py-4">
              <p className="text-sm font-medium text-primary-dark">
                Outcome-driven mindset: systems that are observable, recoverable,
                and maintainable under real-world conditions.
              </p>
            </div>
          </div>

          {/* Right: Tools & Technologies */}
          <aside className="bg-bg-card rounded-2xl shadow-sm p-8 space-y-6">
            <h3 className="text-xl font-semibold text-gray-900">
              Tools & Technologies
            </h3>

            <div className="space-y-5 text-gray-700 text-sm">
              <div>
                <p className="font-medium text-gray-900">Operating Systems</p>
                <p>Linux (system administration, services, permissions)</p>
              </div>

              <div>
                <p className="font-medium text-gray-900">Networking</p>
                <p>VLANs, routing, firewall concepts, DNS, DHCP</p>
              </div>

              <div>
                <p className="font-medium text-gray-900">Monitoring</p>
                <p>Prometheus / Grafana / Nagios </p>
              </div>

              <div>
                <p className="font-medium text-gray-900">Security</p>
                <p>Access control, backups, basic server-hardening</p>
              </div>

              <div>
                <p className="font-medium text-gray-900">Virtualization</p>
                <p>Basic VM and container exposure</p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
