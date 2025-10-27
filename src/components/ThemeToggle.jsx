import React from 'react';
import { Moon, Sun } from 'lucide-react';

const ThemeToggle = ({ dark, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      aria-label="Toggle theme"
      className="fixed right-4 top-4 z-50 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-2 text-xs font-medium text-white shadow backdrop-blur transition hover:bg-white/20"
    >
      {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
      {dark ? 'Light' : 'Dark'}
    </button>
  );
};

export default ThemeToggle;
