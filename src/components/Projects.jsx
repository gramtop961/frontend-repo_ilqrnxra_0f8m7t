const PROJECTS = [
  {
    title: "Full‑Stack Web App",
    tag: "Web Dev",
    description:
      "A modern React + Node.js application with authentication, APIs, and responsive UI.",
  },
  {
    title: "Smart Contract DApp",
    tag: "Web3",
    description:
      "Solidity-based contracts with a clean frontend, deployed and tested with Hardhat.",
  },
  {
    title: "CI/CD Pipeline",
    tag: "DevOps",
    description:
      "Automated build, test, and deploy pipeline using GitHub Actions and Docker.",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Featured Projects</h2>
          <p className="mt-2 text-slate-600">A mix across Web Dev, Web3, and DevOps.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PROJECTS.map((p) => (
            <article key={p.title} className="group rounded-2xl border border-slate-200 bg-white p-6 hover:shadow-lg transition-shadow">
              <div className="text-xs uppercase tracking-wide text-blue-600 font-semibold">{p.tag}</div>
              <h3 className="mt-2 text-xl font-bold text-slate-900">{p.title}</h3>
              <p className="mt-2 text-slate-600">{p.description}</p>
              <div className="mt-4">
                <a
                  href="#"
                  className="inline-flex text-blue-600 hover:text-blue-700 font-medium"
                  onClick={(e) => e.preventDefault()}
                >
                  View case study
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
