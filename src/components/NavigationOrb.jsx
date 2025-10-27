import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

const sections = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

const NavigationOrb = ({ selected, onSelect }) => {
  const rotate = useMotionValue(0);
  const glow = useTransform(rotate, [ -200, 0, 200 ], [ 0.4, 0.9, 0.4 ]);

  return (
    <div className="sticky top-3 z-40 mx-auto -mt-10 mb-10 flex w-full justify-center">
      <motion.div
        drag
        dragMomentum={false}
        style={{ rotate }}
        className="relative flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-fuchsia-600 to-indigo-600 p-[2px] shadow-[0_0_25px_rgba(168,85,247,0.45)]"
      >
        <motion.button
          onClick={() => onSelect('about')}
          style={{ boxShadow: `0 0 30px rgba(99,102,241,${glow.get?.() || 0.6})` }}
          className={`h-full w-full rounded-full bg-black/70 text-sm font-semibold text-white backdrop-blur transition ${selected === 'about' ? 'ring-2 ring-fuchsia-400' : ''}`}
        >
          Menu
        </motion.button>
        {/* halo */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-0 rounded-full bg-[conic-gradient(from_90deg,rgba(168,85,247,0.35),transparent_35%,rgba(99,102,241,0.35),transparent_70%,rgba(59,130,246,0.35))] blur-lg"
        />
        {/* spokes */}
        <div className="absolute -bottom-16 left-1/2 flex -translate-x-1/2 gap-3">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => onSelect(s.id)}
              className={`rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs text-white/90 transition hover:bg-white/10 ${selected === s.id ? 'ring-1 ring-fuchsia-400' : ''}`}
            >
              {s.label}
            </button>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default NavigationOrb;
