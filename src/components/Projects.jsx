import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Sign Language Detection Using Machine Learning (Isharaa!)',
    context:
      'Designed to reduce barriers for the hearing impaired, enabling real-time gesture recognition and translation for better communication.',
    process:
      'Full-cycle development: ML modeling (MediaPipe, Random Forest), video/image processing (OpenCV), and multilingual output via Google Translate. Desktop and web UIs focused on accessibility and responsiveness.',
    result:
      'Recognizes A–Z, 0–9, and common phrases with instant translations—supporting education and daily communication.',
    media:
      'GUI screenshots, code visualizations, animated process videos.',
    accent: 'from-cyan-400 to-blue-500',
  },
  {
    title: 'Sonic Sight – Glasses for Blind',
    context:
      'Assistive AR device for visually impaired users to safely navigate and interact with their surroundings.',
    process:
      'Hardware design with sensors and IoT; AR overlays and smartphone connectivity for real-time feedback. Prototyped animated user scenarios to demonstrate capabilities.',
    result:
      'Enhances independence with real-time environmental interaction—innovative blend of AR and IoT for accessibility.',
    media: '3D renders, demo videos, feature diagrams.',
    accent: 'from-fuchsia-400 to-pink-500',
  },
  {
    title: 'Automatic Environmental Radiation Monitoring System',
    context:
      'Real-time safety solution for monitoring environmental radiation in industrial settings.',
    process:
      'CAD-driven prototyping, sensor integration, and live data output. Delivered a complete mini-project from design to deployment.',
    result:
      'Accurate data capture for workplace safety—contributed to product development and STEAM education.',
    media: 'Circuit diagrams, CAD visualizations, performance data.',
    accent: 'from-amber-400 to-orange-500',
  },
  {
    title: 'Robotics/IoT Workshop Projects (Robotic Soham Academy)',
    context:
      'Hands-on robotics experience via a one-day workshop focused on Arduino-powered automation.',
    process:
      'Co-built IoT demo devices—microcontroller programming, hardware integration, and rapid prototyping.',
    result:
      'Built and presented multiple IoT concepts; learned new technologies and fast iteration.',
    media: 'Workshop snapshots, code snippets, device showcase videos.',
    accent: 'from-emerald-400 to-teal-500',
  },
];

function ProjectCard({ p, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: 0.05 * index }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 text-white backdrop-blur-md"
    >
      <div className={`absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br ${p.accent} opacity-30 blur-3xl transition group-hover:opacity-50`} />

      <h3 className="text-xl font-bold sm:text-2xl">{p.title}</h3>
      <p className="mt-3 text-sm text-white/80"><span className="font-semibold text-white">Project Context:</span> {p.context}</p>
      <p className="mt-2 text-sm text-white/80"><span className="font-semibold text-white">Process & Role:</span> {p.process}</p>
      <p className="mt-2 text-sm text-white/80"><span className="font-semibold text-white">Result Highlights:</span> {p.result}</p>
      <p className="mt-2 text-xs text-white/60"><span className="font-semibold text-white/80">Media:</span> {p.media}</p>

      <div className="mt-4 flex items-center gap-3 text-sm text-cyan-300">
        <a href="#contact" className="inline-flex items-center gap-1 hover:underline">
          Learn more <ExternalLink size={16} />
        </a>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative z-10 mx-auto max-w-7xl px-6 py-20 text-white">
      <div className="mb-10 flex items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-extrabold sm:text-4xl">Featured Work</h2>
          <p className="mt-2 max-w-3xl text-white/70">View selected projects spanning AI, IoT, and web—each built for real-world impact and accessibility.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <ProjectCard key={p.title} p={p} index={i} />
        ))}
      </div>
    </section>
  );
}
