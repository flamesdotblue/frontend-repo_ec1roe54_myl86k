import React, { useEffect, useMemo, useState } from 'react';
import Hero3D from './components/Hero3D';
import NavigationOrb from './components/NavigationOrb';
import ContentSections from './components/ContentSections';
import ThemeToggle from './components/ThemeToggle';

function App() {
  const [selected, setSelected] = useState('about');
  const [dark, setDark] = useState(true);

  const handleSelect = (id) => {
    setSelected(id);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const classRoot = useMemo(
    () =>
      dark
        ? 'bg-black text-white'
        : 'bg-gradient-to-b from-slate-50 via-white to-slate-100 text-slate-900',
    [dark]
  );

  useEffect(() => {
    // smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);

  return (
    <div className={`min-h-screen ${classRoot}`}>
      <ThemeToggle dark={dark} onToggle={() => setDark((v) => !v)} />

      <Hero3D onContactClick={() => handleSelect('contact')} />

      <NavigationOrb selected={selected} onSelect={handleSelect} />

      <ContentSections selected={selected} />

      <footer className="mx-auto mt-16 max-w-7xl px-6 pb-12 text-center text-sm text-zinc-400">
        <p>© {new Date().getFullYear()} Gullapudi Samanya • Built with love for 3D, AI/ML and Human-Centered Tech.</p>
      </footer>
    </div>
  );
}

export default App;
