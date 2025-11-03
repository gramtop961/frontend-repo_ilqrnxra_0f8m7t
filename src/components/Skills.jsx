export default function Skills() {
  const skills = {
    "Core": ["DSA", "Problem Solving", "OOP", "System Design (basics)"],
    "Web Dev": ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express"],
    "Web3": ["Solidity", "Smart Contracts", "Ether.js", "Hardhat"],
    "DevOps": ["GitHub Actions", "Docker", "Kubernetes (basics)", "Linux", "CI/CD"],
    "Languages": ["Java", "TypeScript", "Python (basics)"]
  };

  return (
    <section id="skills" className="relative py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Skills</h2>
          <p className="mt-2 text-slate-600">A snapshot of the tools and domains I work with.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(skills).map(([group, items]) => (
            <div key={group} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-lg font-semibold text-slate-800">{group}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {items.map((s) => (
                  <span key={s} className="inline-flex items-center rounded-full bg-white border border-slate-200 px-3 py-1 text-sm text-slate-700">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
