import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const Hero3D = ({ onContactClick }) => {
  return (
    <section id="home" className="relative h-[90vh] w-full overflow-hidden bg-gradient-to-b from-zinc-900 via-black to-zinc-900 text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient vignette overlay (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(168,85,247,0.18),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(34,197,94,0.15),transparent_45%),radial-gradient(circle_at_50%_80%,rgba(59,130,246,0.18),transparent_45%)]" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-mono text-3xl font-semibold tracking-tight sm:text-5xl md:text-6xl"
        >
          Gullapudi Samanya
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.8 }}
          className="mt-4 max-w-2xl text-sm text-zinc-300 sm:text-lg"
        >
          Web Development • AI/ML • IoT • Assistive Technology
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-8 flex items-center gap-4"
        >
          <a
            href="#projects"
            className="rounded-full bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur transition hover:bg-white/20"
          >
            Explore Projects
          </a>
          <button
            onClick={onContactClick}
            className="group relative overflow-hidden rounded-full bg-gradient-to-r from-fuchsia-500 via-violet-500 to-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-lg transition focus:outline-none focus:ring-2 focus:ring-fuchsia-400"
          >
            <span className="relative z-10">Contact Me</span>
            <span className="absolute inset-0 translate-y-full bg-white/20 transition-transform duration-300 group-active:translate-y-0" />
          </button>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
          className="mt-6 text-xs text-zinc-400"
        >
          Let’s Build the Future Together
        </motion.p>
      </div>
    </section>
  );
};

export default Hero3D;
