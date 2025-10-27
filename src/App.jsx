import React, { useEffect, useRef } from 'react';
import Hero3D from './components/Hero3D.jsx';
import Projects from './components/Projects.jsx';
import AboutResume from './components/AboutResume.jsx';
import FloatingContactPanel from './components/FloatingContactPanel.jsx';

export default function App() {
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    if (document?.documentElement) {
      document.documentElement.style.scrollBehavior = 'smooth';
    }
  }, []);

  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen w-full bg-slate-950 font-sans text-white">
      <Hero3D onContactClick={scrollToContact} onProjectsClick={scrollToProjects} />

      <Projects ref={projectsRef} />

      <AboutResume ref={contactRef} />

      <footer className="relative z-10 border-t border-white/10 bg-slate-950/50 py-10 text-center text-sm text-white/60">
        <p>© {new Date().getFullYear()} Gullapudi Samanya • Built with 3D motion, accessibility, and impact in mind.</p>
      </footer>

      <FloatingContactPanel />
    </div>
  );
}
