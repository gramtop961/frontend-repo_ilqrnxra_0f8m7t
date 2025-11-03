export default function Achievements() {
  const stats = [
    { label: 'LeetCode Solved', value: '300+' },
    { label: 'Contest Rating', value: '~1700' },
    { label: 'Primary Language', value: 'Java' },
    { label: 'Age', value: '21' },
  ];

  const platforms = [
    { name: 'LeetCode', url: 'https://leetcode.com/u/omsaraykar' },
    { name: 'GeeksforGeeks', url: 'https://www.geeksforgeeks.org/user/omsaraykar' },
    { name: 'CodeChef', url: 'https://www.codechef.com/users/omsaraykar' },
    { name: 'Codeforces', url: 'https://codeforces.com/profile/omsaraykar' },
  ];

  return (
    <section id="achievements" className="relative py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="mb-8 md:mb-12 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Competitive Programming</h2>
            <p className="mt-2 text-slate-600">Problem solving keeps me sharp and curious.</p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((s) => (
            <div key={s.label} className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center">
              <div className="text-2xl md:text-3xl font-extrabold text-slate-900">{s.value}</div>
              <div className="mt-1 text-sm text-slate-600">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6">
          <h3 className="text-lg font-semibold text-slate-900">Profiles</h3>
          <div className="mt-4 flex flex-wrap gap-3">
            {platforms.map((p) => (
              <a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-slate-700 hover:bg-white transition"
              >
                <span className="font-medium">{p.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
