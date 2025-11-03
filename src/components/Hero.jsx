import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative w-full min-h-[85vh] md:min-h-screen overflow-hidden bg-gradient-to-b from-white to-slate-50">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlay to enhance readability without blocking interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-white/80" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8 py-20 md:py-28">
        <div className="max-w-3xl">
          <p className="text-sm md:text-base font-medium tracking-widest uppercase text-slate-600">Portfolio</p>
          <h1 className="mt-3 text-4xl md:text-6xl font-extrabold leading-tight text-slate-900">
            Hi, I'm <span className="text-blue-600">Om Saraykar</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-slate-700">
            21-year-old developer passionate about DSA, Web Development, Web3, and DevOps. I love building end-to-end projects and sharpening problem-solving skills.
          </p>

          {/* Highlights */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="rounded-xl bg-white/80 backdrop-blur border border-slate-200 p-4">
              <p className="text-sm text-slate-500">LeetCode</p>
              <p className="text-xl font-semibold text-slate-900">300+ solved</p>
            </div>
            <div className="rounded-xl bg-white/80 backdrop-blur border border-slate-200 p-4">
              <p className="text-sm text-slate-500">Contest Rating</p>
              <p className="text-xl font-semibold text-slate-900">~1700</p>
            </div>
            <div className="rounded-xl bg-white/80 backdrop-blur border border-slate-200 p-4">
              <p className="text-sm text-slate-500">Language</p>
              <p className="text-xl font-semibold text-slate-900">Java</p>
            </div>
          </div>

          {/* Socials */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="https://linkedin.com/in/omsaraykar" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-slate-700 hover:bg-slate-50 transition">
              <span className="font-medium">LinkedIn</span>
            </a>
            <a href="https://github.com/omsaraykar" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-slate-700 hover:bg-slate-50 transition">
              <span className="font-medium">GitHub</span>
            </a>
            <a href="https://twitter.com/omsaraykar" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-slate-700 hover:bg-slate-50 transition">
              <span className="font-medium">X</span>
            </a>
            <a href="https://leetcode.com/u/omsaraykar" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-slate-700 hover:bg-slate-50 transition">
              <span className="font-medium">LeetCode</span>
            </a>
            <a href="https://www.geeksforgeeks.org/user/omsaraykar" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-slate-700 hover:bg-slate-50 transition">
              <span className="font-medium">GfG</span>
            </a>
            <a href="https://www.codechef.com/users/omsaraykar" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-slate-700 hover:bg-slate-50 transition">
              <span className="font-medium">CodeChef</span>
            </a>
            <a href="https://codeforces.com/profile/omsaraykar" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-slate-700 hover:bg-slate-50 transition">
              <span className="font-medium">Codeforces</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
