import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';

function App() {
  return (
    <div className="min-h-screen text-slate-900 bg-white">
      {/* Nav */}
      <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-slate-200/60">
        <div className="max-w-6xl mx-auto px-6 md:px-8 h-14 flex items-center justify-between">
          <a href="#home" className="font-extrabold tracking-tight text-lg">Om Saraykar</a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-700">
            <a href="#skills" className="hover:text-blue-600">Skills</a>
            <a href="#projects" className="hover:text-blue-600">Projects</a>
            <a href="#achievements" className="hover:text-blue-600">Achievements</a>
          </nav>
          <a
            href="mailto:om@example.com"
            className="inline-flex items-center justify-center rounded-full bg-blue-600 text-white text-sm font-semibold h-9 px-4 hover:bg-blue-700"
          >
            Contact
          </a>
        </div>
      </header>

      <main>
        <Hero />
        <Skills />
        <Projects />
        <Achievements />
      </main>

      <footer className="border-t border-slate-200 py-8">
        <div className="max-w-6xl mx-auto px-6 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-600">
          <p>© {new Date().getFullYear()} Om Saraykar. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="https://linkedin.com/in/omsaraykar" className="hover:text-blue-600" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://github.com/omsaraykar" className="hover:text-blue-600" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://twitter.com/omsaraykar" className="hover:text-blue-600" target="_blank" rel="noreferrer">X</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
