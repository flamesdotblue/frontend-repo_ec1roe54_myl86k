import React, { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Mail, Phone, Linkedin } from 'lucide-react';

const SectionWrapper = ({ id, children, title, subtitle }) => (
  <section id={id} className="relative mx-auto mb-24 max-w-7xl px-6">
    <div className="mb-8">
      <h2 className="text-2xl font-semibold tracking-tight text-zinc-100 sm:text-3xl">{title}</h2>
      {subtitle && <p className="mt-2 max-w-3xl text-sm text-zinc-400">{subtitle}</p>}
    </div>
    {children}
  </section>
);

const AboutTimeline = () => {
  const milestones = [
    { title: 'MVSR Engineering College', period: '2021–2025', detail: 'BE in Electronics & Communication, CGPA 8.5' },
    { title: 'Narayana Junior College', period: '2019–2021', detail: 'Percentage: 95.2%' },
    { title: 'Ravindra Bharathi School', period: 'Till 2019', detail: 'GPA: 9.5' },
    { title: 'NCC “C” Certificate', period: 'Leadership', detail: 'Confidence, resilience and discipline' },
  ];

  return (
    <div className="relative grid grid-cols-1 items-start gap-8 lg:grid-cols-2">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
      >
        <p className="text-zinc-300">
          Hi! I’m Gullapudi Samanya, a motivated engineering student with a passion for problem-solving, innovation, and balancing academic and extracurricular life. My experience in the National Cadet Corps instilled confidence and resilience, helping me tackle technical and real-world challenges head-on.
        </p>
        <div className="mt-6 grid grid-cols-2 gap-3 text-sm text-zinc-300">
          <span className="rounded-md bg-white/5 px-3 py-2">Web Development</span>
          <span className="rounded-md bg-white/5 px-3 py-2">AI/ML</span>
          <span className="rounded-md bg-white/5 px-3 py-2">IoT</span>
          <span className="rounded-md bg-white/5 px-3 py-2">Assistive Tech</span>
        </div>
      </motion.div>

      <motion.div
        initial={{ rotate: 20, opacity: 0 }}
        whileInView={{ rotate: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative h-[420px] overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-indigo-500/10 via-fuchsia-500/10 to-transparent p-6"
      >
        <div className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-gradient-to-b from-fuchsia-400/70 via-indigo-400/50 to-transparent" />
        <div className="absolute inset-0 [perspective:900px]">
          {milestones.map((m, i) => (
            <motion.div
              key={m.title}
              className="absolute left-1/2 w-[min(90%,420px)] -translate-x-1/2 rounded-xl border border-white/10 bg-black/50 p-4 text-zinc-200 shadow-2xl backdrop-blur [transform-style:preserve-3d]"
              style={{ top: `${i * 22 + 6}%`, rotateY: i % 2 === 0 ? -18 : 18 }}
              whileHover={{ z: 40, scale: 1.02 }}
            >
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium">{m.title}</span>
                <span className="text-zinc-400">{m.period}</span>
              </div>
              <p className="mt-1 text-sm text-zinc-400">{m.detail}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

const ProjectsShowcase = () => {
  const projects = [
    {
      title: 'Sign Language Detection (ML)',
      desc: 'Real-time hand gesture recognition for accessibility using MediaPipe, OpenCV, Random Forest, Google Translate API.',
      links: [
        { href: 'https://github.com/', label: 'Code', icon: Github },
      ],
    },
    {
      title: 'Sonic Sight – Glasses for Blind',
      desc: 'Assistive wearable merging sensors and AR for the visually impaired. Illustrated with animated diagrams.',
      links: [
        { href: 'https://github.com/', label: 'Code', icon: Github },
      ],
    },
    {
      title: 'Environmental Radiation Monitor',
      desc: 'Mini-project using CAD and IoT concepts with 3D circuit and data flow visualization.',
      links: [
        { href: 'https://github.com/', label: 'Code', icon: Github },
      ],
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      {projects.map((p, idx) => (
        <motion.article
          key={p.title}
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: idx * 0.1 }}
          whileHover={{ rotateX: 6, rotateY: -6, translateZ: 20 }}
          className="group relative min-h-[260px] overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-5 text-zinc-200 shadow-xl [transform-style:preserve-3d]"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(168,85,247,0.16),transparent_40%),radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.12),transparent_45%)]" />
          <h3 className="relative z-10 text-lg font-semibold">{p.title}</h3>
          <p className="relative z-10 mt-2 text-sm text-zinc-400">{p.desc}</p>
          <div className="relative z-10 mt-4 flex items-center gap-3">
            {p.links.map((l) => (
              <a key={l.label} href={l.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white hover:bg-white/10">
                <l.icon className="h-3.5 w-3.5" />
                {l.label}
                <ExternalLink className="h-3 w-3 opacity-70" />
              </a>
            ))}
          </div>

          {/* holographic line */}
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            className="absolute -left-10 -top-10 h-40 w-40 rotate-12 bg-gradient-to-tr from-fuchsia-500/30 via-indigo-400/20 to-transparent blur-2xl"
          />
        </motion.article>
      ))}
    </div>
  );
};

const SkillsAndContact = () => {
  // simple floating node network
  const nodes = useMemo(
    () => [
      { label: 'Python', x: 10, y: 20 },
      { label: 'C', x: 65, y: 15 },
      { label: 'HTML', x: 30, y: 65 },
      { label: 'CSS', x: 75, y: 55 },
      { label: 'MySQL', x: 50, y: 35 },
      { label: 'ML', x: 20, y: 45 },
      { label: 'AI', x: 85, y: 35 },
      { label: 'IoT', x: 60, y: 75 },
      { label: 'Robotics', x: 15, y: 80 },
      { label: 'Git/GitHub', x: 40, y: 85 },
      { label: 'VS Code', x: 88, y: 75 },
    ],
    []
  );

  const [typed, setTyped] = useState('');
  useEffect(() => {
    const full = 'Open channel: Hello Samanya! Initializing futuristic console... Type a message or reach out via LinkedIn, Email, or Phone.';
    let i = 0;
    const id = setInterval(() => {
      setTyped(full.slice(0, i++));
      if (i > full.length) clearInterval(id);
    }, 18);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      {/* skills network */}
      <div className="relative h-[380px] overflow-hidden rounded-2xl border border-white/10 bg-black/50 p-4">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_300px_at_20%_20%,rgba(99,102,241,0.15),transparent),radial-gradient(500px_300px_at_80%_70%,rgba(168,85,247,0.12),transparent)]" />
        <div className="absolute inset-0">
          {nodes.map((n, i) => (
            <motion.div
              key={n.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="absolute rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-white shadow"
              style={{ left: `${n.x}%`, top: `${n.y}%` }}
              whileHover={{ scale: 1.08 }}
            >
              {n.label}
            </motion.div>
          ))}
        </div>
      </div>

      {/* contact console */}
      <div className="relative h-[380px] overflow-hidden rounded-2xl border border-white/10 bg-zinc-950">
        <div className="absolute inset-0 grid grid-rows-[auto,1fr,auto] p-5 font-mono text-sm text-green-300">
          <div className="mb-2 text-xs text-green-400/80">/galactic/console$ connect --secure</div>
          <div className="relative overflow-auto rounded-md border border-green-400/20 bg-black/60 p-3 shadow-inner">
            <pre className="whitespace-pre-wrap leading-relaxed">{typed}|</pre>
          </div>
          <div className="mt-3 flex items-center gap-3">
            <a href="mailto:samanya@example.com" className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-white hover:bg-white/10">
              <Mail className="h-4 w-4" /> Email
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-white hover:bg-white/10">
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
            <a href="tel:+910000000000" className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-white hover:bg-white/10">
              <Phone className="h-4 w-4" /> Call
            </a>
          </div>
        </div>
        {/* ripple */}
        <motion.div
          className="pointer-events-none absolute inset-0"
          animate={{ boxShadow: [
            'inset 0 0 0 0 rgba(147,197,253,0.1)',
            'inset 0 0 0 20px rgba(147,197,253,0.03)',
            'inset 0 0 0 0 rgba(147,197,253,0.1)'
          ] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </div>
    </div>
  );
};

const ContentSections = ({ selected }) => {
  return (
    <div>
      <SectionWrapper id="about" title="About" subtitle="A quick look at the journey and values that drive me.">
        <AboutTimeline />
      </SectionWrapper>

      <SectionWrapper id="projects" title="Featured Projects" subtitle="Interactive showcases with a holographic vibe.">
        <ProjectsShowcase />
      </SectionWrapper>

      <SectionWrapper id="skills" title="Skills & Interests" subtitle="An interactive graph of tools and domains I work with, plus a futuristic console to reach me.">
        <SkillsAndContact />
      </SectionWrapper>

      <SectionWrapper id="contact" title="Contact Me" subtitle="Let’s build something meaningful and future-forward.">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-zinc-200">
          <p>Prefer a direct line? Use the console above or email: samanya@example.com</p>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default ContentSections;
