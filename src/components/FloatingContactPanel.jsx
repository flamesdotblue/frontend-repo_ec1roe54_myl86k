import React from 'react';
import { Mail, Linkedin, Phone } from 'lucide-react';

export default function FloatingContactPanel() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-3 text-white shadow-lg backdrop-blur">
        <a
          href="mailto:samanyagullapudi24@gmail.com"
          className="group inline-flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-500/20 text-cyan-200 ring-cyan-400/40 transition hover:bg-cyan-500/30 hover:text-white focus:outline-none focus:ring-2"
          aria-label="Email"
        >
          <Mail size={20} />
        </a>
        <a
          href="https://www.linkedin.com/in/gullapudi-samanya-79347b25b"
          target="_blank"
          rel="noreferrer"
          className="group inline-flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/20 text-blue-200 ring-blue-400/40 transition hover:bg-blue-500/30 hover:text-white focus:outline-none focus:ring-2"
          aria-label="LinkedIn"
        >
          <Linkedin size={20} />
        </a>
        <a
          href="tel:+917780462204"
          className="group inline-flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-200 ring-emerald-400/40 transition hover:bg-emerald-500/30 hover:text-white focus:outline-none focus:ring-2"
          aria-label="Phone"
        >
          <Phone size={20} />
        </a>
      </div>
    </div>
  );
}
